class CreateExpenses < ActiveRecord::Migration[5.2]
  def change
    create_table :expenses do |t|
      t.integer :profile_id, null: false
      t.float :amount, null: false
      t.string :desc, null: false
      t.integer :category_id, null: false
      t.references :payable, polymorphic: true
      t.date :date, null: false
      t.string :split_type, null: false

      t.timestamps
    end
    add_index :expenses, :profile_id
    add_index :expenses, :category_id
  end
end
