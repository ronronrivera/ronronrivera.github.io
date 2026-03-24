import { Toaster } from "react-hot-toast";
import HomePage from "./Components/HomePage.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HomePage />
      <Toaster
        toastOptions={{
          style: {
            background: "#111111",
            color: "#ffffff",
            border: "1px solid #333333",
          },
        }}
      />
    </div>
  );
}
