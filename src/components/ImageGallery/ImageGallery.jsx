import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  console.log(images);
  return (
    <ImageGalleryList>
      {images.map(item => (
        <ImageGalleryItem
          key={item.url}
          urlToImage={item.urlToImage}
          title={item.title}
        /> 
      ))}
    </ImageGalleryList>
  );
};
