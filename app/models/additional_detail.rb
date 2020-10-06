# == Schema Information
#
# Table name: additional_details
#
#  id         :bigint           not null, primary key
#  expense_id :integer          not null
#  author_id  :integer          not null
#  notes      :text
#  asset_url  :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class AdditionalDetail < ApplicationRecord

    belongs_to :expense

    belongs_to :author,
        class_name: :User

    has_one_attached :asset
end
