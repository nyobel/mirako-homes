import RingLoader from "react-spinners/RingLoader";

const Spinner = ({ loading }) => {
  const override = {
    display: "block",
    margin: "100 auto"
  };



  return (
    <div>
      <RingLoader
        color="#A68340"
        loading={loading}
        cssOverride={override}
        size={100}
      />
    </div>
  );
};

export default Spinner;
