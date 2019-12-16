import React from 'react';
import T from 'prop-types';


import styles from './PhotoCard.module.css';



const PhotoCard = ({ image, onClickImg}) => (

    <div className={styles.photoCard}>
    <img src={image.webformatURL} alt={image.tags} />
  
    <div className={styles.stats}>
      <p className={styles.statsItem}>
        <i className="material-icons">thumb_up</i>
        {image.likes}
      </p>
      <p className={styles.statsItem}>
        <i className="material-icons">visibility</i>
        {image.views}
      </p>
      <p className={styles.statsItem}>
        <i className="material-icons">comment</i>
        {image.comments}
      </p>
      <p className={styles.statsItem}>
        <i className="material-icons">cloud_download</i>
        {image.downloads}
      </p>
    </div>
  
    
    <button type="button" 
    className={styles.fullscreenButton}
    onClick={() => onClickImg(image.largeImageURL)}>
     <i className="material-icons">zoom_out_map</i>
          
    </button>
  </div> 

);

PhotoCard.propTypes = {
    image: T.shape({
        webformatURL: T.string.isRequired,
        largeImageURL: T.string.isRequired,
        tags: T.string.isRequired,
        likes: T.number.isRequired,
        views: T.number.isRequired,
        comments: T.number.isRequired,
        downloads: T.number.isRequired,
    }).isRequired,
    onClickImg: T.func.isRequired,
};

export default PhotoCard;
