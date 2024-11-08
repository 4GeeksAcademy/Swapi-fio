import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store } = useContext(Context);
  const favoriteCount = store.favorites.length;

  return (
    <nav className="navbar">
		
      <Link to="/">
        <button className="btn ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt6tXpgC4PkasXmp9WPVOJoqe-n7vR-7BpPw&s"
            alt="Star Wars Logo"
            style={{ width: "150px", height: "auto" }}
          />
        </button>
      </Link>
      <div className="btn-group m-3">
        <button type="button" className="btn btn-warning" aria-label="Favorites">
          <i className="fa-solid fa-heart"></i> {favoriteCount}
        </button>
      </div>
    </nav>
  );
};
