import {
  Box,
  Button,
  FormControlLabel,
  Switch,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useState, useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";
import Progressbar from "../components/Progresbar";
import FormStepper from "../components/FormStepper";
import type { Employee } from "../types/Employee";
import { createEmployee } from "../services/employeeService";
import { useNavigate } from "react-router-dom";

const departments = [
  "Design",
  "TI",
  "Marketing",
  "Produto",
  "RH",
  "Financeiro",
  "Comercial",
  "Operações",
];

function EmployeeForm() {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(0);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [active, setActive] = useState(true);
  const [department, setDepartment] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    department: "",
  });

  const handleNameChange = (value: string) => {
    setName(value);

    setErrors((prev) => ({
      ...prev,
      name: value.trim() ? "" : "Nome é obrigatório",
    }));
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);

    if (!value.trim()) {
      setErrors((prev) => ({ ...prev, email: "Email é obrigatório" }));
    } else if (!/\S+@\S+\.\S+/.test(value)) {
      setErrors((prev) => ({ ...prev, email: "Email inválido" }));
    } else {
      setErrors((prev) => ({ ...prev, email: "" }));
    }
  };

  const handleDepartmentChange = (value: string) => {
    setDepartment(value);

    setErrors((prev) => ({
      ...prev,
      department: value ? "" : "Selecione um departamento",
    }));
  };

  const validate = () => {
    const newErrors = {
      name: "",
      email: "",
      department: "",
    };

    if (!name.trim()) {
      newErrors.name = "Nome é obrigatório";
    }

    if (!email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email inválido";
    }

    if (step === 2 && !department) {
      newErrors.department = "Selecione um departamento";
    }

    setErrors(newErrors);

    return !newErrors.name && !newErrors.email && !newErrors.department;
  };

  const navigate = useNavigate();

  useEffect(() => {
    setProgress((step - 1) * 50);
  }, [step]);

  const handleSubmit = async () => {
    try {
      const employee: Employee = {
        name,
        email,
        active,
        department,
        createdAt: new Date(),
      };

      setProgress(100);
      
      await createEmployee(employee);

      navigate("/employees", {
        state: { message: "Colaborador criado com sucesso!" },
      });
    } catch {
      navigate("/employees", {
        state: { message: "Erro ao criar colaborador", severity: "error" },
      });
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Breadcrumb />
        <Progressbar progress={progress} />
      </Box>

      <Box sx={{ display: "flex", gap: 4, alignItems: "flex-start" }}>
        <Box sx={{ width: 220, flexShrink: 0 }}>
          <FormStepper currentStep={step} />
        </Box>

        <Box
          sx={{
            flex: 1,
            position: "relative",
            height: 500,
            maxWidth: 700,
            minWidth: 400,
          }}
        >
          {step === 1 && (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <Typography variant="h5" fontWeight={600}>
                Informações Básicas
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <TextField
                  label="Nome"
                  variant="outlined"
                  value={name}
                  onChange={(e) => handleNameChange(e.target.value)}
                  error={!!errors.name}
                  helperText={errors.name}
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => handleEmailChange(e.target.value)}
                  error={!!errors.email}
                  helperText={errors.email}
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={active}
                      onChange={(e) => setActive(e.target.checked)}
                    />
                  }
                  label="Ativar ao criar"
                  slotProps={{ typography: { variant: "body2" } }}
                />
              </Box>
            </Box>
          )}

          {step === 2 && (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <Typography variant="h5" fontWeight={600}>
                Informações Profissionais
              </Typography>
              <FormControl fullWidth error={!!errors.department}>
                <InputLabel>Selecione um departamento</InputLabel>
                <Select
                  value={department}
                  label="Selecione um departamento"
                  onChange={(e) =>
                    handleDepartmentChange(e.target.value as string)
                  }
                >
                  {departments.map((dept) => (
                    <MenuItem key={dept} value={dept}>
                      {dept}
                    </MenuItem>
                  ))}
                </Select>

                {errors.department && (
                  <Typography variant="caption" color="error">
                    {errors.department}
                  </Typography>
                )}
              </FormControl>
            </Box>
          )}

          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Button
              disabled={step <= 1}
              onClick={() => step > 1 && setStep(step - 1)}
              sx={{
                color: "text.primary",
                transition: "all ease-in-out .2s",
                borderRadius: 2,
                "&:hover": { color: "primary.main" },
              }}
            >
              Voltar
            </Button>
            <Button
              onClick={() => {
                if (!validate()) return;

                if (step < 2) {
                  setStep(step + 1);
                } else {
                  handleSubmit();
                }
              }}
              variant="contained"
              sx={{
                color: "#fff",
                transition: "all ease-in-out .2s",
                borderRadius: 2,
                "&:hover": { bgcolor: "secondary.main" },
              }}
            >
              {step === 1 ? "Próximo" : "Concluir"}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default EmployeeForm;
