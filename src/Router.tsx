import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Memorandum from "./pages/Memorandum";
import Home from "./components/Home";
import LoveGraphy from "./components/LoveGraphy";

interface RouteObject {
  element?: React.ReactNode;
  path?: string;
}

function Router<RouteObject>() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memorandum" element={<Memorandum />} />
        <Route path="/lovegraphy`" element={<LoveGraphy />} />

        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
