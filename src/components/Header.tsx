import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-center p-2 border-b-2 border-secondary max-w-4xl w-full fixed top-0 bg-black">
      <Link to={"/"}>
        <img
          src="
          https://svgshare.com/i/pf6.svg
          "
          alt="circle-logo"
          className="w-12"
        />
      </Link>
    </div>
  );
}

export default Header;
