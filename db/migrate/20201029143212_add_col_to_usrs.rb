class AddColToUsrs < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :live_user, :boolean 
  end
end
