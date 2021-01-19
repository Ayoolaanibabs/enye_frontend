import React from 'react';
import './search.css'

 const Searchbox=({searchChange})=>{
    return (
        <input 
        className='inputbox'
        type="text" 
        placeholder="Search by first name"
        onChange= {searchChange}
      />
    )
}

export default Searchbox
