import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ModalDiv, ModalImage } from './Modal.styled';

const modalRoot = document.querySelector('#modal');

// ({ modalData, closeModal })
export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModalByEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModalByEscape);
  }

  closeModalByEscape = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  render() {
    const { modalData, closeModal } = this.props;
    const { modalUrl, modalAlt } = modalData;

    return createPortal(
      <Backdrop onClick={e => e.currentTarget === e.target && closeModal()}>
        <ModalDiv>
          <ModalImage src={modalUrl} alt={modalAlt} />
        </ModalDiv>
      </Backdrop>,
      modalRoot
    );
  }
}
