import React, { Component } from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Dropdown.module.css';

import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";
class Dropdown extends Component{
    
    state= {
        height:  document.getElementById('backgroundImage')!==null ? document.getElementById('backgroundImage').clientHeight : 0
    }
    
   scroll = ()=>{
       scroll.scrollTo(document.getElementById('backgroundImage').clientHeight);
    
   }
   render(){
    
    return(
        <div className={styles.Dropdown}>
            {this.props.children}
            <div className={styles.Submenu}>
                
                <NavLink 
                activeStyle={{ color: "#c3c4c7" }}onClick={ this.scroll} to="/photo-japonia">JAPONIA</NavLink>
                <NavLink activeStyle={{ color: "#c3c4c7" }} onClick={this.scroll} to="/photo-bieszczady">BIESZCZADY</NavLink>
                
            </div>
            
        </div>
    );
   }
}
export default Dropdown;