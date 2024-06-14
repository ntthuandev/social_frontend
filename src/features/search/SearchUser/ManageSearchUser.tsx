import { ChangeEvent, useEffect, useState } from "react";
import SearchInput from "./ui/SearchInput";
import { useDebounce } from "@/hooks";
import { useSearchProfiles } from "../services";
import UserCard from "@/features/users/ui/UserCard";
import { useInView } from "react-intersection-observer";

const ManageSearchUser = () => {
  const { inView, ref: loadMoreRef } = useInView();

  const [searchString, setSearchString] = useState("");
  const debounceSearchString = useDebounce(searchString);
  const {
    data,
    isLoading: isSearchLoading,
    isSuccess,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useSearchProfiles(debounceSearchString);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  };

  const profiles = data?.pages.flatMap((page) =>
    page.users.map((user) => user)
  );

  useEffect(() => {
    if (inView && !isFetchingNextPage && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);
  return (
    <div className="w-full p-5 flex flex-col gap-6">
      <h3 className="body-medium">Tìm kiếm người dùng</h3>
      <SearchInput onChange={handleChange} />
      {isSearchLoading ? <span>Đang tìm kiếm...</span> : null}
      {isSuccess ? (
        <>
          {!profiles || profiles.length === 0 ? (
            <span className="base-semibold text-center">
              Không có kết quả tìm kiếm
            </span>
          ) : null}
          <div className="max-h-96 overflow-y-auto">
            <div className="flex flex-col gap-5">
              {profiles?.map((profile) => (
                <UserCard user={profile} key={profile.username} isSearch />
              ))}
            </div>
          </div>
          <div ref={loadMoreRef}></div>
        </>
      ) : null}
      {}

      {isFetchingNextPage ? (
        <span className="base-regular text-center">Đang tìm kiếm...</span>
      ) : null}
    </div>
  );
};

export default ManageSearchUser;
