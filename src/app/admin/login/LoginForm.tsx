"use client";

import { useActionState } from "react";
import { loginAction } from "../auth-actions";

export default function LoginForm() {
  const [state, action, pending] = useActionState(loginAction, {
    error: "",
  } as { error: string });

  return (
    <form action={action} className="grid gap-4">
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-semibold text-ink-900 mb-1.5"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoFocus
          required
          placeholder="Enter team password"
          className="w-full rounded-xl border border-ink-900/15 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rain-500/40"
        />
      </div>
      {state?.error && (
        <p className="text-sm text-rain-700 bg-rain-50 rounded-lg px-3 py-2">
          {state.error}
        </p>
      )}
      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center justify-center rounded-full bg-rain-600 text-white font-display font-semibold px-6 py-3 hover:bg-rain-700 transition disabled:opacity-60"
      >
        {pending ? "Signing in…" : "Sign In"}
      </button>
    </form>
  );
}
