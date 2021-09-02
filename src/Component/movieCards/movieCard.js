import React from "react";
import "./movieCards.css";
import Movies from "./Movies";

const movieCard = ({ oneMovie, searchItem }) => {
  return (
    <div className="help">
      {oneMovie

        .filter((el) => el.name.toLowerCase().includes(searchItem))

        .map((el) => (
          <Movies oneMovie={el} key={el.id} />
        ))}
    </div>
  );
};

export default movieCard;
