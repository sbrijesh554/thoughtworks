import React from 'react';

const SideBar = ({hideSideBar, data}) => {
    const gender = data.gender === 'F' ? 'Female' : 'Male'; 
    return(
        <div className="side-bar">
            <i onClick={hideSideBar} className="side-bar-close fa fa-close"></i>
            <div className="side-bar-content">
                <span>Name: </span>
                <span className = "side-bar-highlight">{data.name}</span>
            </div>
            <div className="side-bar-content">
                <span>Age: </span>
                <span>{data.age}</span>
            </div>
            <div className="side-bar-content">
                <span>Gender: </span>
                <span>{gender}</span>
            </div>
            <div className="side-bar-content">
                <span>Sports: </span>
                <span className = "side-bar-highlight">{data.sports.join(",")}</span>
            </div>
        </div>
    )
}

export default SideBar;