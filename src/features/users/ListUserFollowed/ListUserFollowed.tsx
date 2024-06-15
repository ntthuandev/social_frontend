import Button from "@/components/ui/Button";
import { TUserProfile } from "../user.type";
import { useEffect, useState } from "react";
import Modal from "@/components/ui/Modal";

import { useInView } from "react-intersection-observer";
import UserCard from "../ui/UserCard";
import useGetListFollowed from "../services/useGetListFollowed";

type ListUserFollowedProps = {
  profile: TUserProfile;
};

const ListUserFollowed = ({ profile }: ListUserFollowedProps) => {
  const { inView, ref: loadMoreRef } = useInView();
  const {
    data,
    isLoading,
    isSuccess,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGetListFollowed(profile.username);
  const [shouldShowListFollowed, setShouldListFollowed] = useState(false);

  const onClose = () => setShouldListFollowed(false);
  const followeds = data?.pages?.flatMap((page) =>
    page?.users?.map((user) => user)
  );

  useEffect(() => {
    if (inView && !isFetchingNextPage && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  if (!data) return null;
  if (isLoading) return <span>Người theo dõi...</span>;
  if (!followeds) return null;
  return (
    <div>
      <Button
        className="flex gap-2 text-black small-regular"
        variant="text"
        onClick={() => setShouldListFollowed(true)}
      >
        <span className="base-semibold">{profile.followedUsers}</span>
        <p>Người theo dõi</p>
      </Button>

      <Modal shouldShow={shouldShowListFollowed} close={onClose}>
        <div className="p-5 flex flex-col gap-2">
          <h3 className="body-medium text-center">Người theo dõi</h3>
          <div className="h-px w-full bg-gray-200" />
          {isSuccess ? (
            <>
              {!followeds || followeds.length === 0 ? (
                <span className="base-semibold text-center">
                  Không có người theo dõi
                </span>
              ) : null}
              <div className="max-h-96 overflow-y-auto">
                <div className="flex flex-col gap-5">
                  {followeds?.map((profile) => (
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
      </Modal>
    </div>
  );
};

export default ListUserFollowed;
