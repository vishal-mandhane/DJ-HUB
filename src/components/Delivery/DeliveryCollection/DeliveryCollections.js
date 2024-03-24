import React from 'react';
import '../DeliveryCollection/DeliveryCollectionsStyles.css';
import NextArrow from '../../Carousal/nextArrow';
import PrevArrow from '../../Carousal/prevArrow';
import Slider from 'react-slick';
import DeliveryItem from './DeliveryItem/deliveryItem';

const deliveryItem = [
    {
        id: 41,
        title: "Italian Food",
        cover: "https://i.ndtvimg.com/i/2017-09/margherita-pizza_600x300_51506418004.jpg"
    },
    {
        id: 1,
        title: "Indian Food",
        cover: "https://wallpaperaccess.com/full/2069188.jpg"
    },
    {
        id: 9,
        title: "South Indian Food",
        cover: "https://www.chefspencil.com/wp-content/uploads/Dosa-1.jpg.webp"
    },
    {
        id: 16,
        title: "Rajasthani Food", 
        cover: "https://wp.scoopwhoop.com/wp-content/uploads/2014/09/5677315b6e510a6f3a759a81_1.jpg"
    },
    {
        id: 32,
        title:  "American Food",
        cover: "https://i.ndtvimg.com/i/2015-07/burger-625_625x350_51435922877.jpg"
    },
    {
        id: 26,
        title: "Chinese Food",
        cover: "https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg"
    },
]

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
};

const DeliveryCollections = () => {
  return (
    <div className='delivery-collection'>
         <div className='max-width'>
            <div className='collection-title'>
                <h1>Our Cuisines </h1>
                <p>If Eat Feels You Happy So why are you waiting for??</p>
                <br></br>
                <Slider {...settings}>
                    {
                        deliveryItem.map((item)=>{
                            return <DeliveryItem  item={item} key={item.id}/>
                        })
                    }
                </Slider>
            </div>
         </div>
    </div>
  )
};

export default DeliveryCollections;