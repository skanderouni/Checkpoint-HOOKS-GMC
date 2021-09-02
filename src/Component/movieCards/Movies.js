import React from "react";

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
            <div class="social-btn">
              <button>
                <i class="fas fa-play"></i> SEE TRAILER
              </button>

              <button>
                <i class="fas fa-download"></i> DOWNLOAD
              </button>

              <button>
                <i class="fas fa-thumbs-up"></i> 97%
              </button>

              <button>
                <i class="fas fa-star"></i>
              </button>
            </div>
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
