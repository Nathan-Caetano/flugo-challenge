import { Box, Typography } from "@mui/material";
import logo from "../assets/flugoLogo.png";
import icon from "/flugoIco.ico";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";

function Sidebar() {

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: {
          xs: 80,
          sm: 220,
          md: 260,
        },
        height: "100vh",
        flexShrink: 0,
        borderRight: "1px solid",
        borderColor: "divider",
        p: 3,
        boxSizing: "border-box",
      }}
    >
      {/* Logo */}
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", sm: "flex-start" },
        }}
      >
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <img
            src={logo}
            alt="Logo"
            style={{ height: "40px", cursor: "pointer" }}
          />
        </Box>

        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <img
            src={icon}
            alt="Logo"
            style={{ height: "36px", cursor: "pointer" }}
          />
        </Box>
      </Box>

      {/* Menu item */}
      <Box
        onClick={() => navigate("/employees")}
        sx={{
          mt: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "center", sm: "space-between" },
          cursor: "pointer",
          px: { sm: 1 },

          "&:hover": {
            bgcolor: "background.paper",
            borderRadius: 2,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", sm: "flex-start" },
            width: "100%",
          }}
        >
          <AccountBoxIcon
            sx={{
              fontSize: 22,
              color: "text.secondary",
              mr: { sm: 1 },
            }}
          />

          <Typography
            sx={{
              fontSize: 16,
              color: "text.secondary",
              display: { xs: "none", sm: "block" },
            }}
          >
            Colaboradores
          </Typography>
        </Box>

        <ArrowForwardIosIcon
          sx={{
            fontSize: 14,
            color: "text.secondary",
            display: { xs: "none", sm: "block" },
          }}
        />
      </Box>
    </Box>
  );
}

export default Sidebar;
