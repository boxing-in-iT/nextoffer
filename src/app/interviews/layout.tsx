// app/interviews/layout.tsx
export default function InterviewsLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className="relative">
      {/* Основное содержимое */}
      {children}
      {/* Модальное окно */}
      {modal}
    </div>
  );
}
