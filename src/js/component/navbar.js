import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store } = useContext(Context);
  const favoriteCount = store.favorites.length;

  return (
    <nav className="navbar">
		
      <Link to="/">
        <button className="btn m-3">
        <h1 className="logo"style={{"font-family": 'Star Wars', "color":"#FF1493", "textShadow": "1px 1px 0 #fff"}}>STAR WARS</h1>                   
        </button>
      </Link>
      <div className="btn-group m-3">
        <button type="button" className="btn" style={{"backgroundColor": "#FF1493", "color":"white", "boxShadow": "1px 1px 0 #fff"}} aria-label="Favorites">
          <i className="fa-solid fa-heart"></i> {favoriteCount}
        </button>
      </div>
    </nav>
  );
};
