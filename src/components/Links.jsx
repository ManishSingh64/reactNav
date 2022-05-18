import React from 'react';

const Points = ({a,b,c}) =>{
    console.log(a)

    return (
        <div className='links'>
           
           <h3>{a}</h3>
           <h3>{b}</h3>
           <h3>{c}</h3> 
        </div>
    )
}

export default Points;