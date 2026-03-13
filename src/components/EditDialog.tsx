import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
  FormControl,
  InputLabel,
  Box,
} from "@mui/material";
import { useState, useEffect } from "react";
import type { Employee } from "../types/Employee";

const departments = [
  "Design", "TI", "Marketing", "Produto",
  "RH", "Financeiro", "Comercial", "Operações",
];

interface EditDialogProps {
  open: boolean;
  employee: Employee | null;
  onConfirm: (updated: Employee) => void;
  onCancel: () => void;
}

function EditDialog({ open, employee, onConfirm, onCancel }: EditDialogProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [active, setActive] = useState(true);
  const [department, setDepartment] = useState("");

  useEffect(() => {
    if (employee) {
      setName(employee.name);
      setEmail(employee.email);
      setActive(employee.active);
      setDepartment(employee.department);
    }
  }, [employee]);

  const handleConfirm = () => {
    if (!employee) return;
    onConfirm({ ...employee, name, email, active, department });
  };

  return (
    <Dialog open={open} onClose={onCancel} fullWidth maxWidth="sm">
      <DialogTitle>Editar colaborador</DialogTitle>
      <DialogContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 1 }}>
          <TextField label="Nome" value={name} onChange={(e) => setName(e.target.value)} />
          <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <FormControl fullWidth>
            <InputLabel>Departamento</InputLabel>
            <Select value={department} label="Departamento" onChange={(e) => setDepartment(e.target.value)}>
              {departments.map((dept) => (
                <MenuItem key={dept} value={dept}>{dept}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControlLabel
            control={<Switch checked={active} onChange={(e) => setActive(e.target.checked)} />}
            label="Ativo"
            slotProps={{ typography: { variant: "body2" } }}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} color="inherit">Cancelar</Button>
        <Button onClick={handleConfirm} variant="contained">Salvar</Button>
      </DialogActions>
    </Dialog>
  );
}

export default EditDialog;