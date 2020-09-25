class AddColtoCategory < ActiveRecord::Migration[5.2]
  def change
    add_column :categories, :sub_category_id, :integer
  end
end
