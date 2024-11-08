import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const VehiclesCard = (props) => {
  const { actions, store } = useContext(Context);


  const isFavorite = store.favorites.includes(props.uid); 
  const activeFavorite = () => {
    if (isFavorite) {
      actions.removeFavorite(props.uid);  
    } else {
      actions.addFavorite(props.uid);  
    }
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={`https://starwars-visualguide.com/assets/img/vehicles/${props.uid}.jpg`} 
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <button type="button" className="btn btn-primary">
          Learn More!
        </button>
        <button onClick={activeFavorite} className="btn btn-warning">
          <i className={`fa-solid fa-heart ${isFavorite ? 'text-danger' : 'text-secondary'}`} />
        </button>
      </div>
    </div>
  );
};
