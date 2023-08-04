import { Route, Routes } from "react-router-dom";
import { routes } from "./configRoutes";
import Layout from "../components/layout/Layout";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        {/* <Route element={<Layout />}> */}
        {routes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
        {/* </Route> */}
      </Routes>
    </div>
  );
};

export default AppRouter;
