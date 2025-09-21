import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Projects.css';
import ProjectsCard from './ProjectsCard.jsx';
import PreviewPopup from './PreviewPopup.jsx';

import port from './portfolio.png';
import port2 from './port2.png';
import port3 from './port3.png';
import port4 from './port4.png';
import met from './metflix.png';
import wet from './weather.png';
import ipu from './ipu.png';
import ipu2 from './ipu2.png';
import ipu3 from './ipu3.png';
import ipu4 from './ipu4.png';

const Projects = ({ id }) => {
  const [previewImages, setPreviewImages] = useState(null);

  const projects = [
    { name: "Portfolio", photo: port, desc: "This site is my own custom-built portfolio, designed to showcase my development skills and projects. Built with React, HTML, CSS, and JavaScript. It features responsive design, interactive sections, and smooth animations to deliver a professional first impression.", link: "", images: [port, port2 , port3 , port4] },
    { name: "College Website Redesign", photo: ipu, desc: "I Redesigned my college website to give it a modern look with a team member , he worked on academics page everything else is made by me", link: "https://ggsipu-frontend-xu8o.vercel.app/", images: [ipu, ipu2 , ipu3 , ipu4] },
    { name: "Weather Report", photo: wet, desc: "Weather Report has API based Integrated Map , Countries Search and Weather of Cities depending on where you click on Map.", link: "https://weather-omega-sand.vercel.app/", images: [wet, "/images/weather-2.png"] },
    { name: "Metflix", photo: met, desc: "Metflix a API / React Based website which i made from scratch with API Integration from TMDB movie API", link: "https://metflix-navy.vercel.app/", images: [met, "/images/metflix-2.png", "/images/metflix-3.png"] },
  ];

  const settings = {
    dots: true, infinite: true, speed: 500,
    slidesToShow: 1, slidesToScroll: 1, arrows: true,
  };

  return (
    <div id={id} className='projects_container'>
      <p className="projects_header">Projects</p>

      <Slider {...settings}>
        {projects.map((p, i) => (
          <div key={i}>
            <ProjectsCard
              name={p.name}
              photo={p.photo}
              desc={p.desc}
              link={p.link}
              moreImages={p.images}
              setPreviewImages={setPreviewImages}
            />
          </div>
        ))}
      </Slider>

      {/* Render overlay at top-level so it doesn't live inside the slide DOM */}
      <PreviewPopup images={previewImages} />
    </div>
  );
};

export default Projects;
