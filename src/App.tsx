import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";

export default function App() {
  return (
    <div className="w-full  min-h-screen ">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
