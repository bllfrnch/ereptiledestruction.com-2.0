import React from 'react';
import styles from './audio.module.scss';

const Audio = props => (
  <div className={styles.audio}>
    <iframe
      style={{ border: 0, width: '580px', height: '700px' }}
      src="https://bandcamp.com/EmbeddedPlayer/album=2335874876/size=large/bgcol=ffffff/linkcol=f171a2/tracklist=false/transparent=true/"
      seamless
    >
      <a href="http://ereptiledestruction.bandcamp.com/album/ereptile-destruction">
        Ereptile Destruction by Ereptile Destruction
      </a>
    </iframe>
  </div>
);

export default Audio;
