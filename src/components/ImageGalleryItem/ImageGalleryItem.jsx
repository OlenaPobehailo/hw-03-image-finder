import {
  ImageGalleryItemImage,
  StyledImageGalleryItem,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ previewURL }) => {
  return (
    <StyledImageGalleryItem>
      <ImageGalleryItemImage src={previewURL} alt="" width={360} />
    </StyledImageGalleryItem>
  );
};
