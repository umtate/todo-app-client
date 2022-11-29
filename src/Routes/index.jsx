import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../pages/notFound";
import HomePage from "../pages/home";
import TodosPage from "../pages/todos";

const RoutesComponent = () => (
  <Routes>
    <Route exact path="/" element={<HomePage />} />
    <Route exact path="/todos" element={<TodosPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);
export default RoutesComponent;
