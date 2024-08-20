import React, { useState } from 'react'
import { itemData } from '../data'
const ItemsDisplay = () => {
    const[displayItem,setDisplayItem]=useState(itemData);
    console.log(displayItem);
  return (
    <div>
      <div className='itemSection'>
        {displayItem.map((value)=>{
            return(
                <div className='gallery'>
                    <img src={value.item_img} alt={value.item_img}/>
                    </div>
            )
        })

        }
      </div>
    </div>
  )
}

export default ItemsDisplay
