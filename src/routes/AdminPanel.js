import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Navbar from '../components/header/Navbar';
import './Panel.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.config"
import {  query, where } from "firebase/firestore";

// Initialize Firebase
// const firebaseConfig = {
//   // Your Firebase config here
// };

// firebase.initializeApp(firebaseConfig);

// const db = firebase.firestore();

// const AdminPanel = () => {
//   const [data, setData] = useState([]);

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     const snapshot = await getDocs(collection(db, "Orders"));
//   //     const orders = [];
//   //     snapshot.forEach(doc => {
//   //       orders.push({ id: doc.id, ...doc.data() });
//   //     });
//   //     setData(orders);
//   //   };

//   //   fetchData();
//   // }, []);

//   // const [data, setData] = useState([]);

//   // useEffect(() => {
//   //   // Create a reference to the "orders" collection
//   //   const ordersCollection = collection(db, 'Orders');

//   //   // Fetch all documents from the "orders" collection
//   //   getDocs(ordersCollection)
//   //     .then((querySnapshot) => {
//   //       const ordersData = [];
//   //       querySnapshot.forEach((doc) => {
//   //         // Extract relevant fields from each document
//   //         const order = {
//   //           id: doc.id,
//   //           orderNumber: doc.data().orderNumber,
//   //           foodItems: doc.data().foodItems,
//   //           user: doc.data().user,
//   //         };
//   //         ordersData.push(order);
//   //       });
//   //       setData(ordersData);
//   //     })
//   //     .catch((error) => {
//   //       console.error('Error fetching orders:', error);
//   //     });
//   // }, []); // Empty dependency array to run the effect only once

//   // Fetch orders collection
// db.collection("Orders")
// .get()
// .then((querySnapshot) => {
//   const table = document.getElementById("ordersTable"); // Replace with your table ID

//   querySnapshot.forEach((doc) => {
//     const orderData = doc.data();
//     const row = table.insertRow();

//     // Add columns (e.g., fooditemid, userid, total price)
//     const foodItemIdCell = row.insertCell(0);
//     const userIdCell = row.insertCell(1);
//     const totalPriceCell = row.insertCell(2);

//     foodItemIdCell.textContent = orderData.fooditemid;
//     userIdCell.textContent = orderData.userid;
//     totalPriceCell.textContent = orderData.totalPrice;
//   });
// })
// .catch((error) => {
//   console.error("Error fetching orders:", error);
// });


//   return (
//     <div>
//       {/* <Navbar/>
//         <h1>Admin Panel</h1>
//         <h2>Orders Table</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Order Number</th>
//             <th>Food Items</th>
//             <th>User</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map(order => (
//             <tr key={order.id}>
//               <td >{order.orderNumber}</td>
//               <td>{order.foodItems}</td>
//               <td>{order.user}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table> */}
      
//     </div>
//   )
// }

// export default AdminPanel


// src/components/OrdersTable.js
// import React, { useState, useEffect } from 'react';
// import db from '../firebase'; // Adjust the path based on your project structure

const AdminPanel = () => {
  const [orders, setOrders] = useState([]);

  // useEffect(() => {
  //   db.collection('Orders').get()
  //     .then((querySnapshot) => {
  //       const data = [];
  //       querySnapshot.forEach((doc) => {
  //         data.push(doc.data());
  //       });
  //       setOrders(data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching orders:', error);
  //     });
  // }, []);

  
//  useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const querySnapshot = await getDocs(collection(db, 'Orders'));
//       const data = querySnapshot.docs.map((doc) => doc.data());
//       setOrders(data);
//     } catch (error) {
//       console.error('Error fetching orders:', error);
//     }
//   };

//   fetchData();
// }, []);

useEffect(() => {
const fetchData = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "OrderList"));
    const data = querySnapshot.docs.map((doc) => doc.data());
    console.log("Data",data)
    setOrders(data)
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
fetchData();
}, []);



  return (
    <div>
  <Navbar/>

      <h2>Admin Panel</h2>
      <table>
        <thead>
          <tr>
              <th>Order ID</th>
              <th>Image</th>
              <th>Food Type</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.id}</td>
              <td><img className='image' src={order.image} alt="" /></td>
              <td>{order.foodType}</td>
              <td>{order.name}</td>
              <td>{order.quantity}</td>
              <td>{order.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
