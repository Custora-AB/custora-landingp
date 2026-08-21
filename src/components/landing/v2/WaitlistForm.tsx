import { useId, useState } from "react";
import { Check, Loader2 } from "lucide-react";

interface WaitlistFormProps {
  /** Centres the field and drops the hero's left-edge text alignment offset. */
  centered?: boolean;
}

export function WaitlistForm({ centered = false }: WaitlistFormProps) {
  const inputId = useId();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Waitlist signup",
          email,
          message: `Waitlist signup from ${email}.`,
        }),
      });

      const data = (await response.json()) as { ok: boolean; error?: string };
      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("done");
      setEmail("");
    } catch (err) {
      setStatus("idle");
      setError(err instanceof Error ? err.message : "Unexpected error, please try again.");
    }
  };

  if (status === "done") {
    return (
      <div className={centered ? "mx-auto max-w-lg" : "max-w-lg"}>
        <div className={`flex items-center gap-3 rounded-full bg-white p-2 pl-6 shadow-[0_8px_30px_rgba(5,28,44,0.08)] ring-1 ring-black/5${centered ? "" : " lg:-ml-6"}`}>
          <Check className="h-5 w-5 shrink-0 text-black" />
          <p className="py-3 text-base text-black">You're on the list — we'll be in touch.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={centered ? "mx-auto max-w-lg" : "max-w-lg"}>
      <form
        onSubmit={handleSubmit}
        className={`flex items-center gap-2 rounded-full bg-white p-2 shadow-[0_8px_30px_rgba(5,28,44,0.08)] ring-1 ring-black/5 focus-within:ring-black/20${centered ? "" : " lg:-ml-6"}`}
      >
        <label htmlFor={inputId} className="sr-only">
          Email address
        </label>
        <input
          id={inputId}
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          className="min-w-0 flex-1 bg-transparent px-4 py-3 text-base text-black outline-none placeholder:text-muted-foreground"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-black px-6 py-3 text-base font-medium text-white transition-colors hover:bg-black/85 disabled:opacity-70"
        >
          {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
          Join the waitlist
        </button>
      </form>

      {error && (
        <p className="mt-3 text-center text-sm text-destructive">{error}</p>
      )}
    </div>
  );
}
