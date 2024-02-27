import Loader from "@/components/Loader";
const Loading = () => {
  return (
    <span style={{ height: '100vh', width:'100vw', display: 'grid', placeContent: 'center'}}>
      <Loader />
    </span>
  );
};

export default Loading;
