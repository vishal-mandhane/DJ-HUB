import React from 'react';
import Navbar from '../components/header/Navbar';
import Main from '../components/Main';
import Footer from '../components/footer/Footer';
import imgg from '../../src/assests/djant.jpg'
import { useSelector } from 'react-redux';


const Home = () => {

  
  return (
    <>
      <Navbar/>
      <Main 
  MainImg= {imgg}
  title="Ashish Bhaiya ka lazeez खाना खजाना"
  text="Canteen mei nahi hai SEAT, डीजे संघवी ka khana hai HIT!!"
  buttonText="Get Started"
  url="/item"
  btnclass="show"
  orientation="right"
  titleStyle={{ fontStyle: 'italic', fontWeight: 'bold', fontSize: '4.5rem', lineHeight: '1.25' }} // Apply italic style to title
  textStyle={{ fontStyle: 'italic', fontSize: '3rem', color: '#4A4A4A' }} // Apply italic style to text
  containerClassName="md:w-1/2 px-4 space-y-7"
/>
     
      <Footer />
    </>
  )
};

export default Home;
