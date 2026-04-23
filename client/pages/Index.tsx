import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Index() {
  const [authMode, setAuthMode] = useState<'login' | 'signup' | null>(null);
  const navigate = useNavigate();

  // Auth Selection Page
  if (!authMode) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-300 via-gray-700 to-black flex items-center justify-center relative overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 to-gray-800/20 backdrop-blur-3xl"></div>
        
        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border-2 border-purple-400/30 transform rotate-45 animate-bounce"></div>
          <div className="absolute bottom-32 left-32 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-lg animate-spin"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 border border-blue-400/20 rounded-lg transform rotate-12 animate-pulse"></div>
        </div>

        <div className="relative z-10 text-center max-w-md mx-auto px-6">
          <h1 className="font-cursive text-white mb-6 animate-fade-in leading-tight">
            <span className="text-5xl md:text-6xl block">Welcome</span>
            <span className="text-5xl md:text-6xl block">To</span>
            <span className="text-6xl md:text-7xl block">Spectra</span>
          </h1>
          <p className="text-white/80 text-lg mb-12 font-light">
            Igniting the future, one idea at a time
          </p>

          <div className="space-y-4">
            <button
              onClick={() => navigate('/chat')}
              className="w-full py-4 px-8 bg-gradient-to-r from-green-600 to-blue-600 border border-green-400/30 rounded-2xl text-white font-serif text-xl hover:from-green-500 hover:to-blue-500 hover:scale-105 transition-all duration-300 group shadow-lg"
            >
              <span className="flex items-center justify-center gap-3">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
                </svg>
                Start Chatting with SupportGPT
              </span>
            </button>

            <button
              onClick={() => setAuthMode('login')}
              className="w-full py-4 px-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white font-serif text-xl hover:bg-white/20 hover:border-white/40 hover:scale-105 transition-all duration-300 group"
            >
              <span className="flex items-center justify-center gap-3">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                </svg>
                Sign In
              </span>
            </button>

            <button
              onClick={() => setAuthMode('signup')}
              className="w-full py-4 px-8 bg-gradient-to-r from-gray-600 to-gray-800 border border-gray-400/30 rounded-2xl text-white font-serif text-xl hover:from-gray-500 hover:to-gray-700 hover:scale-105 transition-all duration-300 group shadow-lg"
            >
              <span className="flex items-center justify-center gap-3">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"/>
                </svg>
                Create Account
              </span>
            </button>

          </div>
        </div>
        {/* Footer */}
        <div className="absolute bottom-4 left-0 w-full flex justify-center z-10">
          <span className="text-white/50 text-xs">Created by Aditya</span>
        </div>
      </div>
    );
  }

  // Login Form
  if (authMode === 'login') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-300 via-gray-700 to-black flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
            <div className="text-center mb-8">
              <button
                onClick={() => setAuthMode(null)}
                className="absolute top-6 left-6 text-white/60 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h2 className="text-4xl font-cursive text-white mb-2">Welcome Back</h2>
              <p className="text-white/70">Sign in to your account</p>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all"
                  placeholder="Enter your password"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center text-white/70">
                  <input type="checkbox" className="mr-2 rounded"/>
                  <span className="text-sm">Remember me</span>
                </label>
                <a href="#" className="text-sm text-purple-400 hover:text-purple-300">Forgot password?</a>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white font-medium hover:from-purple-500 hover:to-blue-500 transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02]"
              >
                Sign In
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-white/60">
                Don't have an account?{' '}
                <button
                  onClick={() => setAuthMode('signup')}
                  className="text-purple-400 hover:text-purple-300 font-medium"
                >
                  Sign up
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Signup Form
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-300 via-gray-700 to-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
          <div className="text-center mb-8">
            <button
              onClick={() => setAuthMode(null)}
              className="absolute top-6 left-6 text-white/60 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h2 className="text-3xl font-cursive text-white mb-2">Join Spectra</h2>
            <p className="text-white/70">Create your account</p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all"
                placeholder="Create a password"
              />
            </div>

            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">Confirm Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all"
                placeholder="Confirm your password"
              />
            </div>

            <label className="flex items-start text-white/70">
              <input type="checkbox" className="mr-3 mt-1 rounded"/>
              <span className="text-sm">
                I agree to the{' '}
                <a href="#" className="text-purple-400 hover:text-purple-300 underline">Terms of Service</a>
                {' '}and{' '}
                <a href="#" className="text-purple-400 hover:text-purple-300 underline">Privacy Policy</a>
              </span>
            </label>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white font-medium hover:from-purple-500 hover:to-blue-500 transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02]"
            >
              Create Account
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-white/60">
              Already have an account?{' '}
              <button
                onClick={() => setAuthMode('login')}
                className="text-purple-400 hover:text-purple-300 font-medium"
              >
                Sign in
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
