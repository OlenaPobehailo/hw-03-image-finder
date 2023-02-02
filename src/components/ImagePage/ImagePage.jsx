import { Component } from 'react';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { getImages } from 'services/imagesApi';

export class ImagePage extends Component {
  state = {
    images: [],
  };
  async componentDidUpdate(prevProps, prevState) {
    //props -> query
    if (prevProps.query !== this.props.query) {

        // console.log(this.props.query);

      try {
        const data = await getImages(this.props.query);

        this.setState({ images: data.hits });
      } catch (error) {}
    }
  }

  render() {
    return (
      <>
        <ImageGallery images={this.state.images} />
        {/* <Button/> */}
      </>
    );
  }
}
