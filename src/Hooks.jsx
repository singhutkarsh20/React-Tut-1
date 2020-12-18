// import React, { useState } from 'react';


// const App = () => {
//   const state = useState();

//   const [count, setCount] = useState(0);

//   const IncNum = () =>{
//   setCount(count+1);
//   };

//   return(
//       <>
//         <h1> {count} </h1>
//         <button onClick={IncNum} >Click Me</button>
//       </>
//   )
// }

// export default App; 


// // import React, { useState } from 'react';

// // const App = () =>{

// //     let newTime = new Date().toLocaleTimeString();
    
// //     const [ctime, setCtime ] = useState(newTime);
// //     const UpdatTime = () =>{
// //       newTime = new Date().toLocaleTimeString();
// //       setCtime(newTime);
// //     }
// //     return(
// //       <>
// //         <h1>{ctime}</h1>
// //         <button onClick = {UpdatTime}>Get Time</button>
// //       </>
// //     )
// //   }
  
// //   export default App;


// // let time = new Date().toLocaleTimeString();

// // const [ctime, setCtime] = useState(time);

// // const UpdateTime = () =>{
// //   time = new Date().toLocaleTimeString();
// //   setCtime(time);
// // }

// // setInterval(UpdateTime,1000);

// //   return(
// //     <>
// //       <h1>{ctime}</h1>
// //     </>
// //   );





// // const purple = "#8e44ad";  
// // const [bg, setbg] = useState(purple);
// // const [name , setName] = useState('Click Me');
// // const bgChange = () =>{
// //   //console.log("clicked");
// //   let newBg = '#34495e';
// //   setbg(newBg);
// //   setName("OUCH !!");
// // };

// // const bgBack = () => {
// //   setbg(purple);
// //   setName("Click Me");
// // };

// //  return(
// //    <>
// //    <div style = {{backgroundColor : bg }}>
// //      <button onClick = {bgChange} onDoubleClick = {bgBack} >{name}</button>
// //      </div>
// //    </>

// //  );


// // import React, { useState } from 'react';

// // const App = () =>{

// // const [name, setName] = useState("");
// // const [fullName, setFullName] = useState();
// // const [lastName, setLastName] = useState();
// // const [lastNamenew, setLastNamenew] = useState();

// // const InputEvent = (event) =>{
// //    setName(event.target.value);
// // };

// // const InputEventTwo = (event) =>{
// //   setLastName(event.target.value);
// // };  

// // const onSubmit = (event) =>{
// //   event.preventDefault();
// //   setFullName(name);
// //   setLastNamenew(lastName);
// // }

// //   return(
// //     <>
// //     <div>
// //     <form onSubmit={onSubmit}>
// //        <h1>Hello {fullName}{lastNamenew} </h1>
// //       <input type= "text" placeholder="Enter your Name " value = {name} onChange={InputEvent}>
// //         </input>
// //         <br/>
// //         <input type= "text" placeholder="Enter your Last Name " value = {lastname} onChange={InputEventwo}>  
// //       </input>
// //       <button type="submit">Submit 😃</button>
// //       </form>
// //     </div>
// //     </>
// //   );
// // };

// // export default App;


// // import React, { useState } from 'react';

// // const App = () =>{

// //   const [fullName,setFullName] = useState({
// //       fname : "",
// //       lname : "",
// //   });

// // const InputEvent = (event) =>{
// //    const value = event.target.value;
// //    const name = event.target.name;

// //    setFullName((preValue) => {
     
// //      if(name == 'fname'){
// //      return {
// //       fname : value,
// //       lname : preValue.lname,
// //      };
// //     }
// //     else if(name == 'lname'){
// //       return {
// //        fname : preValue.fname,
// //        lname : preValue.lname,
// //       };
// //      }       
// //    });
   
// // };


// // const onSubmit = (event) =>{
// //   event.preventDefault();
// //   alert('Its A Alert');
// // }

// //   return(
// //     <>
// //     <div>
// //     <form onSubmit={onSubmit}>
// //        <h1>Hello {fullName.fname} {fullName.lname}</h1>
// //       <input type= "text" name='fname' placeholder="Enter your Name" value = {fullName.fname} onChange={InputEvent}>
// //         </input>
// //         <br/>
// //         <input type= "text" name='lname' placeholder="Enter your Last Name" value = {fullName.lname} onChange={InputEvent}>  
// //       </input>
// //       <button type="submit">Submit 😃</button>
// //       </form>
// //     </div>
// //     </>
// //   );
// // };

// // export default App;





// // import React, { useState } from 'react';

// // const App = () =>{

// //   const [fullName,setFullName] = useState({
// //       fname : "",
// //       lname : "",
// //   });

// // const InputEvent = (event) =>{
// //    console.log();

// //    const value = event.target.value;
// //    const name = event.target.name;

// //    setFullName((preValue) => {
     
// //      if(name == 'fname'){
// //      return {
// //       fname : value,
// //       lname : preValue.lname,
// //      };
// //     }
// //     else if(name == 'lname'){
// //       return {
// //        fname : preValue.fname,
// //        lname : preValue.lname,
// //       };
// //      }       
// //    });
   
// // };


// // const onSubmit = (event) =>{
// //   event.preventDefault();
// //   alert('Its A Alert');
// // }

// //   return(
// //     <>
// //     <div>
// //     <form onSubmit={onSubmit}>
// //        <h1>Hello {fullName.fname} {fullName.lname}</h1>
// //       <input type= "text" name='fname' placeholder="Enter your Name" value = {fullName.fname} onChange={InputEvent}>
// //         </input>
// //         <br/>
// //         <input type= "text" name='lname' placeholder="Enter your Last Name" value = {fullName.lname} onChange={InputEvent}>  
// //       </input>
// //       <button type="submit">Submit 😃</button>
// //       </form>
// //     </div>
// //     </>
// //   );
// // };

// // export default App;