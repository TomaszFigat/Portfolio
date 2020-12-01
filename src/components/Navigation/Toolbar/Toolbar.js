import React from 'react';
import styles from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems'

const toolbar = () =>{
    return(
        <div className={styles.Toolbar} id="navbar">
            <nav>
                <NavigationItems/>
            </nav>
        </div>
    );
}
export default toolbar;