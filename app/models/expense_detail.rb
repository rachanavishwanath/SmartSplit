# == Schema Information
#
# Table name: expense_details
#
#  id          :bigint           not null, primary key
#  expense_id  :integer          not null
#  paid_by     :integer          not null
#  amount_paid :float            default(0.0), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class ExpenseDetail < ApplicationRecord
    belongs_to :expense
end
