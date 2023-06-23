import React from "react";
import "./myskills.css";
import react from '../../images/react.png'
const Myskills = () => {
  return (

    // const skills = ['JavaScript' ,'React' , 'Node' ,'MongoDB' ,'Python' ,'Java']
    <div className="skill-container">
      <div className="skills-heading">
    
        <h1>My Skills</h1>
      </div>
      <div className="box-container">
        <div className="react-skill">
        <img src="https://camo.githubusercontent.com/eb72bb7485d6ba831e1d01f7e5f6be5985ae1c1eb93708d041aa56586b849e43/68747470733a2f2f6c6f676f73706e672e6f72672f646f776e6c6f61642f6a6176617363726970742f6c6f676f2d6a6176617363726970742d69636f6e2d313032342e706e67"/>
          <span style={{color:'yellow'}}>JavaScript</span>
        </div>
        <div className="react-skill">
        <img src={react}/>
          <span style={{color:'#00d8ff'}}>React</span>
        </div>

        <div className="react-skill" >
        <img style={{width:'140px',height:'70px'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png"/>
          {/* <span style={{color:'lightgreen'}}>Node</span> */}
        </div>
        <div className="react-skill">
        <img style={{width:'180px',height:'180px'}} src="https://cdn4.iconfinder.com/data/icons/logos-3/512/mongodb-2-1024.png"/>
          {/* <span>MongoDb</span> */}
        </div>
        <div className="react-skill">
        <img src="	https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-1024.png"/>
          <span style={{color:'lightblue'}}>Python</span>
        </div>
        <div className="react-skill">
        <img style={{width:'70px',height:'70px'}} src="https://www.seekpng.com/png/full/223-2231845_logo-java-java-icon.png"/>
          <span style={{color:'skyblue'}}>Java</span>
        </div>

        <div className="react-skill">
        <img src="https://hackr.io/tutorials/learn-data-structures-algorithms/logo/logo-data-structures-algorithms?ver=1587721467"/>
          <span style={{color:'#00d8ff'}}>Data Structure</span>
        </div>
      </div>
    </div>
  );
};

export default Myskills;
