import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-convo-accent mb-6">
        Welcome to Convo
      </h1>
      <ThemeToggle />
    </div>
  );
}
