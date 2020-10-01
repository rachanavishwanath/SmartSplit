# == Schema Information
#
# Table name: expenses
#
#  id           :bigint           not null, primary key
#  profile_id   :integer          not null
#  amount       :float            not null
#  desc         :string           not null
#  category_id  :integer          not null
#  payable_type :string
#  payable_id   :bigint
#  date         :date             not null
#  split_type   :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
# another class : id, expense_id, payable_id, payable_type, 
class Expense < ApplicationRecord
    validates :split_type, inclusion: { in: ['equally', 'unequally']}

    belongs_to :payable, polymorphic: true

    belongs_to :user,
        foreign_key: :profile_id,
        class_name: :User

    belongs_to :category

    has_many :expense_details,
        dependent: :destroy

    has_many :additional_details,
        dependent: :destroy
        
    def self.with_a_friend(profile_id, friend_id)
        id = Friend.where(:profile_id => [profile_id, friend_id])
                    .where(:friend_id => [profile_id, friend_id])
        Expense.where(payable_id: id)
    end

end
