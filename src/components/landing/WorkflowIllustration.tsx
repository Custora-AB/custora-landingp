import { motion } from "framer-motion";
import { FileSpreadsheet, ClipboardCheck, UserCheck, FolderLock } from "lucide-react";

const nodes = [
  { id: 0, label: "Share Register", icon: FileSpreadsheet, x: 50, y: 20 },
  { id: 1, label: "Reporting", icon: ClipboardCheck, x: 200, y: 80 },
  { id: 2, label: "KYC", icon: UserCheck, x: 50, y: 180 },
  { id: 3, label: "Data Room", icon: FolderLock, x: 200, y: 240 },
];

const connections = [
  { from: 0, to: 1 },
  { from: 0, to: 2 },
  { from: 1, to: 3 },
  { from: 2, to: 3 },
  { from: 1, to: 2 },
];

function getNodeCenter(node: typeof nodes[0]) {
  return { cx: node.x + 60, cy: node.y + 28 };
}

export function WorkflowIllustration({ animate }: { animate: boolean }) {
  return (
    <div className="w-full aspect-[4/3] relative">
      <svg
        viewBox="0 0 320 300"
        fill="none"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Connection lines */}
        {connections.map((conn, i) => {
          const from = getNodeCenter(nodes[conn.from]);
          const to = getNodeCenter(nodes[conn.to]);
          const midX = (from.cx + to.cx) / 2;
          const midY = (from.cy + to.cy) / 2;
          const ctrlX = midX + (i % 2 === 0 ? 20 : -20);
          const ctrlY = midY;
          const d = `M ${from.cx} ${from.cy} Q ${ctrlX} ${ctrlY} ${to.cx} ${to.cy}`;
          const length = 300;

          return (
            <motion.path
              key={`${conn.from}-${conn.to}`}
              d={d}
              stroke="hsl(var(--border))"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray={length}
              strokeDashoffset={length}
              animate={animate ? { strokeDashoffset: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.8 + i * 0.2, ease: "easeInOut" }}
            />
          );
        })}

        {/* Animated dots traveling along connections */}
        {connections.map((conn, i) => {
          const from = getNodeCenter(nodes[conn.from]);
          const to = getNodeCenter(nodes[conn.to]);

          return (
            <motion.circle
              key={`dot-${conn.from}-${conn.to}`}
              r="3"
              fill="hsl(var(--accent))"
              initial={{ cx: from.cx, cy: from.cy, opacity: 0 }}
              animate={
                animate
                  ? {
                      cx: [from.cx, to.cx],
                      cy: [from.cy, to.cy],
                      opacity: [0, 1, 1, 0],
                    }
                  : {}
              }
              transition={{
                duration: 2,
                delay: 2 + i * 0.4,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 3,
              }}
            />
          );
        })}
      </svg>

      {/* Node cards positioned absolutely */}
      {nodes.map((node, i) => (
        <motion.div
          key={node.id}
          className="absolute flex items-center gap-2.5 bg-background border border-border rounded-lg px-4 py-2.5 shadow-sm"
          style={{ left: `${(node.x / 320) * 100}%`, top: `${(node.y / 300) * 100}%` }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={animate ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.3 + i * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
            <node.icon className="w-4 h-4 text-accent" />
          </div>
          <span className="text-xs font-medium text-foreground whitespace-nowrap">{node.label}</span>
        </motion.div>
      ))}
    </div>
  );
}
