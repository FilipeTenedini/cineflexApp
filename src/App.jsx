import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SessionsPage from "./pages/SessionsPage";
import SeatsPage from "./pages/SeatsPage";
import SuccessPage from "./pages/SuccessPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={ <HomePage /> } />
        <Route path="/sessoes/:idFilme" element={ <SessionsPage /> } />
        <Route path="/assentos/:idSessao" element={ <SeatsPage /> } />
        <Route path="/sucesso" element={ <SuccessPage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;