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
#
require 'test_helper'

class ExpenseTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
