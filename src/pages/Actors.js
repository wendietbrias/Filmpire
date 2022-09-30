import { useParams } from "react-router-dom";

const Actors = () => {
  const { id } = useParams();

  return <section className="w-full h-screen overflow-y-scroll"></section>;
};

export default Actors;
