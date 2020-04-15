import React from 'react'

export default function Info(props) {
    
    return (
        <div id='info'>
           <h3>{props.props.props.earth_date}</h3>
           <h3>{props.props.props.camera.full_name}</h3>
           <h2>Landing Date</h2>
           <h3>{props.props.props.rover.landing_date}</h3>
           <h3>{props.props.props.rover.status}</h3>


            
        </div>
    )
}
