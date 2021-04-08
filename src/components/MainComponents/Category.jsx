import React from 'react'

export default function Category({clickHandler,category}) {

    let categoryList = ["Все","Мясные","Вегетарианская","Гриль","Острые","Закрытые"]
console.log(category);
    return (
        <div className="categories">
        {/* <ul onClick={e=> console.log([...e.children].indexOf(e.target))}> */}
        <ul onClick={(e)=>{
            let index = [...e.target.parentNode.children].indexOf(e.target);
            clickHandler(index)
        }}>
          {
              categoryList.map((name,i)=><CategoryItem active={i===category} name={name}/>)
          }
        </ul>
      </div>
    )
}


function CategoryItem({active,name}){
    return  active?<li className="active">{name}</li>:<li>{name}</li>
}
