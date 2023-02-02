import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ images, openModal }) => {
  // console.log(images);
  return (
    <ImageGalleryList>
      {images.map(item => (
        <ImageGalleryItem
          key={item.id}
          webformatURL={item.webformatURL}
          largeImageURL={item.largeImageURL}
          tags={item.tags}
          openModal={openModal}
        />
      ))}
    </ImageGalleryList>
  );
};
