import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Projects.css';
import ProjectsCard from './ProjectsCard.jsx';
import port from './portfolio.png';

const Projects = ({id}) => {
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

  return (
    <div id={id} className='projects_container'>
      <p className="projects_header">Projects</p>
      <Slider {...settings}>
        <ProjectsCard
          photo={port}
          name={"Portfolio"}
          desc={"This site is my own custom-built portfolio, designed to showcase my development skills and projects. Built with React, HTML, CSS, and JavaScript. It features responsive design, interactive sections, and smooth animations to deliver a professional first impression."}
        />
        <ProjectsCard
          photo={port}
          name={"Another Project"}
          desc={"Description for another project."}
        />
        <ProjectsCard
          photo={port}
          name={"Yet Another"}
          desc={"Description for yet another project."}
          link={"https://youtube.com"}
        />
      </Slider>
    </div>
  )
}

export default Projects;
