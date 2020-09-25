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
require 'test_helper'

class CategoryTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
