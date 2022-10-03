import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuizPage from "./components/pages/QuizPage";
import TopPage from "./components/pages/TopPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="quiz" element={<QuizPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
