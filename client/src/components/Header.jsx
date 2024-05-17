import { Button, Navbar, Dropdown, Avatar, TextInput } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";
import { signoutSuccess } from "../redux/user/userSlice";
import { useEffect, useState } from "react";

export default function Header() {
  const path = useLocation().pathname;
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const [searchTerm, setSearchTerm] = useState(() => {
    const params = new URLSearchParams(location.search);
    return params.get("searchTerm") || "";
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setSearchTerm(params.get("searchTerm") || "");
  }, [location.search]);

  const handleSignout = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
        navigate("/sign-in");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(location.search);
    params.set("searchTerm", searchTerm);
    navigate(`/search?${params.toString()}`);
  };

  return (
    <Navbar className="border-b-2 bg-gradient-to-r from-sky-100 via-sky-300 to-sky-500 rounded-lg dark:bg-gradient-to-r dark:from-sky-700 dark:via-sky-800 dark:to-sky-950">
      <Link
        to="/"
        className="self-center text-sm sm:text-xl font-sedan font-semibold hover:font-extrabold dark:text-sky-50 hover:text-sky-500 dark:hover:text-sky-500"
      >
        Laiskliidu&apos;s Blog
      </Link>
      <form onSubmit={handleSubmit}>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="inline"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <div className="flex gap-2 md:order-2 items-center">
        <Button
          className="w-10 h-8 hover:bg-sky-600"
          color="sky"
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </Button>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="user" img={currentUser.profilePicture} rounded />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{currentUser.username}</span>
              <span className="block text-sm font-medium truncate">
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Link to={"/dashboard?tab=profile"}>
              <Dropdown.Item>
                {currentUser.isAdmin ? "Profiil" : "Profile"}
              </Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignout}>
              {currentUser.isAdmin ? "Logi välja" : "Sign Out"}
            </Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/sign-in">
            <Button gradientDuoTone="purpleToBlue">Sign In</Button>
          </Link>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link
            to="/"
            className="font-sedan text-sm sm:text-xl hover:font-bold hover:text-sky-500 text-sky-800 dark:text-sky-300 dark:hover:text-sky-500"
          >
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link
            to="/about"
            className="font-sedan text-sm sm:text-xl hover:font-bold hover:text-sky-500 text-sky-800 dark:text-sky-300 dark:hover:text-sky-500"
          >
            About
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/love"} as={"div"}>
          <Link
            to="/love"
            className="font-sedan text-sm sm:text-xl hover:font-bold hover:text-sky-500 text-sky-800 dark:text-sky-300 dark:hover:text-sky-500"
          >
            Love
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
