import React, { useState } from 'react'
import Navbar from '../components/header/Navbar';
import TabOption from '../components/tabOption';
import Delivery from '../components/Delivery/Delivery';
import DinnigOut from '../components/DinningOut/DinnigOut';
import NIghtLife from '../components/NightLife/NIghtLife';

const Menu = () => {
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <div>
      <Navbar />
      <TabOption  activeTab={activeTab}  setActiveTab={setActiveTab}/>
      {getCorrectScreen(activeTab)}
    </div>
  )
};

const getCorrectScreen = (tab) =>{
  switch(tab){
    case "Delivery":
      return <Delivery />
    case "DinningOut":
      return <DinnigOut />
    case "NightLife":
      return <NIghtLife />
    default:
      return <Delivery />
  }
};

export default Menu;