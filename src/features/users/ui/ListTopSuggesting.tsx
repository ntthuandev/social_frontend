import Button from "@/components/ui/Button";
import { TUserProfile } from "../user.type";
import UserCard from "./UserCard";
import { useNavigate } from "react-router-dom";
import { pathKeys } from "@/lib/react-router";

type ListTopSuggestingProps = {
  users: TUserProfile[];
};

const ListTopSuggesting = ({ users }: ListTopSuggestingProps) => {
  const navigate = useNavigate();
  const handleSeeMore = () => navigate(pathKeys.explore.people());
  return (
    <div className="max-w-72">
      <div className="flex-between">
        <h3 className="body-medium my-3">Đề xuất cho bạn</h3>
        <Button
          variant="text"
          className="p-1 hover:bg-blue-100"
          onClick={handleSeeMore}
        >
          Xem thêm
        </Button>
      </div>
      <div className="space-y-3">
        {users.map((user) => (
          <UserCard key={user.username} user={user} />
        ))}
      </div>
    </div>
  );
};

export default ListTopSuggesting;
