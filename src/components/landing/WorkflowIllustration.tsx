import { motion } from "framer-motion";
import { FileSpreadsheet, ClipboardCheck, UserCheck, FolderLock } from "lucide-react";

const nodes = [
  { id: 0, label: "Share Register", icon: FileSpreadsheet, x: 120, y: 15 },
  { id: 1, label: "Reporting", icon: ClipboardCheck, x: 240, y: 110 },
  { id: 2, label: "KYC", icon: UserCheck, x: 0, y: 110 },
  { id: 3, label: "Data Room", icon: FolderLock, x: 120, y: 205 },
];

const connections: [number, number][] = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 3],
  [0, 3],
];

function getNodeCenter(node: (typeof nodes)[0]) {
  return { cx: node.x + 65, cy: node.y + 22 };
}

export function WorkflowIllustration({ animate }: { animate: boolean }) {
  return (
    <div className="w-full aspect-square max-w-[420px] mx-auto relative">
      <svg
        viewBox="-10 -10 380 280"
        fill="none"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {connections.map((conn, i) => {
          const from = getNodeCenter(nodes[conn[0]]);
          const to = getNodeCenter(nodes[conn[1]]);
          // Curved path
          const dx = to.cx - from.cx;
          const dy = to.cy - from.cy;
          const cx1 = from.cx + dx * 0.5 + (i % 2 === 0 ? 15 : -15);
          const cy1 = from.cy + dy * 0.5;
          const d = `M ${from.cx} ${from.cy} Q ${cx1} ${cy1} ${to.cx} ${to.cy}`;

          return (
            <motion.path
              key={`line-${conn[0]}-${conn[1]}`}
              d={d}
              stroke="hsl(var(--border))"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray={400}
              strokeDashoffset={400}
              animate={animate ? { strokeDashoffset: 0 } : {}}
              transition={{ duration: 1, delay: 0.6 + i * 0.15, ease: "easeInOut" }}
            />
          );
        })}

        {/* Traveling dots */}
        {connections.map((conn, i) => {
          const from = getNodeCenter(nodes[conn[0]]);
          const to = getNodeCenter(nodes[conn[1]]);
          return (
            <motion.circle
              key={`dot-${conn[0]}-${conn[1]}`}
              r="2.5"
              fill="hsl(var(--accent))"
              initial={{ cx: from.cx, cy: from.cy, opacity: 0 }}
              animate={
                animate
                  ? {
                      cx: [from.cx, to.cx],
                      cy: [from.cy, to.cy],
                      opacity: [0, 0.8, 0.8, 0],
                    }
                  : {}
              }
              transition={{
                duration: 2.5,
                delay: 2 + i * 0.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 4,
              }}
            />
          );
        })}
      </svg>

      {/* Node cards */}
      {nodes.map((node, i) => (
        <motion.div
          key={node.id}
          className="absolute flex items-center gap-2.5 bg-background border border-border rounded-lg px-4 py-2.5 shadow-sm"
          style={{
            left: `${(node.x / 360) * 100}%`,
            top: `${(node.y / 260) * 100}%`,
          }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={animate ? { opacity: 1, scale: 1 } : {}}
          transition={{
            duration: 0.45,
            delay: 0.2 + i * 0.12,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
        >
          <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
            <node.icon className="w-4 h-4 text-accent" />
          </div>
          <span className="text-xs font-medium text-foreground whitespace-nowrap">
            {node.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
