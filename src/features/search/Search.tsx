import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Modal from "@/components/ui/Modal";
import { useState } from "react";
import ManageSearchUser from "./SearchUser/ManageSearchUser";

const Search = () => {
  const [shoudleShowSearch, setShouldShowSearch] = useState(false);

  const onClose = () => {
    setShouldShowSearch(false);
  };
  return (
    <>
      <li className="rounded-lg base-normal hover:bg-slate-200/50 transition group">
        <Button
          variant="text"
          className="w-full justify-start gap-4 items-center p-4 text-black !font-normal hover:!font-semibold"
          onClick={() => setShouldShowSearch(true)}
        >
          <Icon name="Search" />
          <span>Tìm kiếm</span>
        </Button>
      </li>
      <Modal shouldShow={shoudleShowSearch} close={onClose}>
        <ManageSearchUser />
      </Modal>
    </>
  );
};

export default Search;
