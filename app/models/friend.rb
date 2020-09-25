# == Schema Information
#
# Table name: friends
#
#  id         :bigint           not null, primary key
#  profile_id :integer          not null
#  friend_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Friend < ApplicationRecord
    validates :friend_id, uniqueness: {scope: :profile_id}
    validates :profile_id, uniqueness: {scope: :friend_id}

    belongs_to :profile,
        foreign_key: :profile_id,
        primary_key: :id,
        class_name: :User

    belongs_to :friend,
        foreign_key: :friend_id,
        primary_key: :id,
        class_name: :User

    # payable_type = 'Friend'
    has_many :expenses, as: :payable 
end
