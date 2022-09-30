import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <ReactLoading type="spin" color="#107b7d" width="100px" height="100px" />
    </div>
  );
};

export default Loading;
