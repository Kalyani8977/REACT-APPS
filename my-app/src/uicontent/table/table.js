import React, { Component } from "react";

class Tables extends Component{
    render(){
        return(
            <div>
        <h1>Weekly Timetable</h1>
<table style={{border:"2px solid black"}}>
        <thead>
            <tr style={{border:"2px solid black"}}>
                <th>Day</th>
                <th>9:00 AM - 10:00 AM</th>
                <th>10:00 AM - 11:00 AM</th>
                <th>11:00 AM - 12:00 PM</th>
                <th>12:00 PM - 1:00 PM</th>
                <th>2:00 PM - 3:00 PM</th>
                <th>3:00 PM - 4:00 PM</th>
            </tr>
        </thead>
        <tbody>
            <tr style={{border:"2px solid black"}}>
            <td style={{color:"red"}}>MONDAY</td>
                <td>Practice</td>
                <td>Practice</td>
                <td>Aptitude</td>
                <td>Aptitude</td>
                <td>React</td>
                <td>React</td>
            </tr>
            <tr style={{border:"2px solid black"}}>
            <td style={{color:"red"}}>TUESDAY</td>
                <td>Practice</td>
                <td>Practice</td>
                <td>Practice</td>
                <td>Communication</td>
                <td>React</td>
                <td>React</td>
            </tr>
            <tr style={{border:"2px solid black"}}>
            <td style={{color:"red"}}>WEDNESDAY</td>
                <td>Practice</td>
                <td>Practice</td>
                <td>Aptitude</td>
                <td>Aptitude</td>
               
                <td>React</td>
                <td>React</td>
            </tr>
            <tr style={{border:"2px solid black"}}>
            <td style={{color:"red"}}>THURSDAY</td>
                <td>Practice</td>
                <td>Practice</td>
                <td>Practice</td>
                <td>Communication</td>
                
                <td>React</td>
                <td>React</td>
            </tr>
            <tr style={{border:"2px solid black"}}>
            <td style={{color:"red"}}>FRIDAY</td>
                <td>Practice</td>
                <td>Practice</td>
                <td>Aptitude</td>
                <td>Aptitude</td>
            
                <td>React</td>
                <td>React</td>
            </tr>
        </tbody>
    </table>

            </div>
        )
    }
}
export default Tables;