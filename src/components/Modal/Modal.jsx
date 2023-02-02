import { Backdrop, ModalDiv, ModalImage } from './Modal.styled';

export const Modal = ({ modalData }) => {
  const { modalUrl, modalAlt } = modalData;
  return (
    <Backdrop>
      <ModalDiv>
        <ModalImage src={modalUrl} alt={modalAlt} />
      </ModalDiv>
    </Backdrop>
  );
};
