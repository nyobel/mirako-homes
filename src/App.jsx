import React from "react";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, } from "react-router-dom"
import MainLayout from "./Layouts/MainLayout";
import HomePage from "./pages/HomePage";
import PropertiesPage from "./pages/PropertiesPage";

const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/properties" element={<PropertiesPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
