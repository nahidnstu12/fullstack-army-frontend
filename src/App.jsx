import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Input, Button } from "@mui/material";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import ProjectLists from "./pages/ProjectLists";
import Users from "./pages/Users";

function App() {
  const [todoState, setTodos] = useState(null);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="">
      <h1 className="text-white text-2xl text-center bg-green-400 p-4">
       Project Management Assignment
      </h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectLists />} />
          <Route path="/users" element={<Users />} />
          <Route path="/projects/:id" element={<Project />} />
          {/* <Route path="invoices" element={<Invoices />} /> */}
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
