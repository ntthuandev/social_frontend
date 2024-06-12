import Icon from "@/components/ui/Icon";
import { bottombarLinks } from "./menu.links";
import { Link, useLocation } from "react-router-dom";
import Button from "@/components/ui/Button";

const Bottombar = () => {
  const { pathname } = useLocation();
  return (
    <section className="z-20  flex-between sticky bottom-0 rounded-t-[20px] bg-white px-5 py-4 md:hidden">
      {bottombarLinks.map((link) => {
        const isActive = pathname === link.route;
        return (
          <div key={link.label}>
            <Link
              key={link.label}
              to={link.route}
              className={`${
                isActive && "rounded-[10px] text-primary-500"
              } flex-center flex-col gap-1 p-2 transition`}
            >
              <Icon name={link.icon} />
              <p className="small-medium ">{link.label}</p>
            </Link>
          </div>
        );
      })}
      <Button
        variant="text"
        className={` flex-center flex-col gap-1 p-2 transition text-black !font-normal`}
      >
        <Icon name="SquarePlus" />
        <p className="small-medium ">Tạo</p>
      </Button>
    </section>
  );
};

export default Bottombar;
