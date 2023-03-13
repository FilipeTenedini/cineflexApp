import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilmsPage from "./components/FilmsPage";
import SessionsPage from "./components/SessionsPage";
import SeatsPage from "./components/SeatsPage";
import SuccessPage from "./components/SuccessPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={ <FilmsPage /> } />
        <Route path="/sessoes/:idFilme" element={ <SessionsPage /> } />
        <Route path="/assentos/:idSessao" element={ <SeatsPage /> } />
        <Route path="/sucesso" element={ <SuccessPage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
