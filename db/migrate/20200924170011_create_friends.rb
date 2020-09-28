class CreateFriends < ActiveRecord::Migration[5.2]
  def change
    create_table :friends do |t|
      t.integer :profile_id, null: false
      t.integer :friend_id, null: false

      t.timestamps
    end
    add_index :friends, :profile_id
    add_index :friends, :friend_id
    add_index :friends, [:profile_id, :friend_id]
  end
end
