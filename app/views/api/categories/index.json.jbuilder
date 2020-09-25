@categories.each do |category|
    json.set! category.id do
        json.extract! category, :id, :name, :logo_url, :sub_category_ids
    end
end
