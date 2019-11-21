import React, {Component} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import imageAPI from '../../services/image-api';

import SearchForm from '../SearchForm/SearchForm';
import Gallery from '../Gallery/Gallery';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';
import styles from './App.module.css'


export default class App extends Component {
  state = {
    images: [],
    query: '',
    isLoading: false,
    error: null,
    pageNumber: 0,
    selectedImage: null,
  };

componentDidUpdate(prevProps, prevState) {
  const {images} = this.state;

  if (prevState.images !== images) {
    window.scrollTo({
      top: document.body.scrollHeigth,
      behavior: 'smooth',
    });
  }
}

handleSubmit = query => {
  this.setState({query, images: [], pageNumber: 1}, this.fetchImages);
};

fetchImages = () => {
    const {query, pageNumber} = this.state;

    this.setState({isLoading: true});

    imageAPI.fetchImages(query, pageNumber)
    .then(images => {
      this.setState(state => ({
        images: [...state.images, ...images],
        pageNumber: state.pageNumber + 1,
      }));
    })
    .catch(error => {
      this.setState({error});
      toast.erroe('Failed to load');
    })
    .finally(() => {
      this.setState({isLoading: false});
    });
  };

handleClickImg = largeImageURL => this.setState({selectedImage: largeImageURL});

closeModal = () => this.setState({selectedImage: null});


render() {
  const { images, isLoading, error, selectedImage } = this.state;

  return (
    <div className={styles.app}>
      <SearchForm onSubmit={this.handleSubmit} />
      {error && <Error message={error.message} />}
      {images.length > 0 && (
        <Gallery
          images={images}
          onLoadMore={this.fetchImages}
          onClickImg={this.handleClickImg}
        />
      )}
      {isLoading && <Loader />}

      {selectedImage && (<Modal onClose={this.closeModal}>
        <img src={selectedImage} alt="img" />
      </Modal>
      )}
    </div>
  );
};
}
