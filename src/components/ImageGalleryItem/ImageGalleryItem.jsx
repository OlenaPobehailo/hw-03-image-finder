import {
  ImageGalleryItemImage,
  StyledImageGalleryItem,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  openModal,
}) => {
  return (
    <StyledImageGalleryItem largeImageURL={largeImageURL} tags={tags}>
      <ImageGalleryItemImage
        src={webformatURL}
        width={360}
        onClick={e => openModal({ modalUrl: largeImageURL, modalAlt: tags })}
      />
    </StyledImageGalleryItem>
  );
};
