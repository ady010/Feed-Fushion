import React from 'react'

const Register = () => {
  return (
    // Full-screen centered container with a background image
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center text-black" style={{ backgroundImage: "url('https://media.istockphoto.com/id/1219980553/photo/online-news-on-a-smartphone-and-laptop-woman-reading-news-or-articles-in-a-mobile-phone.jpg?s=612x612&w=0&k=20&c=QodY8pXN5DbLs3-FhwWhhYKnsOE4Iixky_SwdGitwnQ=')" }}>
      {/* Glassmorphic form container */}
      <div className="backdrop-blur-lg bg-white/10 p-8 rounded-lg shadow-md w-96 border border-white/20">
        {/* App name in a simple black text */}
        <h2 className="text-3xl font-semibold text-center text-black mb-6">Feed Fusion</h2>
        {/* Subheading */}
        <h3 className="text-xl  text-center mb-4">Create an Account</h3>
        <form>
          {/* Full Name Input */}
          <div className="mb-4">
            
            <input type="text" className="w-full p-2 rounded-md bg-white/20 border border-white/30 focus:outline-none focus:ring-1 focus:ring-white/50 placeholder-white/80 text-white" placeholder=" Enter your name" />
          </div>
          {/* Email Input */}
          <div className="mb-4">
            
            <input type="email" className="w-full p-2 rounded-md bg-white/20 border border-white/30 focus:outline-none focus:ring-1 focus:ring-white/50 placeholder-white/80 text-white" placeholder="Enter your email" />
          </div>
          {/* Password Input */}
          <div className="mb-4">
            
            <input type="password" className="w-full p-2 rounded-md bg-white/20 border border-white/30 focus:outline-none focus:ring-1 focus:ring-white/50 placeholder-white/80 text-white" placeholder="Enter password" />
          </div>
          {/* Register Button */}
          <button className="w-full bg-black/70 hover:bg-black/90 text-white font-bold py-2 px-4 rounded-md transition">Register</button>
        </form>
        {/* Login Link */}
        <p className="text-sm text-center mt-4 text-white">
          Already have an account? <a href="#" className="text-white hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Register