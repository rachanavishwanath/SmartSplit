class Alterindex < ActiveRecord::Migration[5.2]
  def change
    remove_index :friends, ["profile_id", "friend_id"]
    add_index :friends, ["profile_id", "friend_id"], unique: true
  end
end
