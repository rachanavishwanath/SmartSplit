@additional_details.each do |ad|
    json.set! ad.id do
        json.extract! ad, :id, :expense_id, :author_id, :notes, :updated_at, :created_at
        if ad.asset.attached?
            json.asset_url url_for(ad.asset)
        end
    end
end
