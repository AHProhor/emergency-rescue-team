import React from 'react';
import './selectedSoilder.css';

const SelectedSoilder = (props) => {
    const {selecetedSoilder} = props;
     let total = 0;
     for( const soilder of selecetedSoilder){
         total =total + soilder.salary;
      }
 
    return (
        <div>
            <h2>Selected Soilders</h2>
            <h3>Slected Member: {props.selecetedSoilder.length} </h3>
            {
                selecetedSoilder.map(soilder => <h2>Name: {soilder.name}</h2>)
            }
            <h3>salary: {total} </h3>
        </div>
    );
};

export default SelectedSoilder; 