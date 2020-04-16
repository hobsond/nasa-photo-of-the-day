import React,{useState} from 'react'
import Info from './Info'
import * as strap from 'reactstrap'


export default function Photos(props) {
    const [info, setInfo] = useState(false)
    const showInfo=(e)=>{
        setInfo(!info)

    }

 
    return (
        
      
          
              <strap.Col lg='3'>
                  <strap.Card style={{margin:'10px'}}>
                      <strap.CardImg onClick={showInfo} className='images' src={props.props.img_src}></strap.CardImg>
                      <strap.CardBody>
                      <strap.CardTitle> <h3>Photo Taken on {props.props.earth_date}</h3></strap.CardTitle>
                    <strap.CardText>
              
               This photo was taken by the {props.props.camera.full_name},
               The Rover landed on {props.props.rover.landing_date}. That rover
               is currently {props.props.rover.status}
           
           
           </strap.CardText>
                      </strap.CardBody>
                      
                  </strap.Card>
              </strap.Col>
          
         
      
    )
}
