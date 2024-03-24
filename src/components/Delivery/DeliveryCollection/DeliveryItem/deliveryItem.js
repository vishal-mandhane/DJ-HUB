import React from 'react';
import { Link } from 'react-router-dom';
import '../DeliveryItem/deliveryItemStyles.css';

const DeliveryItem = ({item, id}) => {
  return (
    <div>
      <Link to={`/foodtype/${item.id}`} style={{textDecoration: "none"}}>
        <div className='delivery-item-cover' key={id}> 
            <img src={item.cover} className='delivery-item-image'
                alt={item.title}
            />
        </div>
        <div className='delivery-item-title'>
            {item.title}
        </div>
      </Link>
    </div>
  )
}

export default DeliveryItem