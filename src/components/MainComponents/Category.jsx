import React from 'react'
import { categoryList, getLiIndex} from '../../utitlitis';

export default function Category({clickHandler,category}) {

 

    return (
        <div className="categories">
        <ul onClick={(e)=>{
            clickHandler(getLiIndex(e))
        }}>
          {
              categoryList.map((name,i)=><CategoryItem key={i} active={i===category} name={name}/>)
          }
        </ul>
      </div>
    )
}


function CategoryItem({active,name}){
    return  active?<li className="active">{name}</li>:<li>{name}</li>
}
