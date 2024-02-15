export default function Alert({ message, onClick }) {
  return (
    <div className="flex bg-gray-500 bg-opacity-50 w-screen h-screen items-center justify-center fixed z-10 top-0 right-0">
      <div className="w-[300px] text-center p-10 rounded-lg bg-primary text-white">
        <p className="mb-5">{message}</p>
        <button
          onClick={onClick}
          className="bg-white text-primary p-2 rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
}
