import UserCard from "../../ui/UserCard";
import { TUserProfile } from "../../user.type";

type ListTopSuggestingProps = {
  users: TUserProfile[];
};

const ListSuggestingUsers = ({ users }: ListTopSuggestingProps) => {
  return (
    <div className="w-full">
      <h3 className="body-medium my-3">Đề xuất cho bạn</h3>
      <div className="space-y-3">
        {users.map((user) => (
          <UserCard key={user.username} user={user} isDetail />
        ))}
      </div>
    </div>
  );
};

export default ListSuggestingUsers;
