import { useGetTopSuggestingUsers } from "../services";
import ListTopSuggesting from "../ui/ListTopSuggesting";

const TopSuggesting = () => {
  const { data, isLoading: isGetSuggestingUsersLoading } =
    useGetTopSuggestingUsers();

  if (!data) return null;

  if (isGetSuggestingUsersLoading) return <span>Đang tải...</span>;
  return <ListTopSuggesting users={data.users} />;
};

export default TopSuggesting;
