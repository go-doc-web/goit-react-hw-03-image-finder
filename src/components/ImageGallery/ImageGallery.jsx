import PropTypes from 'prop-types';

import ImageGalleryItem from './ImageGalleryItem';

import css from './image-galary.module.scss';

const items = [
  { id: Math.random(), a: Math.random() },
  { id: Math.random(), a: Math.random() },
  { id: Math.random(), a: Math.random() },
  { id: Math.random(), a: Math.random() },
  { id: Math.random(), a: Math.random() },
  { id: Math.random(), a: Math.random() },
  { id: Math.random(), a: Math.random() },
];

const ImageGallery = () => {
  const elements = items.map(({ id, item }) => (
    <ImageGalleryItem key={id} {...item} />
  ));
  return (
    <div className="conteiner">
      <ul className={css.list}>{elements}</ul>
    </div>
  );
};

export default ImageGallery;
