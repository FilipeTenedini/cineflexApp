import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilmsPage from "./components/FilmsPage";
import SessionsPage from "./components/SessionsPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={ <FilmsPage /> } />
        <Route path="/sessoes/:idFilme" element={ <SessionsPage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
