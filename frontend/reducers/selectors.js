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
            case "Uncategorized":
                defId = cat.id;
                break;
        }
    })
    return defId
}

export const myNotes = (obj, arr, id) => {
    let note;
    for (let i = 0; i< arr.length; i++){
        if (obj[arr[i]].author_id === id) {
            note = obj[arr[i]];
            break;
        }
    }
    return note;
}