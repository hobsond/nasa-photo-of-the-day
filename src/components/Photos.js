import React,{useState} from 'react'
import Info from './Info'

export default function Photos(props) {
    const [info, setInfo] = useState(false)
    const showInfo=(e)=>{
        setInfo(!info)

    }

 
    return (
        
      
          <div id='post'>
              <img onClick={showInfo} className='images' src={props.props.img_src}></img>
              {info &&<Info props={props}/>}
              
          </div>
         
      
    )
}
