import { Component } from 'react';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { getImagesApi } from 'services/imagesApi';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';

export class ImagePage extends Component {
  state = {
    images: [],
    page: 1,
    query: '',
    error: null,
    isLoading: false,
  };

  static getDerivedStateFromProps(newProps, state) {
    if (newProps.query !== state.query) {
      return { page: 1, query: newProps.query };
    }
    return null;
  }

  async componentDidUpdate(prevProps, prevState) {
    //props -> query
    if (prevProps.query !== this.props.query) {
      // console.log(this.props.query);
      this.getSearchedImages();
    }

    if (prevState.page !== this.state.page && this.state.page !== 1) {
      this.getSearchedImages();
    }
  }
  getSearchedImages = async () => {
    this.setState({
      isLoading: true,
    });
    try {
      const data = await getImagesApi(this.props.query, this.state.page);

      this.setState(prev => ({
        images:
          this.state.page === 1 ? data.hits : [...prev.images, ...data.hits],
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };
  updatePage = () => {
    this.setState(prev => ({
      page: prev.page + 1,
    }));
  };

  render() {
    const { images, error, isLoading } = this.state;
    if (error) {
      return <h1>{error}</h1>;
    }
    return (
      <>
        <ImageGallery images={images} />
        {isLoading && <Loader />}

        {images.length > 0 && <Button updatePage={this.updatePage} />}
      </>
    );
  }
}
