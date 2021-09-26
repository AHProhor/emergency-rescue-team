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
            <h4>Name : {name}</h4>
            <h4>Age : {age}</h4>
            <h4>Rank : {rank}</h4>
            <h4>Specality : {specility}</h4>
            <h4>Salary : {salary}</h4>
            <h4>Totall Operation : {totallOperation}</h4>
            <h4>Operation Point : {operationPoint}</h4>
            <h4>Current Location : {currentLocation}</h4>
            
            <button 
            onClick={() => props.handelSelectedMember(props.soilder)}
            className="selected-btn"
            >{element} Selected</button>
        </div>
    );
};

export default Soilder;