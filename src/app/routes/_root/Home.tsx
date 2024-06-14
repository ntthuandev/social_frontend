import Feeds from "@/features/posts/Feeds/Feeds";
import TopSuggesting from "@/features/users/TopSuggesting/TopSuggesting";

const Home = () => {
  return (
    <div className="flex flex-1 overflow-auto">
      <Feeds />
      <div className="hidden xl:flex flex-col w-80 2xl:w-[420px] px-6 py-10 gap-10 ">
        <TopSuggesting />
      </div>
    </div>
  );
};

export default Home;
