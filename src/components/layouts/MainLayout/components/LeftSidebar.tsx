import { pathKeys } from "@/lib/react-router";
import { Link, NavLink, useLocation } from "react-router-dom";

import Logo from "@/components/ui/Logo";
import { TNavLink, sidebarLinks, sidebarSettingLinks } from "./menu.links";
import Icon from "@/components/ui/Icon";
import { useAuth } from "@/contexts/AuthContext";
import Button from "@/components/ui/Button";
import { useState } from "react";
import { CreatPost } from "@/features/posts";
import { Search } from "@/features/search";
const LeftSidebar = () => {
  const { pathname } = useLocation();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const { user } = useAuth();

  return (
    <nav className="hidden  md:flex px-6 py-4 flex-col justify-between min-w-[270px] bg-white border-r border-gray-300">
      <div className="flex flex-col gap-10">
        <Link to={pathKeys.root}>
          <Logo />
        </Link>

        <ul className="flex flex-col gap-6">
          {sidebarLinks.map((link: TNavLink) => {
            const isActive = pathname === link.route;
            return (
              <li
                key={link.label}
                className={`rounded-lg base-normal hover:bg-slate-200/60 transition group ${
                  isActive && "font-medium"
                }`}
              >
                <NavLink
                  to={link.route}
                  className="flex gap-4 items-center p-4 group-hover:font-medium"
                >
                  <span className="group-hover:scale-105">
                    <Icon name={link.icon} />
                  </span>
                  {link.label}
                </NavLink>
              </li>
            );
          })}
          <Search />
          <CreatPost />
          <li className="rounded-lg base-normal hover:bg-slate-200/60 transition group">
            <NavLink
              to={pathKeys.profile.root()}
              className={`flex gap-4 items-center p-2 group-hover:font-medium ${
                pathname === pathKeys.profile.root() && "font-medium"
              }`}
            >
              <img
                src={user?.profileImage}
                alt={user?.username}
                className="size-10 rounded-full"
              />
              Trang cá nhân
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="relative">
        <Button
          variant="text"
          className="justify-start gap-4 text-black !font-normal hover:!font-semibold"
          onClick={() => setIsOpenMenu((prev) => !prev)}
        >
          <Icon name="Menu" />
          Tuỳ chọn khác
        </Button>
        {isOpenMenu ? (
          <div className="absolute z-10 bottom-12 left-4 ">
            <div className="w-56 bg-white rounded-xl shadow-lg py-4 px-2">
              <ul className=" flex flex-col gap-2">
                {sidebarSettingLinks.map((link: TNavLink) => {
                  return (
                    <li
                      key={link.label}
                      className="rounded-lg base-normal hover:bg-slate-200/60 transition group"
                    >
                      <NavLink
                        to={link.route}
                        className="flex gap-4 items-center p-4 group-hover:font-medium"
                      >
                        <span className="group-hover:scale-105">
                          <Icon name={link.icon} />
                        </span>
                        {link.label}
                      </NavLink>
                    </li>
                  );
                })}
                <li className="border-t  w-full bg-slate-200"></li>
                <li className="rounded-lg base-normal hover:bg-slate-200/60 transition group">
                  <Button variant="text">Đăng xuất</Button>
                </li>
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default LeftSidebar;
