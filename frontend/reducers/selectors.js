 export const category = (categories) => {
    let all = [];
    Object.values(categories).forEach(category => {
        let cat = [];
        let subCat = [];
        if (category.sub_category_ids.length !== 0) {
            cat.push(category.id, category.name)
            category.sub_category_ids.forEach(subCatId => {
                subCat.push([subCatId, categories[subCatId].name])   
            })
            cat.push([subCat])
            all.push([cat])
        } 
    })
     return all
}

export const defCa = (cat) => {
    let defId;
     Object.values(cat).forEach(cat => {
        switch (cat.name) {
            case "Entertainment":
                defId = cat.id;
                return defId;
        }
    })
    return defId
}