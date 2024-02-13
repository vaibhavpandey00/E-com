import React from 'react'
import './Collection.css'
import new_collection from '../Assets/new_collections'
import Item from '../Items/Item'

export const Collection = () => {
  return (
    <div className='collection-container'>
      <h1>NEW COLLECTION</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}
