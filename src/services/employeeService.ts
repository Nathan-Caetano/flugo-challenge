import { addDoc, collection, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import type { Employee } from "../types/Employee";

export const createEmployee = async (employee: Employee) => {
  await addDoc(collection(db, "employees"), employee);
};

export const getEmployees = async (): Promise<Employee[]> => {
  const snapshot = await getDocs(collection(db, "employees"));
  return snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      ...data,
      createdAt: data.createdAt?.toDate(),
    } as Employee;
  });
};

export const deleteEmployee = async (id: string) => {
  await deleteDoc(doc(db, "employees", id));
};

export const updateEmployee = async (id: string, data: Partial<Employee>) => {
  await updateDoc(doc(db, "employees", id), data);
}