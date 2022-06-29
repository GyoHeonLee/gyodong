import { Route, Routes, BrowserRouter } from "react-router-dom";
import Memorandum from "./pages/Memorandum";
import Home from "./pages/Home";
import LoveGraphy from "./pages/LoveGraphy";
import Layout from "./components/Layout";

interface RouteObject {
  element?: React.ReactNode;
  path?: string;
}

function Router<RouteObject>() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/memorandum" element={<Memorandum />} />
          <Route path="/lovegraphy" element={<LoveGraphy />} />

          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
