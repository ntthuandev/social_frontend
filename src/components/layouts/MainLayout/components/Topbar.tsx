import Button from "@/components/ui/Button";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect, useRef, useState } from "react";
import { TNavLink, topbarLinks } from "./menu.links";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/Icon";
import LogoutUI from "@/features/auth/logout/LogoutUI";

const Topbar = () => {
  const { user } = useAuth();
  const [isShowMoreOption, setIsShowMoreOption] = useState(false);

  const moreOptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleCloseOutSide = (e: MouseEvent) => {
      if (
        moreOptionRef.current &&
        !moreOptionRef.current.contains(e.target as Node)
      )
        setIsShowMoreOption(false);
    };
    document.addEventListener("mousedown", handleCloseOutSide);

    return () => {
      document.addEventListener("mousedown", handleCloseOutSide);
    };
  }, [moreOptionRef]);
  return (
    <section className="sticky top-0 z-50 md:hidden bg-white w-full">
      <div className="flex-between py-4 px-5">
        <p className="text-5xl text-primary-600 font-semibold">
          S<span className="text-2xl">ocial</span>
        </p>

        <div className="relative">
          <Button
            variant="text"
            className="flex gap-4 items-center p-2 group-hover:font-medium"
            onClick={() => setIsShowMoreOption((prev) => !prev)}
          >
            <img
              src={user?.profileImage}
              alt={user?.username}
              className="size-10 rounded-full"
            />
          </Button>
          {isShowMoreOption ? (
            <div ref={moreOptionRef} className="absolute right-0 transition ">
              <div className="w-56 rounded-lg shadow-md bg-white">
                <ul className=" flex flex-col gap-2">
                  {topbarLinks.map((link: TNavLink) => {
                    return (
                      <li
                        key={link.label}
                        className="rounded-lg base-normal hover:bg-slate-200/60 transition group"
                      >
                        <Link
                          to={link.route}
                          className="flex gap-4 items-center p-4 group-hover:font-medium"
                        >
                          <span className="group-hover:scale-105">
                            <Icon name={link.icon} />
                          </span>
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                  <li className="border-t  w-full bg-slate-200"></li>
                  <LogoutUI />
                </ul>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Topbar;
