import React from 'react';

const Feed = () => {
  return (
    <main>
      {/* Header Section */}
      <header className="flex justify-between items-center p-4 border-b">
        <input
          type="search"
          placeholder="Search"
          className="px-2 py-1 border rounded"
        />
        <h1 className="text-4xl font-bold p-2 bg ">Feed Fusion</h1>
        <div className="flex gap-2">
          <button type="button" className="px-3 py-1 hover:bg-black hover:text-white border rounded">
            Register
          </button>
          <button type="button" className="px-3 py-1 hover:bg-black hover:text-white border rounded">
            Login
          </button>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="flex justify-between px-60 py-1 text-xl font-light border-b">
        {['Home', 'Business', 'Sports', 'Tech', 'Science', 'IT'].map((label) => (
          <a href="#" key={label} className="hover:underline">
            {label}
          </a>
        ))}
      </nav>
    </main>
  );
};

export default Feed;
