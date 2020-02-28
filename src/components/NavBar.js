import React from 'react';
import { NavLink } from 'react-router-dom';

const link ={
  width: "200px",
  padding: "10px",
  margin: "10px 6px 6px",
  background: "green",
  textDecoration: "none",
  color: "white",
}

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink 
        to="/" 
        exact
        style={link}
        activeStyle={{
            background: 'darkblue'
        }}
      >Home</NavLink>
      <NavLink 
          to="/actors" 
          exact
          style={link}
          activeStyle={{
              background: 'darkblue'
          }}
      >Actors</NavLink>
      <NavLink
          to="/directors"
          exact
          style={link}
          activeStyle={{
              background: "darkblue"
          }}
      >Directors</NavLink>
      <NavLink
          to="/movies"
          exact
          style={link}
          activeStyle={{
              background: "darkblue"
          }}
      >Movies</NavLink>
    </div>
  );
};

export default NavBar;