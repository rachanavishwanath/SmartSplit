# == Schema Information
#
# Table name: categories
#
#  id              :bigint           not null, primary key
#  name            :string           not null
#  logo_url        :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  sub_category_id :integer
#
class Category < ApplicationRecord
    # did not write has_many for expenses, as I can't image a scenario where I would pull expenses based on category
    # has_many :expenses

    belongs_to :category,
        primary_key: :id,
        foreign_key: :sub_category_id,
        class_name: :Category,
        optional: true

    has_many :sub_categories,
        primary_key: :id,
        foreign_key: :sub_category_id,
        class_name: :Category
end
