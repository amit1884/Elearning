import React from 'react'
import Img from '../assets/images/people.png'
function Section4() {
    return (
        <div id="section_4" style={{position:'relative'}}>
            <br/><br/><br/>
            <h1 style={{textAlign:'center',fontSize:'40px'}}><b>From the elearning community</b></h1>
            <br/><br/>
            <div style={{
                        position:'absolute',
                        width:'80px',
                        height:'80px',
                        border:'5px solid orange',
                        borderRadius:'50%',
                        top:0,
                        left:'5%',
                        zIndex:2
                        }}></div>
                        <div style={{
                        position:'absolute',
                        width:'30px',
                        height:'30px',
                        border:'5px solid orange',
                        borderRadius:'50%',
                        bottom:0,
                        left:'5%',
                        zIndex:2
                        }}></div>
                        <br/><br/><br/>
            <div style={{display:'flex',justifyContent:'center'}}>
                <img src ={Img} alt=""/>
            </div>
            <div style={{
                        position:'absolute',
                        width:'70px',
                        height:'70px',
                        border:'5px solid orange',
                        borderRadius:'50%',
                        top:0,
                        right:'10%',
                        zIndex:2
                        }}></div>
                        <div style={{
                        position:'absolute',
                        width:'30px',
                        height:'30px',
                        border:'5px solid orange',
                        borderRadius:'50%',
                        bottom:0,
                        right:'5%',
                        zIndex:2
                        }}></div>
        </div>
    )
}

export default Section4
