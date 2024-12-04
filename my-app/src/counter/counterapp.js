import React,{ Component } from "react"
class Counter extends Component{
    constructor(props){
        super()
        this.state={count:2}
}
handleevent=()=>{
    this.setState({count:this.state.count+1})

}
handleevent1=()=>{
    this.setState({count:this.state.count-1})
}
handleevent2=()=>{
    this.setState({count:this.state.count+2})
}
handleevent3=()=>{
    this.setState({count:this.state.count-2})
}
render(){
    return(
        <div>

           <h1> <button onClick={this.handleevent}>+</button></h1>
           <h1> <button onClick={this.handleevent1}>-</button></h1>
           <h1>  {this.state.count}</h1>
           <h1> <button onClick={this.handleevent2}>+2</button></h1>
           <h1> <button onClick={this.handleevent3}>-2</button></h1>
        </div>
    )
}
}
export default Counter;