import './App.css';

import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Menu from './routes/Menu';
import Cart from './routes/Cart';
import Orders from './routes/Orders';
import Account from './routes/Account';
import LastPage from './routes/LastPage';
import ParticularItem from './components/Cart/ParticularItem';
import { Provider, useSelector } from 'react-redux';
import store from './components/store';
import { Toaster } from 'react-hot-toast';
import { getTotals } from './components/redux/ShoppingCart';
import ParticularCuisines from './components/Cart/ParticularCuisines';
import Signup from './routes/Signup';
import Login from './routes/Login';
import Admin from './routes/Admin';

function App() {

  store.dispatch(getTotals())
  return (
     <div className='App'>
     <Provider store={store}>
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/login' element={<Login/>}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/menu" element={<Menu />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/orders" element={<Orders />}/>
          <Route path="/account" element={<Account/>}/>
          <Route path="/item/:id" element={<ParticularItem/>}/>
          <Route path="/foodtype/:id" element={<ParticularCuisines/>}/>
          <Route path="/confirm" element={<LastPage />} />
          <Route path='/admin' element={<Admin/>} />
        </Routes>
        <Toaster position='top-right'/>
      </Provider>
     </div>
  );
}

export default App;
