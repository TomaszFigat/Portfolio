import React, { Component } from 'react';
import styles from './Background.module.css';
import backgroundImage from '../../assets/background-image/backgroundImage5.jpg';
class Background extends Component{
    state={
        height: 10
    }
    // componentDidUpdate(){
    //     console.log("heeeeeej");
    // }
    render(){
return(
    <div id="backgroundImage" className={styles.Background}  >
        
        <img src={backgroundImage} alt="background image" />
    </div>
);
    }
}

export default Background;