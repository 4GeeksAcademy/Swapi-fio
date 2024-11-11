import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom"; 

export const PlanetsCard = (props) => {
  const { actions, store } = useContext(Context);
  const navigate = useNavigate(); // Para ir a las historias

  // Verifico si hay fav
  const isFavorite = store.favorites.includes(props.uid);

  // Agrego y saco fav
  const activeFavorite = () => {
    if (isFavorite) {
      actions.removeFavorite(props.uid);
    } else {
      actions.addFavorite(props.uid);
    }
  };

  const goToDetails = () => {
    navigate(`/planets/${props.uid}`);
  };

  return (
    <div
      className="card mb-4"
      style={{
        width: "18rem",
        backgroundColor: "#FFD1DC",
        boxShadow: "5px 5px 5px 5px #8A2BE2",
      }}
    >
      <img
        src={`https://starwars-visualguide.com/assets/img/planets/1${props.uid}.jpg`}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <div className="d-flex justify-content-between">
          <button
            onClick={goToDetails}
            className="btn"
            style={{ backgroundColor: "#9B30FF", color: "white" }}
          >
            Learn More!
          </button>
          <button
            onClick={activeFavorite}
            className="btn"
            style={{ backgroundColor: "#FF1493", color: "white" }}
          >
            <i
              className={`fa-solid fa-heart ${
                isFavorite ? "text-danger" : "text-light"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
