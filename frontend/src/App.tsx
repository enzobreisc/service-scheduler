import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Calendar, Users, Settings, LayoutDashboard } from "lucide-react";

function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p className="text-zinc-600">
        Bem-vindo ao Service Scheduler. Comece configurando seus serviços.
      </p>
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-zinc-200 h-screen flex flex-col sticky top-0">
      <div className="p-6 border-b border-zinc-200">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Calendar className="text-blue-600" />
          Scheduler
        </h2>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        <Link
          to="/"
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-100 text-zinc-700 font-medium transition-colors"
        >
          <LayoutDashboard size={20} />
          Dashboard
        </Link>
        <Link
          to="/users"
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-100 text-zinc-700 font-medium transition-colors"
        >
          <Users size={20} />
          Usuários
        </Link>
        <Link
          to="/settings"
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-100 text-zinc-700 font-medium transition-colors"
        >
          <Settings size={20} />
          Configurações
        </Link>
      </nav>
      <div className="p-4 border-t border-zinc-200 text-xs text-zinc-400">
        v0.1.0
      </div>
    </aside>
  );
}

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-zinc-50">
        <Sidebar />
        <main className="flex-1">
          <header className="h-16 bg-white border-b border-zinc-200 flex items-center px-6 justify-between">
            <span className="text-sm font-medium text-zinc-500">
              Service Scheduler
            </span>
            <div className="flex items-center gap-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                Novo Agendamento
              </button>
            </div>
          </header>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route
              path="/users"
              element={<div className="p-6">Gerenciamento de Usuários</div>}
            />
            <Route
              path="/settings"
              element={<div className="p-6">Configurações do Sistema</div>}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
