import css from './image-gallary-item.module.scss';

const ImageGalleryItem = ({ webformatURL, largeImageURL }) => {
  return (
    <>
      <li className={css.gallery__item}>
        <img src="#" alt="" />
      </li>
    </>
  );
};

export default ImageGalleryItem;
