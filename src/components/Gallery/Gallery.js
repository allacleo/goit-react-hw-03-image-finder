import React from 'react';
import T from 'prop-types';
import shortid from 'shortid';

import PhotoCard from '../PhotoCard/PhotoCard';
import styles from './Gallery.module.css';


const Gallery = ({ images, onLoadMore, onClickImg }) => (
    <>
      <ul className={styles.gallery}>
        {images.map(image => (
          <li key={shortid.generate()} className={styles.galleryItem}>
            <PhotoCard image={image} onClickImg={onClickImg} />
          </li>
        ))}
      </ul>
  
      <button type="button" className={styles.button} onClick={onLoadMore}>
        Load more
      </button>
    </>
  );
  
  Gallery.propTypes = {
    images: T.arrayOf(T.object.isRequired).isRequired,
    onLoadMore: T.func.isRequired,
    onClickImg: T.func.isRequired,
  };
  
  export default Gallery;
