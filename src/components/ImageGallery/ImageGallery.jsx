// import PropTypes from 'prop-types';

import ImageGalleryItem from './ImageGalleryItem';

import css from './image-galary.module.scss';

const ImageGallery = ({ items }) => {
  const elements = items.map(item => (
    <ImageGalleryItem key={item.id} {...item} />
  ));
  return (
    <div className="conteiner">
      <ul className={css.list}>{elements}</ul>
    </div>
  );
};

export default ImageGallery;
