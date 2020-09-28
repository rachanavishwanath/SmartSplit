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

    def amount_owed(user_id)
        expense = Expense.find(self.expense_id)
        alleds = ExpenseDetail.where(expense_id: self.expense_id)
        if expense.split_type == "equally" && self.paid_by == user_id
            owed = expense.amount / 2 - self.amount_paid
            return owed.abs if owed < 0
        end
        return 0
    end

    def amount_borrowed(user_id)
        split_type = Expense.find_by(id: self.expense_id).split_type
        if split_type == "equally" && self.paid_by == user_id
            owed = expense.amount / 2 - self.amount_paid
            return owed if owed > 0
        end
        0
    end

    def settled
    #not sure what to do here just yet 
    end
end
