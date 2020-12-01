import React, { Component } from 'react';


import { photosBieszczady } from "./PhotosScripts/Bieszczady";
import { photosJaponia } from './PhotosScripts/Japonia';
import Gallery from 'react-grid-gallery';
import styles from "./Photo.module.css";

class Photo extends Component{
 
    
    render(){
    let gallery = null;

        if(this.props.galleryId==1){
            gallery = <Gallery backdropClosesModal={true} margin={2} rowHeight={300} enableImageSelection={false} images={photosJaponia}/>
         }
        if(this.props.galleryId==2){
           gallery = <Gallery backdropClosesModal={true} margin={2} rowHeight={300} enableImageSelection={false} images={photosBieszczady}/>
        }

return(
    <div ref={element => this.divRef = element} className={styles.Photo}>
        
        {gallery}
        <div style={{clear:"both"}}></div>
        
    </div>
);
    }
}
// ReactDOM.render(
//     <Photo />,
//     document.getElementById('container'));

export default Photo;