import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../Components/ui/input";
import { Button } from "../Components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../Components/ui/navigation-menu";
import { Sheet, SheetTrigger, SheetContent } from "../Components/ui/sheet";
import { Menu } from "lucide-react";


const Feed = () => {
  const [isLoggedIn, setIsloggedIn] = useState(false);
  const navigate = useNavigate();

  const loginHandle = () => {
    setIsloggedIn(true);
    navigate("/login")
  };

  const logoutHandle = () => {
    setIsloggedIn(false);
    navigate("/login")
    localStorage.removeItem("token")
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/blog", label: "Blog" },
    { to: "/news", label: "News" },
    { to: "/business", label: "Business" },
    { to: "/sports", label: "Sports" },
    { to: "/tech", label: "Tech" },
    { to: "/science", label: "Science" },
  ];

  return (
    <main className="border-b">
      {/* Header */}
      <header className="flex justify-between items-center p-4 border-b">
        <div className="flex items-center gap-4">
          {/* Mobile menu trigger */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <nav className="flex flex-col gap-4 mt-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="text-lg font-medium"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Search + Branding */}
          <Input
            type="search"
            placeholder="Search"
            className="hidden md:block w-60"
          />
          <h1 className="text-2xl font-bold">Feed Fusion</h1>
        </div>

        {/* Auth Buttons */}
        {/* <Button variant="outline" onClick={() => navigate("/register")}>
            Register
          </Button> */}
        <div className="flex gap-2">
          {{isLoggedIn} ?(
             <Button variant="outline" onClick={logoutHandle}>
             Logout
             
           </Button>
          ):(
            <Button variant="outline" onClick={loginHandle}>
            Login
          </Button>
          )}
        </div>
      </header>

      {/* Desktop Nav Menu */}
      <nav className="hidden md:flex justify-center border-b py-2">
        <NavigationMenu>
          <NavigationMenuList className="gap-6">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.to}>
                <Link
                  to={link.to}
                  className="text-lg font-light hover:underline"
                >
                  {link.label}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
      <div className="feed">
        
      </div>
    </main>
  );
};

export default Feed;
