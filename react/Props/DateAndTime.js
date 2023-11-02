//Functional Component

// import React from 'react'

// function DateAndTime(props){
// return(
//     <div>
//         <h1>Current Date And Time : {props.CurrentDateAndTime}</h1>
//     </div>
// )
// }
// export default DateAndTime


// Class component
import React, {Component} from 'react'
class DateAndTime extends Component{
    render(){
        return(
    <div>
        <h1>Current Date And Time : {this.props.fname}</h1>
    </div>
    )}
}

export default DateAndTime