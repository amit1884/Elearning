import React, { Component } from 'react'
import './assets/css/style.css'
import Banner from './sections/Banner'
import Navbar from './sections/Navbar'
import Section1 from './sections/Section1'
import Section2 from './sections/Section2'
import Bg from './assets/images/bg2.PNG'
import Section3 from './sections/Section3'
import Section4 from './sections/Section4'
import Section5 from './sections/Section5'
import Footer from './sections/Footer'
import BottomStrip from './sections/BottomStrip'
class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Banner/>
                <Section1/>
                <div style={{position:'relative',background:'#fff'}}>
                <Section2/>
                <div style={{
                    position:'absolute',
                    bottom:0,
                    left:0,
                    right:0,
                    width:'100%',
                    backgroundImage:`url(${Bg})`,
                    zIndex:'9',
                    backgroundSize:'cover',
                    height:'300px',
                    backgroundRepeat:'no-repeat'

                }}></div>
                </div>
                <Section3/>
                <Section4/>
                <Section5/>
                <Footer/>
                <BottomStrip/>
            </div>
        )
    }
}

export default App

