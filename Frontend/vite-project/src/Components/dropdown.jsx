// components/MyDropdownMenu.tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";

import { Button } from "./ui/button";
import { useState } from "react";

// const navLinks = [
//   { to: "/", label: "Home" },
//   { to: "/blog", label: "Blog" },
//   { to: "/news", label: "News" },
//   { to: "/business", label: "Business" },
//   { to: "/sports", label: "Sports" },
//   { to: "/tech", label: "Tech" },
//   { to: "/science", label: "Science" },
// ];

export function MyDropdownMenu() {
  const [isLoggedIn, setIsloggedIn] = useState(false);

  const loginHandle = () => {
    setIsloggedIn(true);
    navigate("/login");
  };

  const logoutHandle = () => {
    setIsloggedIn(false);
    localStorage.removeItem("token");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRhYmxlLW9mLWNvbnRlbnRzLWljb24gbHVjaWRlLXRhYmxlLW9mLWNvbnRlbnRzIj48cGF0aCBkPSJNMTYgMTJIMyIvPjxwYXRoIGQ9Ik0xNiAxOEgzIi8+PHBhdGggZD0iTTE2IDZIMyIvPjxwYXRoIGQ9Ik0yMSAxMmguMDEiLz48cGF0aCBkPSJNMjEgMThoLjAxIi8+PHBhdGggZD0iTTIxIDZoLjAxIi8+PC9zdmc+" alt="navi" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Navigation</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <a href="/interest">Interest</a>
        <form>
        <div>
      News
        <input  type="checkbox" name="" id="" />
      </div>
      <div>
      Business
        <input type="checkbox" name="" id="" />
      </div>
      <div>
      Sports
        <input type="checkbox" name="" id="" />
      </div>
      <div>
      Science
        <input type="checkbox" name="" id="" />
      </div>
      <div>
        Tech
        <input type="checkbox" name="" id="" />
      </div>
      <button>Apply</button>
        </form>
        {/* {navLinks.map((link) => (
          
          <DropdownMenuItem 
            key={link.to}
            onClick={() => (window.location.href = link.to)}
          >
            {link.label}
          </DropdownMenuItem>
        ))} */}
        <div className="flex gap-2">
          {isLoggedIn ? (
            <Button variant="outline" onClick={logoutHandle}>
              Login
            </Button>
          ) : (
            <Button variant="outline" onClick={loginHandle}>
              Logout
            </Button>
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default MyDropdownMenu;
