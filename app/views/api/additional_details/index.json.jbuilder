
@additional_details.each do |ad|
    json.set! ad.id do
        json.extract! ad, :id, :expense_id, :author_id, :notes, :asset_url, :updated_at, :created_at
        json.asset_url url_for(ad.asset)
    end
end

