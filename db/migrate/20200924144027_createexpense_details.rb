class CreateexpenseDetails < ActiveRecord::Migration[5.2]
  def change
    create_table :expense_details do |t|
      t.integer :expense_id, null: false
      t.integer :paid_by, null: false
      t.float :amount_paid, null: false, default: 0

      t.timestamps
    end
    add_index :expense_details, :expense_id
  end
end
