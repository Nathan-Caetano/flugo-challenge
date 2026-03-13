import { Breadcrumbs, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

function Breadcrumb() {
  const location = useLocation();

  return (
    <Breadcrumbs
      separator="•"
      aria-label="breadcrumb"
      sx={{
        "& .MuiBreadcrumbs-separator": {
          fontSize: 10,
          color: "text.disabled",
          mx: 0.5,
        },
      }}
    >
      <Typography
        component={Link}
        to="/employees"
        variant="body2"
        sx={{
          color: "text.secondary",
          textDecoration: "none",
          transition: "color .2s ease-in-out",
          "&:hover": { color: "primary.main" },
        }}
      >
        Colaboradores
      </Typography>

      <Typography
        component={Link}
        to="/employees/new"
        variant="body2"
        sx={{
          color: location.pathname === "/employees/new" ? "text.primary" : "text.secondary",
          fontWeight: location.pathname === "/employees/new" ? 500 : 400,
          textDecoration: "none",
          pointerEvents: "none",
        }}
      >
        Cadastrar Colaborador
      </Typography>
    </Breadcrumbs>
  );
}

export default Breadcrumb;