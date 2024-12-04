import React from "react";
// import Accordion  from "react-bootstrap/Accordioncd";
import Accordion from 'react-bootstrap/Accordion';
function Accordian(props){
    return(
        // <div>
            <Accordian>
                <Accordian.Item>
                    <Accordian.Header>{props.title}</Accordian.Header>
                      <Accordian.Body>
                      {<image src={props.img} style={{height:"100px"}}/>}

                      </Accordian.Body>
                </Accordian.Item>
            </Accordian>                   

    )
}
export default Accordian;