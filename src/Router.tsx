import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Memorandum from "./pages/Memorandum";

interface RouteObject {
  element?: React.ReactNode;
  path?: string;
}

function Router<RouteObject>() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="Memorandum" element={<Memorandum />} />

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
