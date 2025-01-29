"use client";
import { useParams, useRouter } from "next/navigation";
import { FC, useState } from "react";
import { FaBriefcase, FaLaptop } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

export const EditInerviewModal: FC = () => {
  const router = useRouter();
  const { id } = useParams();

  const [company, setCompany] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [language, setLanguage] = useState("English");

  const closeModal = () => {
    router.back(); // Закрыть модальное окно
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ company, jobDescription, language });
    // Обработайте данные здесь, например, отправьте их на сервер
  };
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={closeModal}
    >
      <div
        className="bg-white w-[600px] p-6 rounded-xl shadow-xl"
        onClick={(e) => e.stopPropagation()} // Остановить всплытие события
      >
        <h2 className="text-4xl font-bold mb-4">⏰ Edit your interview {id}</h2>
        <h3 className="text-xl text-gray-500">
          Type in the what company you are interviewing with and fow what
          position. This lets the AI know what kind of answers to suggest
        </h3>
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="flex items-center gap-2 text-gray-700 text-xl font-bold mb-2">
              <FaBriefcase width={50} />
              Company
            </label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Microsoft..."
              className="w-full p-2 border rounded text-xl focus:border-black"
            />
          </div>

          {/* Поле ввода описания работы */}
          <div className="mb-4">
            <label className="flex items-center gap-2 text-gray-700 text-xl font-bold mb-2">
              <FaLaptop width={50} />
              Job Description
            </label>
            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Software Engineer versed in Python, SQL, and AWS..."
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Выпадающий список языков */}
          <div className="mb-4">
            <label className="flex items-center gap-2 text-gray-700 text-xl font-bold mb-2">
              <TbWorld width={50} />
              Language
            </label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
            </select>
          </div>

          {/* Кнопки */}
          <div className="flex justify-between">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 text-black rounded"
              onClick={closeModal}
            >
              Close
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
