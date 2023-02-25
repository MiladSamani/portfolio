import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import NotFound from "./Components/NotFound/NotFound";

import { ROUTE_HOME_PAGE } from "./Routes/Route";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE_HOME_PAGE} element={<HomePage />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
