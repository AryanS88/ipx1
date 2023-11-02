// import React, { useRef } from "react";

// const Reference = () => {
//   const inputRef = useRef(null);

//   const handleClick = () => {
//     inputRef.current.value="Ayesha";
//   };

//   return (
//     <div>
//       <input type="text" ref={inputRef} />
//       <p>Start typing here:</p>
//       <button onClick={handleClick}>Use the ref bro</button>
//     </div>
//   );
// };

// export default Reference;
import React, {useRef} from "react"

const Reference=()=>{
  const refer = useRef(null)
  const changeName=()=>
 { 
  refer.current.focus()}
  return(
    <div>
      <input type="text" ref={refer}></input>
      <button type="button" onClick={changeName}>Click here</button>
    </div>
  )
  }
export default Reference


