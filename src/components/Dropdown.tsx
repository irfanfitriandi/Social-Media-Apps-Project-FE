import { MdMoreVert } from "react-icons/md";
import { Dropdown } from "react-daisyui";
import { Link } from "react-router-dom";
import { FC } from "react";

interface dataType {
  id: number;
}

export const PostOption: FC<dataType> = (id) => {
  return (
    <Dropdown className="pl-5">
      <Dropdown>
        <MdMoreVert className="text-xl" />
      </Dropdown>
      <Dropdown.Menu
        dataTheme="black"
        className="relative left-[-10px] text-xs p-0 bg-content rounded-xl"
      >
        {/* <Link to={"/edit-post/1"}> */}
        <Dropdown.Item>{id.id}</Dropdown.Item>

        {/* </Link> */}
        <Dropdown.Item>Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
