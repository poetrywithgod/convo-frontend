export default function App() {
  return (
    <div className="min-h-screen bg-convo-dark text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-convo-accent drop-shadow-convo">
        Convo 🚀
      </h1>
      <p className="mt-4 text-gray-400">Dark mode is alive!</p>
      <button className="mt-6 px-6 py-3 rounded-xl bg-convo-accent hover:bg-purple-700 transition shadow-convo">
        Get Started
      </button>
    </div>
  );
}
