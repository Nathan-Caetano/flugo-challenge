# Flugo Challenge (React + TypeScript + Firebase)

[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev) [![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)](https://www.typescriptlang.org) [![Vite](https://img.shields.io/badge/Vite-7.3.1-brightgreen?logo=vite)](https://vitejs.dev) [![Firebase](https://img.shields.io/badge/Firebase-Firestore-orange?logo=firebase)](https://firebase.google.com)

Aplicação de exemplo (desafio de vaga) para cadastro e gerenciamento de colaboradores (CRUD) usando **React**, **TypeScript**, **Vite**, **Material UI** e **Firebase Firestore**.

---

## ✅ Funcionalidades principais

- 📋 Listagem de colaboradores
- ➕ Criação de colaborador com formulário multi-step
- ✏️ Edição inline de dados do colaborador (modal)
- 🗑️ Exclusão de colaborador com confirmação
- 🧠 Validação básica de formulário (nome, email, departamento)
- 🌈 UI usando Material UI (MUI)
- ⚡ Back-end serverless usando Firestore

---

## 🛠️ Tecnologias usadas

- **React 19** (Hooks + Router)
- **TypeScript**
- **Vite** (build + dev server)
- **Material UI** (`@mui/material`, `@mui/icons-material`)
- **Firebase Firestore** para persistência de dados
- **React Router v7** para navegação

---

## 🚀 Começando (local)

### 1) Instalar dependências

```bash
npm install
```

### 2) Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com as suas credenciais do Firebase:

```ini
VITE_FIREBASE_API_KEY=YOUR_API_KEY
VITE_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID=YOUR_APP_ID
```

> 💡 Utilize um projeto Firebase com Firestore habilitado.

### 3) Iniciar o servidor de desenvolvimento

```bash
npm run dev
```

Abra http://localhost:5173 no navegador.

---

## 🧪 Scripts úteis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento (HMR) |
| `npm run build` | Gera build de produção (`dist/`) |
| `npm run preview` | Roda o build localmente (preview) |
| `npm run lint` | Executa o ESLint no projeto |

---

## 🗂️ Estrutura do projeto

```
src/
  ├─ components/         # Componentes reutilizáveis (tabela, modais, stepper)
  ├─ pages/              # Páginas (listagem e formulário)
  ├─ services/           # Conexão com Firestore (CRUD de colaboradores)
  ├─ layout/             # Layout (barra lateral, topo)
  ├─ firebase/           # Configuração do Firebase
  └─ types/              # Tipos TypeScript (Employee)
```

---

## 🔧 Observações

- A coleção usada no Firestore é `employees`.
- O projeto usa `import.meta.env.*` para acessar as variáveis de ambiente.
- Caso queira alterar o layout/tokens de estilo, edite `src/theme.ts`.

---

## 📌 Próximos passos (opcional)

- Adicionar autenticação (Firebase Auth).
- Melhorar validação de formulário com `react-hook-form` ou `zod`.
- Adicionar paginação/ordenção na tabela.
- Adicionar buscas e filtro por departamento.

---

Se precisar de ajuda para configurar o Firebase ou expandir a aplicação, me avise! 🔧
