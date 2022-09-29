
import React, { useState, useEffect } from 'react';
// import { useInput } from 'react';
import { connect } from 'react-redux'; 
import { Link, withRouter } from 'react-router-dom'; 

// const colorways = require('../data/coloways.json');


// const useInput = init => {
//   const [ value, setValue ] = useState(init);
//   const onChange = e => {
//     setValue(e.target.value);
//   };
//   return [ value, onChange ];
// };

const Save = props => {
//   const [color1, setColor1] = useInput('');
//   const [color2, setColor2] = useInput('');
//   const [color3, setColor3] = useInput('');
//   const [color4, setColor4] = useInput('');
//   const [color5, setColor5] = useInput('');
//   const [color6, setColor6] = useInput('');


  const saveColorwayButton = () => {
    const enteredColors = [];
    const color1 = document.getElementById('color1').value;
    enteredColors.push(color1);
    // console.log(color1);

    const color2 = document.getElementById('color2').value;
    enteredColors.push(color2);

    const color3 = document.getElementById('color3').value;
    enteredColors.push(color3);

    const color4 = document.getElementById('color4').value;
    enteredColors.push(color4);

    const color5 = document.getElementById('color5').value;
    enteredColors.push(color5);

    const color6 = document.getElementById('color6').value;
    enteredColors.push(color6);

    console.log(enteredColors);
    // if (color1 === '') {
    //   setColorError('At least one color is required');
    // } else {
    //   const body = {
    //     color1,
    //     color2,
    //     color3,
    //     color4,
    //     color5,
    //     color6
    //   };
    //   fetch('/save', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'Application/JSON'
    //     },
    //     body: JSON.stringify(body)
    //   })
    //   .then(resp => resp.json())
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .then(() => {
    //     props.history.push('/');
    //   })
    //   .catch(err => console.log('Save error'))
    // }

    // useEffect(()=>{
    //   setColorError(null);
    // }, [color1]);

    console.log('Trying to save...')
  };
  

  return (

// name="color1" value={color1} onChange={setColor1}

  <div>
    <h2 id='saveTitle'>MUST KEEP</h2>
    <hr></hr>
    <br></br>
    {/* <form method="POST" action="/save"> */}
    <input id="color1" type="text" placeholder='COLOR 1'></input>
    <br></br>
    <input id="color2" type="text" placeholder='COLOR 2'></input>
    <br></br>
    <input id="color3" type="text" placeholder='COLOR 3'></input>
    <br></br>
    <input id="color4" type="text" placeholder='COLOR 4'></input>
    <br></br>
    <input id="color5" type="text" placeholder='COLOR 5'></input>
    <br></br>
    <input id="color6" type="text" placeholder='COLOR 6'></input>
    <br></br>
    <button id ="button" type="submit" onClick={saveColorwayButton} > SAVE </button>
    {/* </form> */}
  </div>
  );
};


export default Save;
