# Service Scheduler 🗓️

Sistema de agendamento online para pequenos prestadores de serviços, desenvolvido como projeto de portfólio full-stack.
O objetivo é substituir agendamentos feitos via WhatsApp por uma solução simples, organizada e profissional.

---

## 🚀 Tecnologias

### Backend

- **Laravel 11+**
- **SQLite** (Banco de dados local rápido)
- **Sanctum** (Autenticação via Token/SPA)

### Frontend

- **React 19**
- **Vite 6**
- **Tailwind CSS v4** (Estilização de alta performance)
- **Lucide React** (Ícones)
- **React Router Dom** (Navegação)
- **Axios** (Integração com API)

---

## 💻 Como Rodar o Projeto

### Pré-requisitos

- PHP 8.2+
- Composer
- Node.js (v18+) e NPM

### 1. Configurar o Backend

```bash
cd backend
composer install
npm install
php artisan key:generate
php artisan migrate
php artisan serve
```

O servidor estará rodando em `http://localhost:8000`.

### 2. Configurar o Frontend

```bash
cd frontend
npm install
npm run dev
```

A aplicação estará rodando em `http://localhost:5173`.

---

## 🎯 Problema & Solução

### O Problema

Pequenos prestadores enfrentam conflitos de horários, falta de organização e comunicação ineficiente.

### A Solução

Uma aplicação web onde o prestador configura serviços e disponibilidade, e o cliente agenda online de forma autônoma.

---

## 🧠 Funcionalidades Atuais & Planejadas

- [x] Configuração inicial Backend/Frontend.
- [x] Layout base com Sidebar e Dashboard.
- [x] Integração base via Axios.
- [ ] Autenticação de Usuário (Login/Register).
- [ ] Gestão de Serviços (CRUD).
- [ ] Agenda de Disponibilidade.
- [ ] Fluxo de Agendamento do Cliente.

---

## 🧱 Estrutura do Projeto

- `/backend`: API Laravel.
- `/frontend`: Aplicação React (Vite).
