import { useAuth } from "@/contexts/AuthContext";
import { NavLink, useLocation, useParams } from "react-router-dom";

const ProfileNavbar = () => {
  const { username } = useParams();
  const { pathname } = useLocation();
  const { user } = useAuth();
  const isCurrentUser = user?.username === username;

  return (
    <div className="h-20 border-t w-full border-gray-200">
      <div className="flex-center gap-10">
        <NavLink
          to={`/profile/${username}`}
          className={`p-4 ${
            pathname === `/profile/${username}`
              ? "base-semibold border-t border-black"
              : "border-t border-transparent"
          }`}
        >
          Bài viết
        </NavLink>
        {isCurrentUser ? (
          <NavLink
            to={`/profile/${username}/save`}
            className={`p-4 ${
              pathname === `/profile/${username}/save`
                ? "base-semibold border-t border-black"
                : " border-t border-transparent"
            }`}
          >
            Đã lưu
          </NavLink>
        ) : null}
      </div>
    </div>
  );
};

export default ProfileNavbar;
