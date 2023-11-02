import React, {Component} from "react";

class Test extends Component{
    constructor(){
        super()
        this.state={backgroundColor : "red"}
        this.colors=["red","blue","green","yellow","pink","grey","purple","maroon"]
    }

    changeColor = () =>{
        const randomColor = this.colors[Math.floor(Math.random() * this.colors.length)]
        this.setState({backgroundColor:randomColor})

    }

    render(){
        const {backgroundColor} = this.state
        return(
            <div style={{backgroundColor:backgroundColor, width:"700px", height:"700px"}}>
                <h1>This will Change Color</h1>
                <button type="button" onClick={this.changeColor}>Click Here</button>
            </div>
        )
    }
}
export default Test