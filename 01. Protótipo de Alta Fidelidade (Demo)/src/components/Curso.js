// CourseCard.js

import React from 'react';


const Curso = ({ minutagem, title, description, image }) => {
    return (
        <div className="course-card">
            <img src={image} alt="Course" className="course-image" />
            <div className="course-content">
                <p className="course-description">{minutagem}</p>
                <h2 className="course-title">{title}</h2>
                <p className="course-description">{description}</p>
            </div>
        </div>
    );
};

export default Curso;
