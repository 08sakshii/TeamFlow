import React from 'react';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-slate-100 p-6">
      <main className="w-full max-w-lg p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl space-y-6">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-xl bg-indigo-600 flex items-center justify-center font-bold text-xl text-white shadow-md">
            TF
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white">TeamFlow</h1>
            <p className="text-sm text-slate-400">Baseline Foundation</p>
          </div>
        </div>

        <p className="text-slate-300 text-sm leading-relaxed">
          Welcome to <span className="font-semibold text-indigo-400">TeamFlow</span>. The baseline architecture setup is active and running cleanly.
        </p>

        <div className="grid grid-cols-2 gap-3 pt-2">
          <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/50">
            <span className="block text-xs text-slate-400 font-medium">Frontend</span>
            <span className="text-sm font-semibold text-emerald-400">React + TS + Vite</span>
          </div>
          <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/50">
            <span className="block text-xs text-slate-400 font-medium">Styling</span>
            <span className="text-sm font-semibold text-cyan-400">Tailwind CSS v4</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
