import { Component } from 'react';

import Loader from './Loader';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';

class App extends Component {
  state = {
    search: '',
  };

  onSubmit = data => {
    console.log(data);
    this.setState({
      search: data,
    });
  };

  render() {
    return (
      <div>
        {/* <Loader /> */}
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery />
      </div>
    );
  }
}

export default App;

//  style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
