import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  TableBody,
  Avatar,
  Skeleton,
  Button,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import type { Employee } from "../types/Employee";
import { useState } from "react";
import ConfirmDialog from "./ConfirmDialog";
import EditDialog from "./EditDialog";
import { deleteEmployee, updateEmployee } from "../services/employeeService";

interface EmployeeTableProps {
  employees: Employee[];
  loading?: boolean;
  onDelete: () => void;
  onEdit: () => void;
  onError: (message: string) => void;
}

function EmployeesTable({
  employees,
  loading = false,
  onDelete,
  onEdit,
  onError,
}: EmployeeTableProps) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [editOpen, setEditOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null,
  );

  const handleEdit = (employee: Employee) => {
    setSelectedEmployee(employee);
    setEditOpen(true);
  };

  const handleEditConfirm = async (updated: Employee) => {
    try {
      if (updated.id) await updateEmployee(updated.id, updated);
      setEditOpen(false);
      onEdit();
    } catch {
      onError("Erro ao deletar colaborador");
    }
  };

  const handleDelete = (id: string) => {
    setSelectedId(id);
    setDialogOpen(true);
  };

  const handleConfirm = async () => {
    try {
      if (selectedId) await deleteEmployee(selectedId);
      setDialogOpen(false);
      onDelete();
    } catch {
      setDialogOpen(false);
      onError("Erro ao deletar colaborador");
    }
  };

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          boxShadow: "0px 10px 10px #F4F6F8",
          borderRadius: 5,
          border: "1px solid #F4F6F8",
        }}
      >
        <Table
          sx={{
            minWidth: "100%",
            "& .MuiTableCell-root": {
              borderBottom: "1px solid",
              borderColor: "#F4F6F8",
            },
          }}
          aria-label="employees-table"
        >
          <TableHead sx={{ bgcolor: "background.paper" }}>
            <TableRow sx={{ height: 56 }}>
              <TableCell sx={{ py: 1.5 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "text.secondary",
                  }}
                >
                  Nome{" "}
                  <ArrowDownwardIcon
                    fontSize="small"
                    sx={{ color: "text.secondary" }}
                  />
                </Box>
              </TableCell>
              <TableCell sx={{ py: 1.5 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "text.secondary",
                  }}
                >
                  Email{" "}
                  <ArrowDownwardIcon
                    fontSize="small"
                    sx={{ color: "text.secondary" }}
                  />
                </Box>
              </TableCell>
              <TableCell sx={{ py: 1.5 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "text.secondary",
                  }}
                >
                  Departamento{" "}
                  <ArrowDownwardIcon
                    fontSize="small"
                    sx={{ color: "text.secondary" }}
                  />
                </Box>
              </TableCell>
              <TableCell align="right" sx={{ py: 1.5 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    gap: 1,
                    color: "text.secondary",
                  }}
                >
                  Status{" "}
                  <ArrowDownwardIcon
                    fontSize="small"
                    sx={{ color: "text.secondary" }}
                  />
                </Box>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ bgcolor: "#fff" }}>
            {loading ? (
              Array.from({ length: 4 }).map((_, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <Skeleton variant="rounded" height={24} />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="rounded" height={24} />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="rounded" height={24} />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="rounded" height={24} />
                  </TableCell>
                </TableRow>
              ))
            ) : employees.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={4}
                  align="center"
                  sx={{ py: 6, color: "text.secondary" }}
                >
                  Nenhum colaborador cadastrado
                </TableCell>
              </TableRow>
            ) : (
              employees.map((employee) => (
                <TableRow
                  key={employee.id}
                  sx={{
                    transition: "all ease-in-out .2s",
                    "& .MuiTableCell-root": {
                      color: "text.primary",
                      fontWeight: "500",
                    },
                    "&:hover": { bgcolor: "background.paper" },

                    "&:hover #options": {
                      opacity: 100,
                    },
                  }}
                >
                  <TableCell sx={{ py: 2, position: "relative" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Avatar
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${employee.name}`}
                        sx={{
                          width: 40,
                          height: 40,
                          bgcolor: "background.paper",
                          cursor: "pointer",
                        }}
                      />
                      {employee.name}

                      <Box
                        id="options"
                        sx={{
                          bgcolor: "background.paper",
                          p: 2,
                          position: "absolute",
                          left: 5,
                          right: 16,
                          opacity: 0,
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          transition: "all ease-in-out .2s",
                        }}
                      >
                        <Button
                          size="small"
                          onClick={() => handleDelete(employee.id!)}
                          sx={{
                            borderRadius: 2,
                            color: "#B71D18",

                            "&:hover": {
                              bgcolor: "#FFE4DE",
                            },
                          }}
                        >
                          <DeleteForeverIcon />
                        </Button>
                        <Button
                          size="small"
                          onClick={() => handleEdit(employee)}
                          sx={{
                            borderRadius: 2,

                            "&:hover": {
                              bgcolor: "#DBF6E5",
                            },
                          }}
                        >
                          <EditIcon />
                        </Button>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ py: 2 }}>{employee.email}</TableCell>
                  <TableCell sx={{ py: 2 }}>{employee.department}</TableCell>
                  <TableCell align="right" sx={{ py: 2 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                      }}
                    >
                      {employee.active ? (
                        <Box
                          sx={{
                            bgcolor: "#DBF6E5",
                            color: "primary.main",
                            p: "5px",
                            borderRadius: "8px",
                            fontSize: "12px",
                            fontWeight: "600",
                          }}
                        >
                          Ativo
                        </Box>
                      ) : (
                        <Box
                          sx={{
                            bgcolor: "#FFE4DE",
                            color: "#B71D18",
                            p: "5px",
                            borderRadius: "8px",
                            fontSize: "12px",
                            fontWeight: "600",
                          }}
                        >
                          Inativo
                        </Box>
                      )}
                    </Box>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <ConfirmDialog
        open={dialogOpen}
        title="Deletar colaborador"
        description="Tem certeza que deseja deletar este colaborador? Esta ação não pode ser desfeita."
        onConfirm={handleConfirm}
        onCancel={() => setDialogOpen(false)}
      />

      <EditDialog
        open={editOpen}
        employee={selectedEmployee}
        onConfirm={handleEditConfirm}
        onCancel={() => setEditOpen(false)}
      />
    </>
  );
}

export default EmployeesTable;
