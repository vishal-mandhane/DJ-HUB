import React from 'react';
import '../components/MainStyles.css';
import { Link } from 'react-router-dom';

const Main = (props) => {
  return (
    <div className="container-img">
      <img src={props.MainImg} alt="Mainimg" />
      <div className="Main-text">
        <h1 style={{ fontStyle: 'italic', fontWeight: 'bold', fontSize: '4rem', color: 'white' }}>{props.title}</h1>
        <p style={{ fontSize: '1.5rem', color: 'white' }}>{props.text}</p>
        <Link to="/menu">
          <button className={props.btnclass} style={{ fontSize: '1.25rem', fontWeight: 'bold', backgroundColor: 'black', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', textDecoration: 'none' }}>
            {props.buttonText} <i className="fa-solid fa-arrow-right"></i>
          </button>
        </Link>
      </div>
    </div>
  )
}


export default Main;