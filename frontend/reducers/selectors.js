 export const category = (categories) => {
    let all = [];
    Object.values(categories).forEach(category => {
        debugger
        let cat = [];
        let subCat = [];
        if (category.sub_category_ids.length !== 0) {
            cat.push(category.id, category.name)
            debugger
            category.sub_category_ids.forEach(subCatId => {
                debugger
                subCat.push([subCatId, categories[subCatId].name])   
            })
            cat.push([subCat])
            all.push([cat])
        } 
    })
     return all
}


let cat = {
    16: { id: 16, name: "Entertainment", logo_url: "nothing_yet", sub_category_ids: [17, 18, 19, 20, 21] },
    17: { id: 17, name: "Games", logo_url: "nothing_yet", sub_category_ids: [] },
    18: { id: 18, name: "Movies", logo_url: "nothing_yet", sub_category_ids: [] },
    19: { id: 19, name: "Music", logo_url: "nothing_yet", sub_category_ids: [] },
    20: { id: 20, name: "Other", logo_url: "nothing_yet", sub_category_ids: [] },
    21: { id: 21, name: "Sports", logo_url: "nothing_yet", sub_category_ids: [] },
    22: { id: 22, name: "Food and drink", logo_url: "nothing_yet", sub_category_ids: [23,24,25,26] },
    23: { id: 23, name: "Dining out", logo_url: "nothing_yet", sub_category_ids: [] },
    24: { id: 24, name: "Groceries", logo_url: "nothing_yet", sub_category_ids: [] },
    25: { id: 25, name: "Liquor", logo_url: "nothing_yet", sub_category_ids: [] },
    26: { id: 26, name: "Other", logo_url: "nothing_yet", sub_category_ids: [] },
}