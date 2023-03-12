import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilmsPage from "./components/FilmsPage"
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={ <FilmsPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
