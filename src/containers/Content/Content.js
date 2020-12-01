import React,{ Component } from 'react';
import { Route, NavLink, withRouter, Redirect } from 'react-router-dom';
import Home from '../../components/ContentSides/Home/Home';
import styles from './Content.module.css';
import Photo from '../../components/ContentSides/Photo/Photo';


import Contact from '../../components/ContentSides/Contact/Contact';
import TransitionSwitch from 'react-router-transition-switch';
import Fader from 'react-fader';
import Video from '../../components/ContentSides/Video/Video'
class Content extends Component{
    
        render(){ 


            const { location} = this.props;
            


    return(
        
        
         <div className={styles.Content} >
            
               
                    <TransitionSwitch location={location} component={Fader}>
                    
                    <Route path="/home" exact component={Home} />
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/video" exact component={Video} />
                    <Route
                        path='/photo-japonia'
                        render={(props) => (
                            <Photo  id="container" galleryId="1"/>
                        )}
                    />
                    <Route
                        path='/photo-bieszczady'
                        render={(props) => (
                            <Photo  galleryId="2" />
                        )}
                    />
                     <Redirect from="/" to="/home" /> 
                     
                    {/* <Route path="/photo-bieszczady" component={Photo} /> */}
                    {/* <Redirect from="/" to="/posts" /> */}
                    {/* <Route path="/" component={Posts} /> */}
                </TransitionSwitch>
                
        </div>
        // </RoutesContainer>
        //         </PoseGroup>
    
                        );
}

}

export default withRouter(Content);