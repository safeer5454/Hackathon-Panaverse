import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    // dots: true, // Add dots navigation
    infinite: true, // Allow infinite scrolling
    speed: 500, // Animation speed in milliseconds
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
  };

  return (
    <Slider {...settings}>
      <div>
        <h3>Slide 1</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor
          auctor mattis. Ut vestibulum lectus quis lectus congue luctus. Quisque
          efficitur hendrerit enim a rhoncus.
        </p>
      </div>
      <div>
        <h3>Slide 2</h3>
        <p>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Proin fringilla feugiat leo, at dapibus ligula
          condimentum ut. Integer nec cursus nunc.
        </p>
      </div>
      <div>
        <h3>Slide 3</h3>
        <p>
          Pellentesque id felis et justo dignissim vulputate vel eget nulla.
          Aenean interdum auctor nunc, ac semper urna porta et. Etiam
          ullamcorper, lacus id ultricies placerat, nunc felis finibus risus, ac
          lacinia eros metus a odio.
        </p>
      </div>
    </Slider>
  );
};

export default Carousel;
