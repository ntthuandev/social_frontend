import { SuggestingUser } from "@/features/users";

const ExplorePeople = () => {
  return (
    <div className="overflow-y-scroll h-full w-full">
      <div className="mx-auto max-w-3xl lg:w-[40rem] py-10 h-full ">
        <SuggestingUser />
      </div>
    </div>
  );
};

export default ExplorePeople;
