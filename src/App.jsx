import React from "react";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, } from "react-router-dom"
import MainLayout from "./Layouts/MainLayout";
import HomePage from "./pages/HomePage";
import PropertiesPage from "./pages/PropertiesPage";
import ArticlesPage from "./pages/ArticlesPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import ContactPage from "./pages/Contacts/ContactPage";

const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/properties" element={<PropertiesPage />} />
      <Route path="/articles" element={<ArticlesPage />} />
      <Route path="/contacts" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
