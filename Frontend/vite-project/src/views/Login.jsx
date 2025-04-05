import React from 'react'

const Login = () => {
    return (
        // Full-screen centered container with a background image
        <div className="flex items-center justify-center min-h-screen bg-cover bg-center text-black" style={{ backgroundImage: "url(https://images.pexels.com/photos/3944425/pexels-photo-3944425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)" }}>
          {/* Glassmorphic form container */}
          <div className="backdrop-blur-lg bg-white/10 p-8 rounded-lg shadow-md w-96 border border-white/20">
            {/* App name in a simple black text */}
            <h2 className="text-3xl font-semibold text-center text-black mb-6">Feed Fusion</h2>
            {/* Subheading */}
            <h3 className="text-xl  text-center mb-4">Login to Your Account</h3>
            <form>
              {/* Email Input */}
              <div className="mb-4">
               
                <input type="email" className="w-full p-2 rounded-md bg-white/20 border border-white/30 focus:outline-none focus:ring-1 focus:ring-white/50 placeholder-white/80 text-white" placeholder="Enter your email" />
              </div>
              {/* Password Input */}
              <div className="mb-4">
                
                <input type="password" className="w-full p-2 rounded-md bg-white/20 border border-white/30 focus:outline-none focus:ring-1 focus:ring-white/50 placeholder-white/80 text-white" placeholder="Enter password" />
              </div>
              {/* Login Button */}
              <button className="w-full bg-black/70 hover:bg-black/90 text-white font-bold py-2 px-4 rounded-md transition">Login</button>
            </form>
            {/* Register Link */}
            <p className="text-sm text-center mt-4 text-white">
              Don't have an account? <a href="#" className="text-white hover:underline">Register</a>
            </p>
          </div>
        </div>
      );
}

export default Login