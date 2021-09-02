import React from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
const Movies = ({ oneMovie }) => {
  const handleClick = () => alert(oneMovie.name);
  return (
    <div onClick={handleClick} class="wrapper">
      <div class="main_card">
        <div class="card_left">
          <div class="card_datails">
            <h1>{oneMovie.name}</h1>
            <div class="card_cat">
              <p class="PG">{oneMovie.id}</p>
              <p class="year">{oneMovie.date}</p>
              <p class="genre">{oneMovie.type} </p>
              <p class="rating">{oneMovie.rating}</p>
            </div>
            <p class="disc">{oneMovie.description}</p>
            <a href="https://www.imdb.com/title/tt4912910/" target="_blank">
              Read More
            </a>
            <Box component="fieldset" mb={3} borderColor="transparent">
              <Typography component="legend"></Typography>
              <Rating name="read-only" value={oneMovie.rating} readOnly />
            </Box>
          </div>
        </div>
        <div class="card_right">
          <div class="img_container">
            <img src={oneMovie.image} alt="" />
          </div>
          <div class="play_btn">
            <a href="https://www.imdb.com/title/tt4912910/" target="_blank">
              <i class="fas fa-play-circle"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
