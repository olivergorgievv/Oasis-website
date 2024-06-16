import Spinner from "../_components/Spinner";

function loading() {
  return (
    <div className="grid items-center justify-center">
      <Spinner />
      <p className="text-cl text-primary-200"> Loading Cabin data...</p>
    </div>
  );
}

export default loading;
