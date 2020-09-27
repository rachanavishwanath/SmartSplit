@additional_details.each do |ad|
    json.set! ad.id do
        json.extract! ad, :id, :expense_id, :author_id, :notes, :asset_url, :updated_at
    end
end

