# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  name            :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :email, :session_token, presence: true, uniqueness: true
    validates :name, presence: true
    validates :password_digest, presence: { message: 'Password can\'t be blank' }
    validates :password, length: { minimum: 8, allow_nil: true}
    validate :validateEmail
    attr_reader :password

    after_initialize :ensure_session_token

    has_many :notes,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :AdditionalDetail,
        dependent: :destroy

    has_many :expenses,
        primary_key: :id,
        foreign_key: :profile_id,
        class_name: :Expense,
        dependent: :destroy

    has_many :friends,
        primary_key: :id,
        foreign_key: :friend_id,
        class_name: :Friend,
        dependent: :destroy

    def friends_list
        obj ={}
        friends.map do |friendship| 
            obj[friendship.id] = User.find(friendship.profile_id)
        end
        obj
    end

    def you_owe
        detailed_expenses = self.expenses.includes(:expense_details)
        amount = 0
        more_details = Hash.new {|h,k| h[k] = k }
        detailed_expenses.each do |ex|
            ex.expense_details.each do |ed|
                if ed.paid_by != self.id
                    amount += (ed.amount_paid / 2.0)
                    more_details[ed.paid_by] ||= {}
                    more_details[ed.paid_by] += (ed.amount_paid / 2.0)
                end
            end
        end
        [amount, more_details]
    end
    # change the ed.paid_by on line 72 to reflect profile_id of friend
    def you_are_owed
        detailed_expenses = self.expenses.includes(:expense_details)
        amount = 0
        more_details = Hash.new {|h,k| h[k] = k }
        detailed_expenses.each do |ex|
            ex.expense_details.each do |ed|
                if ed.paid_by == self.id
                    amount += (ed.amount_paid / 2.0)
                    more_details[ed.paid_by] ||= {}
                    more_details[ed.paid_by] += ed.amount_paid / 2.0
                end
            end
        end
        [amount, more_details]
    end

    def validateEmail
       errors[:email] << "is not valid" if self.email.split('@').length != 2
    end

    def self.find_by_credentials(email, password)
        @user = User.find_by(email: email)
        return @user if @user && @user.is_password?(password)
        nil
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64(16)
    end

    def password=(pw)
        @password = pw
        self.password_digest = BCrypt::Password.create(@password)
    end

    def reset_session_token!
        self.session_token = self.class.generate_session_token
        self.save!
        self.session_token
    end

    private
    def ensure_session_token
        self.session_token = self.class.generate_session_token
    end

end
