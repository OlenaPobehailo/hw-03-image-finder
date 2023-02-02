import { Component } from 'react';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { getImages } from 'services/imagesApi';
import { Loader } from 'components/Loader/Loader';

export class ImagePage extends Component {
  state = {
    images: [],
    error: null,
    isLoading: false,
  };
  async componentDidUpdate(prevProps, prevState) {
    //props -> query
    if (prevProps.query !== this.props.query) {
      // console.log(this.props.query);
      this.setState({
        isLoading: true,
      });
      try {
        const data = await getImages(this.props.query);

        this.setState({ images: data.hits });
      } catch (error) {
        this.setState({ error: error.message });
      } finally {
        this.setState({
          isLoading: false,
        });
      }
    }
  }

  render() {
    return (
      <>
        <ImageGallery images={this.state.images} />
        {this.state.isLoading && <Loader />}

        {/* <Button/> */}
      </>
    );
  }
}
