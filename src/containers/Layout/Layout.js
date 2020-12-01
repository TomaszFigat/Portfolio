import React, { Component } from 'react';
import Background from '../../components/Background/Background';
import styles from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
class Layout extends Component{
    getHeight=()=>{
        console.log("hihihi height");
    }
    render(){
        return(
            <div className={styles.Layout}>
                <Background />
                <Toolbar/>
            <div className={styles.Content}>
                
                <main func={this.getHeight}>
                    {this.props.children}
                </main>

            </div>

            <p className={styles.p}>
                    
                    {/* © All rights reserved Tomasz Figat 2020 */}

            </p>     
  
            </div>
            
        );
    }
}

export default Layout