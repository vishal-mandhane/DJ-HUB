import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addList, updateList } from '../components/redux/ShoppingCart';
import {restaurant} from '../components/Lists';
import { collection, doc, setDoc } from "firebase/firestore"; 
import {db} from '../firebase.config'
import Navbar from '../components/header/Navbar';
import './Admin.css'
const Admin = () => {
    const [id, setId] = useState('');
    const [foodType, setFoodType] = useState('');
    const [foodName, setFoodName] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');
    const [time, setTime] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [status, setStatus] = useState(false);

  const setData = async () => {
    const citiesRef = collection(db, "ItemList");
    
    await setDoc(doc(citiesRef), {
      deliveryTime:time,
      description: description,
      foodType: foodType,
      image: image,
      name: foodName,
      price: price,
      rating:rating,
      id: id,
      readymadestatus: false
    });
   
  
}
  
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(addList(restaurant));
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateList({
            id:id,
            foodType: foodType,
            name: foodName,
            price: price,
            rating: rating,
            image: image,
            deliveryTime: time,
            description:description
        }))
      
      
      setData();
      setId("");
      setFoodType("");
      setFoodName("");
      setPrice("");
      setRating(""); 
      setTime("");
      setDescription("");
      setImage("");
      setStatus(false);
    }

  return (
    <div> 
      <Navbar/>
          <form onSubmit={handleSubmit}>
      <label>Enter the id:
        <input
          type="text" 
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        </label>
        <label>Enter Food Type:
        <input
          type="text" 
          value={foodType}
          onChange={(e) => setFoodType(e.target.value)}
        />
              </label>
              <label>Enter Food Name:
        <input
          type="text" 
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
        />
              </label>

              <label>Enter Price:
        <input
          type="text" 
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
              </label>

              <label>Enter Rating:
        <input
          type="text" 
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
              </label>
              
              <label>Enter Image:
        <input
          type="text" 
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
              </label>
              <label>Enter Preparation Time:
        <input
          type="text" 
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
              </label>

              <label>Enter Description :
        <input
          type="text" 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
              </label>
              <label>Enter the Ready-Made Status:
        <input
          type="boolean" 
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
        </label>
              <button>Submit</button>
    </form>
    </div>
  )
}

export default Admin



// "id": 1,
// "foodType": "Indian Food",
// "name": "Samosa",
// "price": 20,
// "rating": 4,
// "image": "https://wallpaperaccess.com/full/2069188.jpg",
// "deliveryTime" : 20,
// "description": "Crispy on the outside and irresistibly flavorful inside, it's a popular street food enjoyed with chutneys."