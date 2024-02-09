export default function Alert({ message, onClick }) {
  return (
    <div className="absolute">
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
