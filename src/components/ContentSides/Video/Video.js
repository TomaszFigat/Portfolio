import React from 'react';
import { Player } from 'video-react';
//import  style from 'https://video-react.github.io/assets/video-react.css';
// import '!video-react/styles/scss/video-react'; //

import "../../../../node_modules/video-react/dist/video-react.css"; 
import styles from './Video.module.css';
const video = () => {
  return (
      <div className={styles.Video}>

<div className={styles.Row}>
      
<div>
    <Player 
      playsInline
      poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
    </div>
    <div>
    <Player 
      playsInline
      poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
    </div>
    </div>
    </div>

  );
};
export default video;