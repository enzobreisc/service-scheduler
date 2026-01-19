import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function SchedulerLayout() {
  return (
    <div className="flex min-h-screen bg-zinc-50">
      <Sidebar />
      <main className="flex-1">
        <header className="h-16 bg-white border-b border-zinc-200 flex items-center px-6 justify-between">
          <span className="text-sm font-medium text-zinc-500">
            Service Scheduler
          </span>
        </header>
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
