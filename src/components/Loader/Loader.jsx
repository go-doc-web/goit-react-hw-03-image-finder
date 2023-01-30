import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <p>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#c42339"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </p>
  );
};

export default Loader;
