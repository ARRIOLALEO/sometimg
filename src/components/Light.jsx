import React from 'react';

class Light extends React.Component{

    constructor(){
        super();
        this.state = {
            isTheLightOn:true
        }
    }

    render(){
        
        const light ={
            on:"https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lighton.png",
            off: "https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lightoff.png"
        } ;

        return(
           <div>
               <h1>this is my App</h1>
               <button onClick={()=>{this.setState({isTheLightOn:!this.state.isTheLightOn})}}>Tun On/Off the Light</button>

            {this.state.isTheLightOn ? <img src={light.on} alt=''/> : <img src={light.off} alt=''/>}
        </div>)
    }
}

export default Light