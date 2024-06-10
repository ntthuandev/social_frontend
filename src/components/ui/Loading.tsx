import loading from "@/assets/images/loading.svg";
const Loading = () => (
  <div className="flex items-center justify-center w-full">
    <img
      src={loading}
      alt="loader"
      width={24}
      height={24}
      className="animate-spin"
    />
  </div>
);

export default Loading;
