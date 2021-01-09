import React from 'react'
import Img1 from '../assets/images/1.PNG'
import Img2 from '../assets/images/2.PNG'
import Img3 from '../assets/images/3.PNG'
function Section1() {
    return (
        <div id="section_wrapper_1">
           <div className="content">
           <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
           <h1 style={{fontSize:'45px'}}><b>Learn from more than<span style={{color:'brown'}}> 160 member universities</span></b></h1>
            <p style={{fontSize:'25px'}}><b>Achieve your goals with elearning</b></p>
            <br/><br/>
            <h2 style={{fontSize:'40px'}}>Why elearning</h2>
           </div>
           <br/><br/><br/>
           <div className="box_images">
            <div className="images" id= "img1">
                <img src={Img1} alt=""/>
                <h2><b>&nbsp;&nbsp;Top Quality</b></h2>
            </div>
            <div className="images" id= "img2">
                <br/><br/>
                <img src ={Img2} alt=""/>
                <h2><b>&nbsp;&nbsp;Accessible</b></h2>
            </div>
            <div className="images" id= "img3">
                <br/><br/>
                <img src ={Img3} alt=""/>
                <h2><b>&nbsp;&nbsp;Applied Learning</b></h2>
            </div>
           </div>
           </div>
        </div>
    )
}

export default Section1
