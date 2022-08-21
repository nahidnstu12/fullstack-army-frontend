import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MuiDesignTest from "./pages/mui";
import ColumnLayout from "./pages/mui/ColumnLayout";
import GridLayout from "./pages/mui/GridLayout";
import Screenfit from "./pages/mui/screenfit";
import Project from "./pages/projects/Project";
import ProjectLists from "./pages/projects/ProjectLists";
import Users from "./pages/projects/Users";

function App() {
  
  return (
    <div className="">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectLists />} />
          <Route path="/users" element={<Users />} />
          <Route path="/projects/:id" element={<Project />} />
          <Route path="/mui-designs" element={<MuiDesignTest />} />
          <Route path="/screenfit" element={<GridLayout />} />
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
