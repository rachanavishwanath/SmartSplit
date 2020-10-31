
json.extract! @ad, :id, :expense_id, :author_id, :notes, :updated_at, :created_at
if @ad.asset.attached?
    json.asset_url url_for(@ad.asset)
end
