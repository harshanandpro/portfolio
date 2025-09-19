import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Projects.css';
import ProjectsCard from './ProjectsCard.jsx';
import port from './portfolio.png';
import met from './metflix.png';
import wet from './weather.png';
import ipu from './ipu.png'
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
          photo={ipu}
          name={"College Website Redesign"}
          desc={"I Redesigned my college website to give it a modern look with a team member , he worked on academics page everything else is made by me"}
          link={"https://ggsipu-frontend-xu8o.vercel.app/"}
        />
        <ProjectsCard
          photo={wet}
          name={"Weather Report"}
          desc={"Weather Report has API based Integrated Map , Countries Search and Weather of Cities depending on where you click on Map."}
          link={"https://weather-omega-sand.vercel.app/"}
        />
        <ProjectsCard
          photo={met}
          name={"Metflix"}
          desc={"metflix a API / React Based website which i made from scratch with API Integration from TMDB movie API"}
          link={"https://metflix-navy.vercel.app/"}
        />
      </Slider>
    </div>
  )
}

export default Projects;
