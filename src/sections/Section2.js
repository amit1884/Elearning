import React from 'react'
import Img1 from '../assets/images/4.PNG'
import Img2 from '../assets/images/6.PNG'
import Img3 from '../assets/images/7.PNG'
import Img4 from '../assets/images/8.PNG'
function Section2() {
    return (
        <div id="section_wrapper_2">
            <div>
                <br/><br/><br/><br/>    
            <div className="section_2_inner">
                <div className="thumbnail" id="thumb">
                <div style={{
                        position:'absolute',
                        width:'50px',
                        height:'50px',
                        border:'5px solid orange',
                        borderRadius:'50%',
                        top:0,
                        left:0,
                        zIndex:2
                        }}></div>
                    <div style={{
                        position:'absolute',
                        width:'300px',
                        height:'300px',
                        border:'5px solid orange',
                        borderRadius:'50%',
                        bottom:0,
                        left:0,
                        zIndex:2
                        }}></div>
                <img src ={Img1} alt=""/>
                </div>
                <div className="content">
                <p className="title"><b>Learn from leading universities and<br/>
                    companies</b></p>
                <p>Start streaming on-demand video lectures today from top<br/>
                    instructors in subjects like business, computer science, data<br/>
                    science, language learning, & more.</p>
                <button className="exp_btn">Explore</button>
                </div>
            </div>
            <div className="section_2_inner">
                <div className="content">
                <p className="title"><b>Find flexible, affordable<br/>
                    options</b></p>
                <p>Choose from many options including free courses and<br/>
                    university degrees at a breakthrough price. Learn at your<br/>
                    own pace, 100% online.</p>
                <button className="exp_btn">Explore</button>
                </div>
                <div className="thumbnail" id="thumb">
                <div style={{
                        position:'absolute',
                        width:'30px',
                        height:'30px',
                        border:'5px solid orange',
                        borderRadius:'50%',
                        top:0,
                        right:0,
                        zIndex:2
                        }}></div>
                <div style={{
                        position:'absolute',
                        width:'320px',
                        height:'320px',
                        border:'5px solid orange',
                        borderRadius:'50%',
                        top:0,
                        right:0,
                        zIndex:2
                        }}></div>
                <img src ={Img2} alt=""/>
                </div>
            </div>
            <div className="section_2_inner">
                <div className="thumbnail" id="thumb">
                <div style={{
                        position:'absolute',
                        width:'50px',
                        height:'50px',
                        border:'5px solid orange',
                        borderRadius:'50%',
                        top:0,
                        left:0,
                        zIndex:2
                        }}></div>
                <div style={{
                        position:'absolute',
                        width:'300px',
                        height:'300px',
                        border:'5px solid orange',
                        borderRadius:'50%',
                        bottom:0,
                        left:0,
                        zIndex:2
                        }}></div>
                <img src ={Img3} alt=""/>
                </div>
                <div className="content">
                <p className="title"><b>Master skills with in-depth<br/>
                    learning</b></p>
                <p>Apply what you learn with self-paced quizzes and hands-on<br/>
                    projects. Get feedback from a global community of learners.</p>
                <button className="exp_btn">Explore</button>
                </div>
            </div>
            <div className="section_2_inner" style={{position:'relative'}}>
              
                <div className="content">
                <p className="title"><b>Earn industry-recognized
                    credentials</b></p>
                <p>Demonstrate your new skills by sharing your Course<br/>
                    Certificate, Professional Certificate, MasterTrack™<br/>
                    Certificate, or diploma with your network.</p>
                <button className="exp_btn">Explore</button>
                </div>
                <div className="thumbnail" id="thumb">
                <div style={{
                        position:'absolute',
                        width:'300px',
                        height:'300px',
                        border:'5px solid orange',
                        borderRadius:'50%',
                        bottom:0,
                        right:0,
                        zIndex:2
                        }}></div>
                <img src ={Img4} alt=""/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Section2
