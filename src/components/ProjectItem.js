import React from "react";

function ProjectItem({ name, about, technologies }) {
  const Tec = technologies.map((tec) => {
    return <p key={tec}>{tec}</p>;
  });
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        <span>{Tec}</span>
      </div>
    </div>

  );
}

export default ProjectItem;
