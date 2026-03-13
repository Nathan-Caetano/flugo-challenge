import { Box, Typography, Button, Snackbar, Alert } from "@mui/material";
import EmployeesTable from "../components/EmployeesTable";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getEmployees } from "../services/employeeService";
import type { Employee } from "../types/Employee";
import { useLocation } from "react-router-dom";

function EmployeesPage() {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error";
  }>({
    open: false,
    message: "",
    severity: "success",
  });

  const location = useLocation();

  const showAlert = (
    message: string,
    severity: "success" | "error" = "success",
  ) => {
    setSnackbar({ open: true, message, severity });
  };

  const fetchEmployees = () => {
    setLoading(true);
    getEmployees()
      .then(setEmployees)
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (location.state?.message) {
      showAlert(location.state.message);
    }

    fetchEmployees();
  }, []);

  return (
    <Box>
      <Box
        sx={{
          mb: 4,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          component="h1"
          sx={{
            fontWeight: "600",
            fontSize: 25,
            color: "text.primary",
          }}
        >
          Colaboradores
        </Typography>
        <Button
          onClick={() => navigate("/employees/new")}
          variant="contained"
          sx={{
            bgcolor: "primary.main",
            color: "#fff",
            borderRadius: 2,
            transition: "all ease .2s",

            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: 3,
              bgcolor: "secondary.main",
            },

            "&:active": {
              transform: "translateY(2px)",
              boxShadow: 1,
            },
          }}
        >
          Novo Colaborador
        </Button>
      </Box>
      <EmployeesTable
        employees={employees}
        loading={loading}
        onDelete={() => {
          fetchEmployees();
          showAlert("Colaborador deletado com sucesso!");
        }}
        onEdit={() => {
          fetchEmployees();
          showAlert("Colaborador editado com sucesso!");
        }}
        onError={(message) => {
          showAlert(message, "error");
        }}
      />
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          severity={snackbar.severity}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default EmployeesPage;
