import React, { useEffect, useState } from "react";
import axios from "axios";
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
  const [news, setNews] = useState([]);
  const [tech, setTech] = useState([]);
  const [science, setScience] = useState([]);
  const [sports, setSports] = useState([]);
  const [business, setBusiness] = useState([]);
  const navigate = useNavigate();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/blog", label: "Blog" },
    { to: "/news", label: "News" },
    { to: "/business", label: "Business" },
    { to: "/sports", label: "Sports" },
    { to: "/tech", label: "Tech" },
    { to: "/science", label: "Science" },
  ];

  const loginHandle = () => {
    setIsloggedIn(true);
    navigate("/login");
  };

  const logoutHandle = () => {
    setIsloggedIn(false);
    localStorage.removeItem("token");
  };

  // API Requests
  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [newsRes, businessRes, sportsRes, techRes, scienceRes] =
          await Promise.all([
            axios.get("http://localhost:3000/news/api"),
            axios.get("http://localhost:3000/all/business"),
            axios.get("http://localhost:3000/all/sports"),
            axios.get("http://localhost:3000/all/tech"),
            axios.get("http://localhost:3000/all/science"),
          ]);
        setNews(newsRes.data);
        setBusiness(businessRes.data);
        setSports(sportsRes.data);
        setTech(techRes.data);
        setScience(scienceRes.data);
      } catch (err) {
        console.log(err.response?.data?.error || err.message);
      }
    };
    fetchAll();
  }, []);

  // --- Components ---

  const SectionHeader = ({ title }) => (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
    </div>
  );

  const NewsCard = ({ article }) => (
    <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300">
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title || "News"}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <span className="text-xs text-red-500 uppercase font-semibold">
          {article.source?.name || "News"}
        </span>
        <h4 className="text-lg font-bold mt-2 mb-1 text-gray-900 leading-snug">
          {article.title}
        </h4>
        <p className="text-sm text-gray-600 leading-snug line-clamp-2">
          {article.description || "No description available."}
        </p>
        <div className="mt-3 text-xs text-gray-400">
          {new Date(article.publishedAt).toLocaleDateString()} · 4 min read
        </div>
      </div>
    </div>
  );

  const HeroFeature = ({ article }) => (
    <div className="bg-white rounded-xl overflow-hidden shadow mb-10">
      <img
        src={article.urlToImage}
        alt={article.title}
        className="w-full h-[320px] object-cover"
      />
      <div className="p-6">
        <span className="text-sm text-gray-500">
          {article.source?.name || "News"} ·{" "}
          {new Date(article.publishedAt).toLocaleTimeString()}
        </span>
        <h2 className="text-2xl font-bold text-gray-900 mt-2">
          {article.title}
        </h2>
        <p className="text-gray-600 mt-2">{article.description}</p>
        <div className="mt-2 text-sm text-red-500">Featured · 4 min read</div>
      </div>
    </div>
  );

  const HorizontalScroll = ({ articles }) => (
    <div className="overflow-x-auto whitespace-nowrap mb-8">
      <div className="flex gap-6">
        {articles.map((article, index) => (
          <div key={index} className="min-w-[300px] max-w-[300px]">
            <NewsCard article={article} />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center p-4 border-b bg-white">
        <div className="flex items-center gap-4">
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
          <Input
            type="search"
            placeholder="Search"
            className="hidden md:block w-60"
          />
          <h1 className="text-2xl font-bold ">Feed Fusion</h1>
        </div>
        <div className="flex gap-2">
          {isLoggedIn ? (
            <Button variant="outline" onClick={logoutHandle}>
              Logout
            </Button>
          ) : (
            <Button variant="outline" onClick={loginHandle}>
              Login
            </Button>
          )}
        </div>
      </header>

      {/* Navigation Menu */}
      <nav className="hidden md:flex justify-center border-b py-2 bg-white">
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

      {/* Feed Content */}
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        {news.length > 0 && <HeroFeature article={news[0]} />}

        {/* Sections */}
        <Link to="/news" className="text-sm text-blue-600 hover:underline flex justify-end pt-10">
          See all →
        </Link>
        <SectionHeader title="Latest News" />
        <HorizontalScroll articles={news.slice(1, 6)} />

        <Link to="/business" className="text-sm text-blue-600 hover:underline flex justify-end pt-10">
          See all →
        </Link>
        <SectionHeader title="Top Business Headlines" />
        <HorizontalScroll articles={business.slice(0, 5)} />

        <Link to="/sports" className="text-sm text-blue-600 hover:underline flex justify-end pt-10">
          See all →
        </Link>
        <SectionHeader title="Top Sports Headlines" />
        <HorizontalScroll articles={sports.slice(0, 5)} />

        <Link to="/tech" className="text-sm text-blue-600 hover:underline flex justify-end pt-10">
          See all →
        </Link>
        <SectionHeader title="Top Tech Headlines" />
        <HorizontalScroll articles={tech.slice(0, 5)} />

       
        <Link
          to="/science"
          className="text-sm text-blue-600 hover:underline flex justify-end pt-10"
        >
          See all →
        </Link>
        <SectionHeader title="Top Science Headlines" />
        <HorizontalScroll articles={science.slice(0, 5)} />
        
      </div>
    </main>
  );
};

export default Feed;
