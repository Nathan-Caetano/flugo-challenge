import { Box } from "@mui/material"
import Sidebar from "./Sidebar"
import { Outlet } from "react-router-dom";
import Topbar from './Topbar';

function MainLayout() {
  return (
    <Box display="flex">
      <Sidebar />
      <Box sx={{ flex: 1, padding: 4}}>
        <Topbar />
        <Outlet />
      </Box>
    </Box>
  )
}

export default MainLayout;