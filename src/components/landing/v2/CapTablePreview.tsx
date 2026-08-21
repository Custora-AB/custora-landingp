import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const holders = [
  { name: "Founders", shares: "4,200,000", pct: 42, tone: "bg-accent" },
  { name: "Nordic Ventures II", shares: "2,600,000", pct: 26, tone: "bg-accent/70" },
  { name: "Angel syndicate", shares: "1,700,000", pct: 17, tone: "bg-accent/45" },
  { name: "Option pool", shares: "1,500,000", pct: 15, tone: "bg-accent/25" },
];

/**
 * Stylised product surface for the hero — a share register as Custora renders it.
 * Purely decorative: hidden from assistive tech so the hero copy carries the meaning.
 */
export function CapTablePreview() {
  return (
    <div aria-hidden className="relative select-none">
      <div className="absolute -inset-6 rounded-[2rem] bg-accent/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative rounded-2xl border border-white/10 bg-navy-light/80 shadow-2xl backdrop-blur"
      >
        <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="ml-3 font-mono text-[11px] tracking-wide text-white/40">
            app.custora.se / register
          </span>
        </div>

        <div className="p-5 sm:p-6">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.14em] text-white/40">
                Nordkap Holding AB
              </p>
              <p className="mt-1 text-lg font-semibold text-white">Share register</p>
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300">
              <ShieldCheck className="h-3.5 w-3.5" />
              Reconciled
            </div>
          </div>

          <div className="space-y-3">
            {holders.map((h, i) => (
              <motion.div
                key={h.name}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.55 + i * 0.12 }}
              >
                <div className="mb-1.5 flex items-baseline justify-between gap-3">
                  <span className="truncate text-sm text-white/85">{h.name}</span>
                  <span className="shrink-0 font-mono text-xs text-white/45">{h.shares}</span>
                  <span className="w-10 shrink-0 text-right text-sm font-semibold text-white">
                    {h.pct}%
                  </span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className={`h-full rounded-full ${h.tone}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${h.pct}%` }}
                    transition={{ duration: 0.8, delay: 0.65 + i * 0.12, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
            {[
              { label: "Shares issued", value: "10,000,000" },
              { label: "Holders", value: "38" },
              { label: "Entities", value: "4" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.1 + i * 0.1 }}
              >
                <p className="font-mono text-sm text-white">{s.value}</p>
                <p className="mt-0.5 text-[11px] text-white/40">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="absolute -bottom-5 -left-4 hidden rounded-xl border border-white/10 bg-navy px-4 py-3 shadow-xl sm:block"
      >
        <p className="text-[11px] uppercase tracking-[0.14em] text-white/40">Audit log</p>
        <p className="mt-1 text-xs text-white/80">
          Transfer recorded · 120,000 shares
        </p>
      </motion.div>
    </div>
  );
}
