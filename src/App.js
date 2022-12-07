import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import BackToTop from "./BackToTop";
import Footer from "./Footer";

import Nav from "./Nav";
import { useStateValue } from "./StateProvider";
import { auth } from './firebase';
import Payment from "./Payment";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from "./Orders";

const promise = loadStripe( "pk_test_51Lzp3uCXGkxXZYx6L9BKcZ3jUhD0vaGyCNCxikqsH7C5dJjk60HMMfQ2rkSOxxemjDZyh41j33sZFSyTqhBcdGyU001U5tYKMe");

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path="/orders" element={<><Header /><Orders /></>} />
      <Route path="/login" element={<Login />} />
      <Route path="/payment" element={
        <>
        <Header />
        <Elements stripe={promise} >
          <Payment />
          </Elements>
        </>
      } 
      />
      <Route path="/" element={<><Header /><Nav /><Home /><BackToTop/><Footer /></>} />
      <Route path="/checkout" element={<><Header /><Checkout /></>} />
      </Routes>
     
    </div>
   </Router>
  );
}

export default App;