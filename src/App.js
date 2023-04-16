import { Route, Routes } from "react-router-dom";
import CarDetail from "./components/CarDetail/CarDetail";
import Layout from "./components/Layout/Layout";
import HomePage from "./Pages/HomePage";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/car/:id" element={<CarDetail />} />
      </Routes>
    </Layout>
  );
};

export default App;
