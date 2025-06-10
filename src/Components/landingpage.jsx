import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";
// import './globals.css'

const LandingPage =() =>{
  return (
    <div>
      <div className="min-h-screen bg-gray-100 relative overflow-hidden">
        {/* Main Content */}
        <div className="relative h-screen">
          {/* Diagonal Split Background */}
          <div className="absolute inset-0">
            {/* Light section */}
            <div className="absolute inset-0 bg-gray-100"></div>
            {/* Dark section with diagonal cut */}
            <div
              className="absolute inset-0 bg-black"
              style={{
                clipPath: "polygon(70% -5%, 100% 0%, 100% 100%, 25% 100%)",
              }}
            ></div>
          </div>

          {/* Content Container */}
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
                {/* Left Content */}
                <div className="space-y-6 lg:space-y-8">
                  <div>
                    <p className="text-lg text-gray-600 mb-4">Hi, I am</p>
                    <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight">Ayush Singh</h1>
                    <p className="text-lg lg:text-xl text-gray-500 mt-4">Full Stack Developer | DevOps Passionate</p>
                  </div>

                  {/* Social Icons */}
                  <div className="flex items-center justify-center space-x-4">
                    <a
                      href="mailto:sirfayush1008@gmail.com" target="_blank" rel="noopener noreferrer"
                      className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                    >
                      <FaRegEnvelope className="text-white text-2xl" />
                    </a>
                    <a
                      href="https://github.com/AyushInKC" target="_blank" rel="noopener noreferrer"
                      className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                    >
                      <FaGithub className="text-white text-2xl" />
                    </a>
                    <a
                      href="https://linkedin.com/ayushinkc" target="_blank" rel="noopener noreferrer"
                      className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                    >
                      <FaLinkedin className="text-white text-2xl" />
                    </a>
                  </div>
                </div>

                {/* Right Content - Profile Image */}
                <div className="flex justify-center lg:justify-end">
                  <div className="relative">
                    <img
                      src="\profile.png.jpg"
                      alt="Profile"
                      className="w-[340px] h-[420px] object-cover rounded-xl shadow-2xl border-4 border-black"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Expand Icon */}
          <button className="absolute bottom-6 right-6 w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
            {/* Icon can be added here */}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden fixed top-6 right-6 z-20 w-10 h-10 bg-white rounded-lg flex items-center justify-center">
          <div className="w-5 h-0.5 bg-black"></div>
        </button>
      </div>
    </div>
  );
}

export default LandingPage;