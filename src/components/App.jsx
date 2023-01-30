import Loader from './Loader';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';

export const App = () => {
  return (
    <div>
      {/* <Loader /> */}
      <Searchbar />
      <ImageGallery />
    </div>
  );
};

//  style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
