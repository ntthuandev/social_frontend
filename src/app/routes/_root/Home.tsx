import Feeds from "@/features/posts/Feeds/Feeds";

const Home = () => {
  return (
    <div className="flex flex-1 overflow-auto">
      <Feeds />
      <div className="hidden xl:flex flex-col w-72 2xl:w-465 px-6 py-10 gap-10 ">
        Suggest Users
      </div>
    </div>
  );
};

export default Home;
