import { StyledButton } from './Button.styled';

export const Button = ({ updatePage }) => {
  return (
    <StyledButton type="button" onClick={updatePage}>
      Load more
    </StyledButton>
  );
};
