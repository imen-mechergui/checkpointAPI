import React from 'react'

const CardList = ({user}) => {
    return (
        <div className='card'>
            <div className='card-inner' >

            

     <div  className='card-front'  >
<ul>
    <li>{user.name}</li>
    <li>{user.username}</li>
    <li>{user.email}</li>
    <li>{user && user.address && user.address.street }</li>
    
    <li>{user && user.address && user.address.suite && user.address.city && user.address.zipcode}</li>
    <li>{user && user.geo && user.geo.lat && user.geo.lng}</li>
</ul>
                </div>
     <div className='card-back'  >
         <ul>
         <li>{user.phone}</li>
         <li>{user.website}</li>
          <li>{user && user.company && user.company.name && user.company.catchPhrase && user.company.bs}</li> 
         </ul>
                   </div> 
            </div>
            
        </div> 
    )
}

export default CardList