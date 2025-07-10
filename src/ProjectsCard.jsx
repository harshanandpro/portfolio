import React from 'react'
import './Projects.css'
const ProjectsCard = ({name , photo , desc , link}) => {
    console.log("Link prop:", link);
  return (
    <div className="projects_projects">
                <div className="projects_image"><img className='projects_projectimg' src={photo} alt="" /></div>
                <div className="projects_texts">
                  <div className="projects_title">{name}</div>
                  <div className="projects_desc">{desc}</div>
                 {link && (
                <a
                    className="projects_link"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    You can access the project here
                </a>
                    )}
                </div>
              </div>
  )
}

export default ProjectsCard