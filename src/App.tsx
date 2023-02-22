import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Catalog, Detailed } from "./pages";
import { PATH_INDEX, PATH_DETAILED } from "./constants/routes";
import { Provider } from "react-redux";
import { STORE } from "./store";

export const App: React.FC = () => {
  return (
    <Provider store={STORE}>
      <BrowserRouter>
        <Routes>
          <Route path={PATH_INDEX} element={<Catalog />} />
          <Route path={PATH_DETAILED} element={<Detailed />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

