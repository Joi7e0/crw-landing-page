import React from 'react';

const Slide = ({ title, content }) => {
    return (
        <div className="slide-wrapper">
            <h1 className="slide-title">{title}</h1>
            <div className="slide-content">
                {content}
            </div>
        </div>
    );
};

export default Slide;
