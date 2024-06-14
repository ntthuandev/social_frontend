import Button from "@/components/ui/Button";
import { TUserProfile } from "../user.type";
import { useEffect, useState } from "react";
import Modal from "@/components/ui/Modal";
import { useGetListFollowing } from "../services";
import { useInView } from "react-intersection-observer";
import UserCard from "../ui/UserCard";

type ListUserFollowingProps = {
  profile: TUserProfile;
};

const ListUserFollowing = ({ profile }: ListUserFollowingProps) => {
  const { inView, ref: loadMoreRef } = useInView();
  const {
    data,
    isLoading,
    isSuccess,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGetListFollowing(profile.username);
  const [shouldShowListFollowing, setShouldListFollowing] = useState(false);

  const onClose = () => setShouldListFollowing(false);
  const followings = data?.pages?.flatMap((page) =>
    page?.users?.map((user) => user)
  );

  useEffect(() => {
    if (inView && !isFetchingNextPage && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  if (!data) return null;
  if (isLoading) return <span>Đang theo dõi...</span>;
  if (!followings) return null;
  return (
    <div>
      <Button
        className="flex gap-2 text-black small-regular"
        variant="text"
        onClick={() => setShouldListFollowing(true)}
      >
        <span className="base-semibold">{profile.followingUsers}</span>
        <p>Đang theo dõi</p>
      </Button>

      <Modal shouldShow={shouldShowListFollowing} close={onClose}>
        <div className="p-5 flex flex-col gap-2">
          <h3 className="body-medium text-center">Đang theo dõi</h3>
          <div className="h-px w-full bg-gray-200" />
          {isSuccess ? (
            <>
              {!followings || followings.length === 0 ? (
                <span className="base-semibold text-center">
                  Không có người đang theo dõi
                </span>
              ) : null}
              <div className="max-h-96 overflow-y-auto">
                <div className="flex flex-col gap-5">
                  {followings?.map((profile) => (
                    <UserCard user={profile} key={profile?.username} isSearch />
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

export default ListUserFollowing;
