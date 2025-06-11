import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";
import TrueFocus from "./TrueFocus";
import FallingText from "./FallingText";

const techStack = [
  "ReactJS",
  "Spring Boot",
  "Java",
  "C++",
  "Redis",
  "Kafka",
  "SQL",
  "MongoDB",
  "AWS",
  "Docker",
  "Jenkins",
  "Ubuntu",
  "Kubernetes",
];

const LandingPage = () => {
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
                    <p className="text-lg text-gray-700 mb-4 font-sans font-semibold tracking-tight">
                      Hi, I am
                    </p>
                    <TrueFocus
                      sentence="Ayush Singh"
                      borderColor="#5227FF" // Bright blue-violet
                      glowColor="rgba(82,39,255,0.4)"
                      animationDuration={0.7}
                      blurAmount={4}
                      manualMode={true} // <-- Add this prop
                       startOnMount={true} // <-- Add this if supported by your component
                      style={{
                        color: "#808080	", // Change text color to match your brand accent
                        fontWeight: 800,
                        fontFamily:
                          "Montserrat, Nunito Sans, Lato, Inter, Segoe UI, Arial, sans-serif",
                      }}
                    />
                    <p className="text-lg lg:text-xl text-gray-700 mt-4 font-sans font-medium tracking-wide">
                      Full Stack Developer | DevOps Passionate
                    </p>
                  </div>

                  {/* Social Icons */}
                  <div className="flex items-center justify-center space-x-4">
                    <a
                      href="mailto:sirfayush1008@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                    >
                      <FaRegEnvelope className="text-white text-2xl" />
                    </a>
                    <a
                      href="https://github.com/AyushInKC"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                    >
                      <FaGithub className="text-white text-2xl" />
                    </a>
                    <a
                      href="https://linkedin.com/ayushinkc"
                      target="_blank"
                      rel="noopener noreferrer"
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

      {/* About Me Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">About Me</h2>
          <p className="text-lg text-gray-700 max-w-2xl">
            Hello! I'm Ayush Singh, a passionate Full Stack Developer with a keen
            interest in DevOps and modern web technologies. I love building
            beautiful, performant, and scalable applications. My journey in tech
            has equipped me with a strong foundation in both frontend and backend
            development, and I enjoy collaborating on innovative projects that
            make a difference.
          </p>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="techstack" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            My Tech Stack
          </h2>
          <div className="relative min-h-[120px]">
            <FallingText
              text={techStack.join(" ")}
              highlightWords={[
                "ReactJS",
                "Spring",
                "Java",
                "C++",
                "Redis",
                "Kafka",
                "SQL",
                "MongoDB",
                "AWS",
                "Docker",
                "Jenkins",
                "Ubuntu",
                "Kubernetes",
              ]}
              fontSize="1.5rem"
              gravity={1}
              backgroundColor="transparent"
              trigger="auto"
            />
          </div>
        </div>
      </section>

      {/* ...rest of your landing page (socials, profile, etc.)... */}
    </div>
  );
};

export default LandingPage;