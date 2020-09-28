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
require 'test_helper'

class AdditionalDetailTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
