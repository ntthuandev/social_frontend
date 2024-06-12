import { IconName } from "@/components/ui/Icon";

export type TNavLink = {
  label: string;
  route: string;
  icon: IconName;
};
export const sidebarLinks = [
  {
    label: "Trang chủ",
    route: "/",
    icon: "Home" as IconName,
  },

  {
    label: "Khám phá",
    route: "/explore",
    icon: "Atom" as IconName,
  },
];

export const sidebarSettingLinks = [
  {
    label: "Chỉnh sửa",
    route: "/edit",
    icon: "UserCog" as IconName,
  },
  {
    label: "Lưu",
    route: "/save",
    icon: "Bookmark" as IconName,
  },
];

export const bottombarLinks = [
  {
    label: "Trang chủ",
    route: "/",
    icon: "Home" as IconName,
  },
  {
    label: "Khám phá",
    route: "/explore",
    icon: "Atom" as IconName,
  },
];

export const topbarLinks = [
  {
    label: "Trang cá nhân",
    route: "/profile",
    icon: "User" as IconName,
  },
  {
    label: "Chỉnh sửa",
    route: "/edit",
    icon: "UserCog" as IconName,
  },
  {
    label: "Lưu",
    route: "/save",
    icon: "Bookmark" as IconName,
  },
];
