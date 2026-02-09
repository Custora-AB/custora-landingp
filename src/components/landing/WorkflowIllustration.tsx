import { motion } from "framer-motion";
import { FileSpreadsheet, ClipboardCheck, UserCheck, FolderLock } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const nodes = [
  { id: 0, label: "Share Register", icon: FileSpreadsheet, x: 150, y: 10 },
  { id: 1, label: "Reporting", icon: ClipboardCheck, x: 290, y: 140 },
  { id: 2, label: "Data Room", icon: FolderLock, x: 150, y: 270 },
  { id: 3, label: "KYC", icon: UserCheck, x: 10, y: 140 },
];

const connections: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 0],
  [0, 2],
];

const DOT_DURATION = 2.5; // seconds
const DOT_START_DELAY = 3; // seconds after animate=true
const DOT_STAGGER = 0.5; // seconds between each dot

function getNodeCenter(node: (typeof nodes)[0]) {
  return { cx: node.x + 65, cy: node.y + 22 };
}

export function WorkflowIllustration({ animate }: { animate: boolean }) {
  const [glowingNodes, setGlowingNodes] = useState<Set<number>>(new Set());
  const [visibleNodes, setVisibleNodes] = useState<Set<number>>(new Set([0])); // source node starts visible

  const triggerGlow = useCallback((nodeId: number) => {
    // Make node visible (pop up) and glow
    setVisibleNodes((prev) => new Set(prev).add(nodeId));
    setGlowingNodes((prev) => new Set(prev).add(nodeId));
    setTimeout(() => {
      setGlowingNodes((prev) => {
        const next = new Set(prev);
        next.delete(nodeId);
        return next;
      });
    }, 600);
  }, []);

  useEffect(() => {
    if (!animate) return;

    const timers: ReturnType<typeof setTimeout>[] = [];

    connections.forEach((conn, i) => {
      const arrivalTime = (DOT_START_DELAY + i * DOT_STAGGER + DOT_DURATION - 0.4) * 1000;
      const targetNode = conn[1];
      timers.push(setTimeout(() => triggerGlow(targetNode), arrivalTime));
    });

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [animate, triggerGlow]);

  return (
    <div className="w-full aspect-square max-w-[520px] mx-auto relative">
      <svg viewBox="-10 -10 460 380" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Line glow filter */}
          <filter id="line-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {connections.map((conn, i) => {
          const from = getNodeCenter(nodes[conn[0]]);
          const to = getNodeCenter(nodes[conn[1]]);
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

        {/* Glowing connection lines - synced with traveling dots */}
        {connections.map((conn, i) => {
          const from = getNodeCenter(nodes[conn[0]]);
          const to = getNodeCenter(nodes[conn[1]]);
          const dx = to.cx - from.cx;
          const dy = to.cy - from.cy;
          const cx1 = from.cx + dx * 0.5 + (i % 2 === 0 ? 15 : -15);
          const cy1 = from.cy + dy * 0.5;
          const d = `M ${from.cx} ${from.cy} Q ${cx1} ${cy1} ${to.cx} ${to.cy}`;

          return (
            <motion.path
              key={`glow-${conn[0]}-${conn[1]}`}
              d={d}
              stroke="hsl(var(--accent))"
              strokeWidth="3"
              fill="none"
              filter="url(#line-glow)"
              strokeDasharray={400}
              strokeDashoffset={400}
              initial={{ opacity: 0 }}
              animate={
                animate
                  ? {
                      opacity: [0, 0.6, 0.6, 0],
                      strokeDashoffset: [400, 0],
                    }
                  : {}
              }
              transition={{
                duration: DOT_DURATION,
                delay: DOT_START_DELAY + i * DOT_STAGGER,
                ease: "easeInOut",
              }}
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
                duration: DOT_DURATION,
                delay: DOT_START_DELAY + i * DOT_STAGGER,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </svg>

      {/* Node cards */}
      {nodes.map((node, i) => {
        const isGlowing = glowingNodes.has(node.id);
        const isVisible = visibleNodes.has(node.id);
        return (
          <motion.div
            key={node.id}
            className="absolute flex items-center gap-2.5 rounded-xl px-4 py-2.5 bg-primary"
            style={{
              left: `${(node.x / 440) * 100}%`,
              top: `${(node.y / 360) * 100}%`,
              border: `1px solid ${isGlowing ? "hsl(var(--accent))" : "hsla(var(--primary-foreground) / 0.15)"}`,
              boxShadow: isGlowing
                ? "0 0 16px 4px hsla(var(--accent) / 0.25), 0 0 4px 1px hsla(var(--accent) / 0.15)"
                : "0 1px 4px 0 rgba(5, 28, 44, 0.15)",
            }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={isVisible && animate ? { opacity: 1, scale: isGlowing ? 1.08 : 1 } : { opacity: 0, scale: 0.6 }}
            transition={{
              duration: 0.4,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
          >
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300"
              style={{
                backgroundColor: isGlowing
                  ? "hsla(var(--primary-foreground) / 0.25)"
                  : "hsla(var(--primary-foreground) / 0.15)",
              }}
            >
              <node.icon
                className="w-4 h-4 text-primary-foreground transition-colors duration-300"
                style={{
                  filter: isGlowing ? "brightness(1.3)" : "none",
                }}
              />
            </div>
            <span className="text-xs font-medium text-primary-foreground whitespace-nowrap">{node.label}</span>
          </motion.div>
        );
      })}
    </div>
  );
}
