import { Title } from "@/components/Title";

export default function Home() {
  return (
    <div className="min-h-[100vh] bg-purple-50 p-8">
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold mb-6">Welcome, Oleg 👋</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h2 className="text-lg font-semibold mb-2">Optional: Resume 📝</h2>

          <div className="bg-white p-6 rounded-lg shadow-md min-h-[175px]">
            <p>
              Upload your resume so NextOfferAIAI can generate custom answers to
              the job interview questions.
            </p>
          </div>
          <button className="mt-4 px-4 py-2 bg-gray-200 text-gray-700 rounded w-full">
            Upload Resume
          </button>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">
            Step 1: Trial Session ⏳
          </h2>

          <div className="bg-white p-6 rounded-lg shadow-md min-h-[175px]">
            <p>
              See how easy NextOfferAIAI is to use. Trial Sessions are free and
              limited to 10 minutes.
            </p>
          </div>
          <button className="mt-4 px-4 py-2 bg-black text-white rounded w-full  shadow-lg shadow-green-400/50 transition-all">
            Try for Free
          </button>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Step 2: Buy Credits 💳</h2>
          <div className="bg-white p-6 rounded-lg shadow-md min-h-[175px]">
            <p>Buy credits to use for the real interview. No subscription!</p>
          </div>
          <button className="mt-4 px-4 py-2 bg-gray-200 text-gray-700 rounded w-full">
            Get Credits
          </button>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">
            Step 3: Real Interview 💼
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md min-h-[175px]">
            <p>
              Use NextOfferAIAI for a real interview to get the job you have
              always dreamed of.
            </p>
          </div>
          <button className="mt-4 px-4 py-2 bg-gray-200 text-gray-700 rounded w-full">
            Start
          </button>
        </div>
      </div>

      <hr className="my-12 border-gray-300" />

      <div className="w-full flex flex-col items-center ">
        <Title title="How NextOfferAI Works 🤖" subtitle="" />

        {/* Video */}
        <div className="flex justify-center items-start mt-5">
          <div className="w-[600px] h-[400px]">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video URL
              title="NextOfferAIAI In-Depth Tutorial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
