import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  Shield,
} from "lucide-react";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Calendar className="text-blue-600 w-8 h-8" />
          <span className="text-2xl font-bold tracking-tight text-zinc-900">
            Scheduler
          </span>
        </div>
        <div className="flex items-center gap-8">
          <a
            href="#features"
            className="text-sm font-medium text-zinc-600 hover:text-blue-600 transition-colors"
          >
            Funcionalidades
          </a>
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-zinc-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-zinc-800 transition-all active:scale-95 shadow-lg shadow-zinc-200"
          >
            Acessar Dashboard
          </button>
        </div>
      </nav>

      <section className="relative px-8 pt-20 pb-32 max-w-7xl mx-auto text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-50/50 rounded-full blur-3xl -z-10" />

        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-zinc-900 mb-8">
          Agende serviços com <br />
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            perfeição absoluta.
          </span>
        </h1>

        <p className="text-xl text-zinc-600 max-w-2xl mx-auto mb-12 leading-relaxed">
          A plataforma mais elegante e eficiente para gerenciar seus
          agendamentos, clientes e equipe em um único lugar.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigate("/dashboard")}
            className="group flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-blue-700 transition-all active:scale-95 shadow-xl shadow-blue-200"
          >
            Começar Agora Gratis
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="bg-white text-zinc-900 border border-zinc-200 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-zinc-50 transition-all">
            Ver Demo
          </button>
        </div>

        <div className="mt-24 p-4 bg-zinc-900/5 rounded-[2.5rem] border border-zinc-200">
          <div className="bg-white rounded-[1.5rem] shadow-2xl overflow-hidden border border-zinc-200 aspect-video flex items-center justify-center">
            <div className="text-zinc-400 font-medium">Dashboard Preview</div>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="px-8 py-32 bg-zinc-50 border-y border-zinc-200"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-zinc-900 mb-4">
              Por que escolher o Scheduler?
            </h2>
            <p className="text-zinc-600">
              Construído para escalar o seu negócio de serviços.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Clock className="text-blue-600 w-6 h-6" />,
                title: "Tempo Real",
                desc: "Sincronização instantânea de todos os seus agendamentos.",
              },
              {
                icon: <Shield className="text-blue-600 w-6 h-6" />,
                title: "Segurança Total",
                desc: "Seus dados protegidos com criptografia de ponta a ponta.",
              },
              {
                icon: <CheckCircle2 className="text-blue-600 w-6 h-6" />,
                title: "User-Friendly",
                desc: "Interface intuitiva que sua equipe vai adorar usar.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="p-8 bg-white rounded-3xl border border-zinc-200 hover:shadow-xl transition-shadow group"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">
                  {f.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="px-8 py-12 max-w-7xl mx-auto text-center border-t border-zinc-100 mt-20">
        <p className="text-zinc-500 text-sm">
          &copy; 2026 Scheduler. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
