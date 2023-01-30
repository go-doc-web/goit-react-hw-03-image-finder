import PropTypes from 'prop-types';

import ImageGalleryItem from './ImageGalleryItem';

import css from './image-galary.module.scss';

const ImageGallery = ({ items }) => {
  const elements = items.map(({ id, item }) => (
    <ImageGalleryItem key={id} {...item} />
  ));
  return <ul className={css.list}>{elements}</ul>;
};

export default ImageGallery;
