import {
  ImageGalleryItemImage,
  StyledImageGalleryItem,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ urlToImage, title }) => {
  return (
    <StyledImageGalleryItem>
      <ImageGalleryItemImage src={urlToImage} alt="" width={360} />
      <h3>{title}</h3>
    </StyledImageGalleryItem>
  );
};
