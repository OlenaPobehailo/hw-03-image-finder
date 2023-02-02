import { ImagePage } from 'components/ImagePage/ImagePage';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { Component } from 'react';

export class App extends Component {
  state = {
    query: '',
  };

  changeQuery = newQuery => {
    this.setState({
      query: newQuery,
    });
  };

  render() {
    return (
      <div>
        <Searchbar changeQuery={this.changeQuery} />
        <ImagePage query={this.state.query} />
        
      </div>
    );
  }
}
