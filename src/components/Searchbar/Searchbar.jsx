import { Component } from 'react';
import {
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
  StyledSearchbar,
  StyledSearchForm,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    input: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.changeQuery(this.state.input);
  };
  
  onInputChange = e => {
    this.setState({
      input: e.target.value,
    });
  };

  render() {
    return (
      <StyledSearchbar>
        <StyledSearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            name="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.input}
            onChange={this.onInputChange}
          />
        </StyledSearchForm>
      </StyledSearchbar>
    );
  }
}
