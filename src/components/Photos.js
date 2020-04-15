import React from 'react'
import Info from './Info'

export default function Photos(props) {
 
    return (
        
      
          <div id='post'>
              <img className='images' src={props.props.img_src}></img>
              <Info props={props}/>
              
          </div>
         
      
    )
}
