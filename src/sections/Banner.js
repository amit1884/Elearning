import React from 'react'
import Img from '../assets/images/rightbanner.PNG'
function Banner() {
    return (
        <div className="banner_wrapper">
            <div className="text_side">
                <p className="large_text">World-class</p>
                <p className="large_text">learning for</p>
                <p className="large_text">anyone, anywhere</p><br/>
                <p className="small_text">Build skills with courses, certificates, and degrees<br/>
                online from world-class universities and companies</p><br/>
                <div className="search_box">
                    <input type ="text" placeholder="Search anything"/><span>
                        <i className="fa fa-search"></i>
                    </span>
                </div>
            </div>
            <div className="image_area">
                <img src ={Img} alt=""/>
            </div>
        </div>
    )
}

export default Banner
