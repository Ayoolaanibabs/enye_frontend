import React from 'react';
import './filterButton.css'

const Filterbutton=({filterChange})=> {
    return (
        <div >
        <select id='category'  onChange={(event)=>{filterChange(event)}}>
            <option value=''>Filter by Gender</option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
        </select>
        </div>
    )
}

export default Filterbutton