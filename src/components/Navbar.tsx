import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

import { IoMdHome, IoMdSearch, IoIosPerson } from "react-icons/io";

function Navbar() {
  const [cookie, removeCookie] = useCookies(["token", "id_user", "username"]);
  const checkToken = cookie.token;

  return (
    <div className="max-w-4xl border-t-2 border-secondary fixed w-screen bottom-0 bg-black p-2">
      <div className="text-5xl text-primary flex justify-around">
        <Link to={"/"}>
          <IoMdHome />
        </Link>

        <Link to={"/search"}>
          <IoMdSearch />
        </Link>

        {checkToken ? (
        <Link to={"/profile/:id_user"}>
          <IoIosPerson />
        </Link>
        ) : (
          <Link to={"/login"}>
            <IoIosPerson />
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
