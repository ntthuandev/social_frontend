import { useInView } from "react-intersection-observer";
import { useGetSuggestUsers } from "../services";

import ListSuggestingUsers from "./ui/ListSuggestingUser";
import { useEffect } from "react";

const SuggestingUser = () => {
  const { inView, ref: loadMoreRef } = useInView();
  const {
    data,
    isLoading: isGetSuggestingUsersLoading,
    isSuccess,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useGetSuggestUsers();

  useEffect(() => {
    if (inView && !isFetchingNextPage && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);
  if (!data) return null;
  const users = data.pages.flatMap((page) => page.users.map((user) => user));

  if (isGetSuggestingUsersLoading) return <span>Đang tải...</span>;
  return (
    <div className="w-full px-10 pb-20">
      {isSuccess ? (
        <>
          <ListSuggestingUsers users={users} />
          <div ref={loadMoreRef}></div>
        </>
      ) : null}

      {isFetchingNextPage ? (
        <span className="base-regular text-center">Đang tải...</span>
      ) : null}
    </div>
  );
};

export default SuggestingUser;
