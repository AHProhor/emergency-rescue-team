import React, { useEffect, useState } from 'react';
import SelectedSoilder from '../SelectedSoilder/SelectedSoilder';
import Soilder from '../Soilder/Soilder';
import './Soilders.css';


const Soilders = () => {
    const [soilders, setSoilders] = useState([]);

    const [selecetedSoilder, setSelectedSoilder] =useState([])
    useEffect(()=>{
        fetch('./soilders.JSON')
        .then(response => response.json())
        .then(data => setSoilders(data))
    },[])

    const handelSelectedMember = (soilder) =>{
        const newSelectedSoilder = [...selecetedSoilder,soilder];
        setSelectedSoilder(newSelectedSoilder);
    }
    return (
        <div className="soilders-container">
            <div className="soilder-container">
                {
                    soilders.map( soilder => <Soilder
                        key ={soilder.id}
                        soilder={soilder}
                        handelSelectedMember={handelSelectedMember}
                    ></Soilder>)
                }
            </div>
            <div className="selected-soilder-container">
                <SelectedSoilder selecetedSoilder= {selecetedSoilder}></SelectedSoilder>
            </div>
        </div>
    );
};

export default Soilders;