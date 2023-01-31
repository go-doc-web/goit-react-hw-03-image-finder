import css from './image-gallary-item.module.scss';

const ImageGalleryItem = ({ webformatURL }) => {
  return (
    <>
      <li className={css.gallery__item}>
        <img src={webformatURL} alt="" loading="lazy" />
      </li>
    </>
  );
};

export default ImageGalleryItem;
