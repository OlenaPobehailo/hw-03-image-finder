import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #00000075;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalDiv = styled.div`
  /* width: 500px;
  height: 500px;
  background-color: #fff; */
  padding: 20px 15px;
`;

export const ModalImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;
