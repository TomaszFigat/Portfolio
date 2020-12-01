import React, { Component } from 'react';
import styles from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import Dropdown from './Dropdown/Dropdown';
import { NavLink ,Link} from 'react-router-dom';
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";
import { render } from '@testing-library/react';


class NavigationItems extends Component{
    scroll=()=>{
        scroll.scrollToTop();
    }
    scrollToNavbar=()=>{
        scroll.scrollTo(document.getElementById('backgroundImage').clientHeight);
    }
    render(){
    return(
        <div className={styles.NavigationItems} id="toolbar">
    <ul>
        <NavigationItem><NavLink activeStyle={{ color: "#c3c4c7" }} onClick={this.scroll} to="/home">HOME</NavLink></NavigationItem>
        <Dropdown >PHOTO</Dropdown>
        {/* <NavigationItem>PHOTO</NavigationItem> */}
        <NavigationItem><NavLink  activeStyle={{ color: "#c3c4c7" }} onClick={this.scrollToNavbar} to="/video">VIDEO</NavLink></NavigationItem>
        <NavigationItem><NavLink activeStyle={{ color: "#c3c4c7" } }onClick={this.scroll} to="/contact">CONTACT</NavLink></NavigationItem>
        
    </ul>
    </div>
    );
    }
}

export default NavigationItems;