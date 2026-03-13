import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout"
import EmployeesPage from "./pages/EmployeesPage";
import EmployeeForm from "./pages/EmployeeForm";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<EmployeesPage />}/>
          <Route path="/employees" element={<EmployeesPage />} />
          <Route path="/employees/new" element={<EmployeeForm />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;