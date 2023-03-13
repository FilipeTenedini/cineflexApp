import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilmsPage from "./components/FilmsPage";
import SessionsPage from "./components/SessionsPage";
import SeatsPage from "./components/SeatsPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={ <FilmsPage /> } />
        <Route path="/sessoes/:idFilme" element={ <SessionsPage /> } />
        <Route path="/assentos/:idSessao" element={ <SeatsPage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
