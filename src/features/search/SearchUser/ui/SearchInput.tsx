import { ChangeEvent } from "react";

type SearchInputProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput = ({ onChange }: SearchInputProps) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Tìm kiếm..."
        className="w-full bg-slate-100 outline-none px-2 py-3 rounded-md base-regular"
        onChange={onChange}
      />
    </div>
  );
};

export default SearchInput;
