import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import GalleryImage from "../../components/GalleryImage";
import "./index.css";

export default function HomePage() {
  // const [shows, setShows] = useState([]);

  // useEffect(() => {
  //   async function displayShows() {
  //     const response = await fetch("https://api.tvmaze.com/shows");
  //     const data = await response.json();
  //     setShows(data);
  //   }

  //   displayShows();
  // }, []);
  // const images = [
  //   {
  //     id: 1,
  //     image: {
  //       medium:
  //         "https://cdn.vox-cdn.com/uploads/chorus_asset/file/3859170/manyminions.jpg",
  //     },
  //   },
  //   {
  //     id: 2,
  //     image: {
  //       medium:
  //         "https://cdn.vox-cdn.com/uploads/chorus_asset/file/3859170/manyminions.jpg",
  //     },
  //   },
  //   {
  //     id: 3,
  //     image: {
  //       medium: "img_url_3",
  //     },
  //   },
  // ];
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  // };

  return (
    <main>
      <br />
      <h1>Welcome To React Show</h1>
      <br />
      <em>Discover and Explore The TV World</em>
      <br />
      <br />
      <p className="desc">
        React Show is a dynamic TV show app built with React that allows users
        to dive into the captivating realm of television. With an intuitive
        interface, it offers a comprehensive collection of shows, enabling users
        to search, browse, and explore their favorite TV series.
      </p>
      <br />
      <br />
      <ul>
        <li>
          <Link to="/shows" className="show-btn">
            Explore shows
          </Link>
        </li>
        <li>
          <Link to="/search" className="show-btn">
            Search show
          </Link>
        </li>
      </ul>
      <br />
      {/* <Slider {...settings}>
        {shows.map((show) => (
          <div key={show.id}>
            <Link to={`/shows/${show.id}`}>
              <GalleryImage data={show} />
            </Link>
          </div>
        ))}
      </Slider> */}
    </main>
  );
}
