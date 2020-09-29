import React from 'react';

const SubCategoryListItems = props => {
    debugger
    return (
        <li className="subCategory-li" onClick={() => (props.setCategory(props.subCategory[0]))}>{props.subCategory[1]}</li>
    )
}

const SubCategoryList = props => {
    const allSubs = props.subCategory.map((subCat) => {
        console.log(`subCat ${subCat}`)
        debugger
        return <SubCategoryListItems 
            setCategory={props.setCategory}
            key={subCat[0]}
            subCategory={subCat}
        />  
    })
    return (
        <ul className="subCategory-ul">{allSubs}</ul>
    )
}

const CategoryList = props => {
    debugger
    return (
        <li className="category-li" onClick={() => (props.setCategory(props.category[0]))}>{props.category[1]}
            <SubCategoryList
                setCategory={props.setCategory} 
                subCategory={props.category[2][0]}/>
        </li>
    )
}
export default (props) => {
    console.log(props);
    const allCategories = props.categories.map(category => {
        debugger
        return <CategoryList 
                setCategory={props.setCategory}
                key={category[0][0]}
                category={category[0]}
        />
    })
    return (
        <div className="child-modal categories">
            <div className="expense-form-header">
                <h2>Choose a category</h2>
                <button onClick={props.handleClick}>x</button>
            </div>
            <ul className="category-ul">{allCategories}</ul>
        </div>
    )
}