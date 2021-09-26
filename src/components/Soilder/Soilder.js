import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Soilder.css';


const Soilder = (props) => {
    const {name,img, rank,operationPoint,currentLocation,specility,totallOperation,age,salary} = props.soilder
    const element = <FontAwesomeIcon icon={faCoffee} />
    return (
        <div className="soilder">
            <img src={img} alt="" />
            <h3>Name : {name}</h3>
            <h3>Age : {age}</h3>
            <h3>Rank : {rank}</h3>
            <h3>Specality : {specility}</h3>
            <h3>Salary : {salary}</h3>
            <h3>Totall Operation : {totallOperation}</h3>
            <h3>Operation Point : {operationPoint}</h3>
            <h3>Current Location : {currentLocation}</h3>
            
            <button 
            onClick={() => props.handelSelectedMember(props.soilder)}
            className="selected-btn"
            >{element} Selected</button>
        </div>
    );
};

export default Soilder;