class CreateAdditionalDetails < ActiveRecord::Migration[5.2]
  def change
    create_table :additional_details do |t|
      t.integer :expense_id, null: false
      t.integer :author_id, null: false
      t.text :notes
      t.string :asset_url

      t.timestamps
    end
    add_index :additional_details, :expense_id
    add_index :additional_details, :author_id
  end
end
