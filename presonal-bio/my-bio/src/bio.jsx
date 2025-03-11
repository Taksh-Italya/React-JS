
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
function App() {

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md shadow-lg rounded-2xl bg-white p-6 text-center">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500"
        />
        <h2 className="text-2xl font-bold mt-4">Italiya Taksh Ashokbhai</h2>
        <p className="text-gray-600">Frontend Developer </p>
        <p className="mt-2 text-gray-500">
          I am using wab app with My experience.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-blue-500 text-xl hover:text-blue-700">
            <FaGithub />
          </a>
          <a href="#" className="text-blue-500 text-xl hover:text-blue-700">
            <FaLinkedin />
          </a>
          <a href="#" className="text-blue-500 text-xl hover:text-blue-700">
            <FaTwitter />
          </a>
        </div>
        <div className="mt-6 text-left">
          <h3 className="text-xl font-semibold">About Me</h3>
          <p className="text-gray-600 mt-2">
            I am a passionate web developer with expertise in modern frontend technologies.
            I love creating intuitive user interfaces and optimizing performance.
            My journey in tech started with a curiosity for coding, and it has turned into a fulfilling career.
          </p>
          <h3 className="text-xl font-semibold mt-4">Family</h3>
          <p className="text-gray-600 mt-2">Father's Name:Ashokbhai Lallubhai Italiya</p>
          <p className="text-gray-600">Mother's Name:Sangitaben Ashokbhai Italiya</p>
          <h3 className="text-xl font-semibold mt-4">Education</h3>
          <p className="text-gray-600 mt-2">Studying in: Master in React-Js</p>
          <h3 className="text-xl font-semibold mt-4">Projects</h3>
          <p className="text-gray-600 mt-2">
            - Project 1:Presnoal-bio.
          </p>
          <p className="text-gray-600">
            - Project 2:Word-Counter.
          </p>
        </div>
      </Card>
    </div>
    </>
  )
}

export default App
