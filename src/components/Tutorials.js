import "../styles/TutoStyle.css"
import React from "react";
import { Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.css";

const Tutorials = () => {
  const videoProperties = [
    {
      id: 1,
      title: "Video 1",
      src: "https://www.youtube.com/watch?v=CPPR1V2V_t8&ab_channel=Felu-Fitbycooking", // URL del video de YouTube
    },
    {
      id: 2,
      title: "Video 2",
      src: "https://www.youtube.com/watch?v=O6eJ41HUPBA&ab_channel=JoshCortis", // URL del video de YouTube
      
    },
    {
      id: 3,
      title: "Video 3",
      src: "https://www.youtube.com/watch?v=lRer6SbMCHw&ab_channel=Arslan", // URL del video de YouTube
      
    },
  ];

  return (
    <div className="container">
      <Carousel className="carousel">
        {videoProperties.map((videoObj) => {
          return (
            <Carousel.Item key={videoObj.id} className="carousel-item">
              <ReactPlayer
                className="react-player"
                url={videoObj.src}
                pip={true}
                controls={true}
                playing={false}
                
              />
              <Carousel.Caption className="carousel-caption">
                <h3>{videoObj.title}</h3>
                <p>{videoObj.credit}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Tutorials;