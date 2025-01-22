// app/interviews/@modal/signup/page.tsx
"use client";

import { useRouter } from "next/navigation";

const SignupModal = () => {
  const router = useRouter();

  const closeModal = () => {
    router.back(); // Закрыть модальное окно, вернувшись назад
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={closeModal}
    >
      <div
        className="bg-white p-6 rounded shadow-lg w-96"
        onClick={(e) => e.stopPropagation()} // Остановить всплытие события
      >
        <h2 className="text-xl font-bold mb-4">Регистрация нового интервью</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Название интервью
            </label>
            <input
              type="text"
              placeholder="Введите название"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Описание интервью
            </label>
            <textarea
              placeholder="Введите описание"
              className="w-full p-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Создать
          </button>
        </form>
        <button
          className="mt-4 px-4 py-2 bg-gray-300 text-black rounded"
          onClick={closeModal}
        >
          Отмена
        </button>
      </div>
    </div>
  );
};

export default SignupModal;
