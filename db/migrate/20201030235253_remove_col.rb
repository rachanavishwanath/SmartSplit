class RemoveCol < ActiveRecord::Migration[5.2]
  def change
    remove_column :additional_details, :asset_url
  end
end
