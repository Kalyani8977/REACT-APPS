import React from "react";
// import Accordion  from "react-bootstrap/Accordioncd";
import Accordion from 'react-bootstrap/Accordion';
import Image from 'react-bootstrap/Image'
function AccordionComp(props){
    return(
        // <div>
            <Accordion>
                <Accordion.Item>
                    <Accordion.Header>{props.title}</Accordion.Header>
                      <Accordion.Body>
                      {/* {<image src={props.img} style={{height:"100px"}}/>} */}
                      <Image src={props.img} rounded style={{height:"100px"}} />


                      </Accordion.Body>
                </Accordion.Item>
            </Accordion>                   

    )
}
export default AccordionComp;