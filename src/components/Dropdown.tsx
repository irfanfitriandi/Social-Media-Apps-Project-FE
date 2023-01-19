import { MdMoreVert } from "react-icons/md";
import { Dropdown } from "react-daisyui";
import { Link } from "react-router-dom";

export const PostOption = () => {
  return (
    <Dropdown className="pl-5">
      <Dropdown>
        <MdMoreVert className="text-xl" />
      </Dropdown>
      <Dropdown.Menu
        dataTheme="black"
        className="relative left-[-10px] text-xs p-0 bg-content rounded-xl"
      >
        <Link to={"/edit-post/:id_post"}>
          <Dropdown.Item>Edit</Dropdown.Item>
        </Link>
        <Dropdown.Item>Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
