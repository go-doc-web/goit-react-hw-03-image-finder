import { Component } from 'react';
// import axios from 'axios';

import Loader from './Loader';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from '../shared/Modal';

import { searchImages } from '../shared/servises/posts-api';

const placeholder = [
  { id: Math.random(), a: Math.random() },
  { id: Math.random(), a: Math.random() },
  { id: Math.random(), a: Math.random() },
  { id: Math.random(), a: Math.random() },
  { id: Math.random(), a: Math.random() },
  { id: Math.random(), a: Math.random() },
  { id: Math.random(), a: Math.random() },
  { id: Math.random(), a: Math.random() },
  { id: Math.random(), a: Math.random() },
  { id: Math.random(), a: Math.random() },
  { id: Math.random(), a: Math.random() },
  { id: Math.random(), a: Math.random() },
];

class App extends Component {
  state = {
    search: '',
    items: [],
    loading: false,
    error: null,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;

    if (prevState.search !== search || prevState.page !== page) {
      this.fetchImages();
    }
  }

  async fetchImages() {
    try {
      this.setState({ loading: true });
      const { search, page } = this.state;
      const { hits } = await searchImages(search, page);
      this.setState(({ items }) => ({
        items: [...items, ...hits],
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }

  imageSearch = ({ search }) => {
    this.setState({ search: search, items: [], page: 1 });
  };

  LoadMore = () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }));
  };

  render() {
    const { items, loading } = this.state;
    const { LoadMore, imageSearch } = this;

    return (
      <>
        <div className="App">
          <Searchbar onSubmit={imageSearch} />

          <ImageGallery items={items} />
          {loading && <Loader />}
          {Boolean(items.length) && (
            <Button onClick={LoadMore} text="Load more" type="button" />
          )}
        </div>
        <Modal>
          <div></div>
        </Modal>
      </>
    );
  }
}

export default App;
