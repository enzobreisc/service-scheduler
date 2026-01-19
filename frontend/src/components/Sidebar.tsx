import { Link } from "react-router-dom";
import { Calendar, LayoutDashboard, Users, Settings } from "lucide-react";

export default function Sidebar() {
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
          to="/dashboard"
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
