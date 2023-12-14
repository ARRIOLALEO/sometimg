import React from 'react';
import styles from './Light.module.css'


class Light extends React.Component{

    constructor(){
        super();
        this.state = {
            isTheLightOn:true
        }
    }

    render(){
        const {container,btn} = styles;

        const light ={
            on:"https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lighton.png",
            off: "https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lightoff.png"
        } ;
       
        return(
           <div>
               <h1 className={container}>this is my App</h1>
               <button className={btn} onClick={()=>{this.setState({isTheLightOn:!this.state.isTheLightOn})}}>Tun On/Off the Light</button>

            {this.state.isTheLightOn ? <img src={light.on} alt=''/> : <img src={light.off} alt=''/>}
        </div>)
    }
}

export default Light