import React from 'react'
import './Program.css'
import programsData from "../../data/programsData";
import rightArrow from "../../assets/rightArrow.png"
const Program = () => {
  return (
    <div className="Program" id="programs">
      {/* header */}
      <div className="programs-header">
        <span className='stroke-text'>explore our</span>
        <span>programes</span>
        <span className='stroke-text'>to shape you</span>
      </div>

      <div className="program-categories">
        {programsData.map((program, index) => (
          <div className="catogary" key={program.id || index}>
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>

            <div className="join-now">
              <span>Join Now</span>
              <img src={rightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Program;