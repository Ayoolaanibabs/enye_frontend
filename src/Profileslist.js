import React from 'react';
import Profilecard from './Profiletemplate';
import './Profileslist.css'

const Profileslist=({profiles})=> {
    const profilearray=profiles.map((user,i)=>{
        return(

         <Profilecard key={i}
         id={i}
        FirstName={user.FirstName} 
        LastName={user.LastName} 
        Gender={user.Gender}
        CreditCardType={user.CreditCardType}
        PhoneNumber={user.PhoneNumber}   
        Email={user.Email}
        PaymentMethod={user.PaymentMethod} />        
        )})

    return (
        <div className='profileslist'>
            {profilearray}
        </div>
    )
}

export default Profileslist