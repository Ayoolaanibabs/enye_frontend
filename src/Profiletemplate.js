import React from 'react';
import './Profiletemplate.css'

const Profilecard=({id,FirstName,LastName,CreditCardType,Gender,PhoneNumber,Email,PaymentMethod})=> {
    return (
        
 
        <div className='profilecard '>
            <div class = "image"> 
            <img alt='robots' src={`https://picsum.photos/200/200?random=${id}`} class = "profile__img" />
            </div>
            <h2 class = "profile__name">{FirstName} {LastName}</h2>
            <p>Gender: {Gender}</p>
            <p>Tel: {PhoneNumber}</p>
            <p>Email: {Email}</p>
            <p>Credit Card Type: {CreditCardType}</p>
            <p>Payment Method: {PaymentMethod}</p>       
        </div>
    
    )
}

export default Profilecard
