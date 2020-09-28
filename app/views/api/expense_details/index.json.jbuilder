@expense_details.each do |ed|
    json.set! ed.id do
        json.extract! ed, :id, :expense_id, :paid_by, :amount_paid, :updated_at
        json.amount_owed ed.amount_owed(current_user.id)
        json.amount_borrowed ed.amount_borrowed(current_user.id)
    end
end