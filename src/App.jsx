import "./App.css";
import { Route, Routes } from 'react-router-dom';
import Todo from "./pages/Todo";
import Detail from "./pages/Detail";
import Main from "./pages/Main";

function App() {
  return (
    <div className="page-style">
      <Routes>
      <Route path="/" element={<Main/>}></Route>
      <Route path="/todo" element={<Todo/>}></Route>
      <Route path="/detail" element={<Detail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
