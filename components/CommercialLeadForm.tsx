"use client";

import { Send } from "lucide-react";
import { useState } from "react";
import type { Dictionary } from "@/lib/dictionaries";

type Props = {
  dict: Dictionary;
};

export function CommercialLeadForm({ dict }: Props) {
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    setSubmitting(true);

    setStatus("");
    setStatusType("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Lead request failed");
      }

      saveLocalLead("brachilenos.clientLeads", payload);
      setStatus(dict.forms.successClient);
      setStatusType("success");
      form.reset();
    } catch {
      saveLocalLead("brachilenos.clientLeads", payload);
      setStatus(dict.forms.error);
      setStatusType("error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      aria-busy={submitting}
      className="min-w-0 border border-[#d9e0e6] bg-white p-4 shadow-[0_12px_32px_rgba(7,31,59,0.06)] sm:p-6"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={dict.forms.name} name="name" autoComplete="name" required />
        <Field label="WhatsApp" name="whatsapp" type="tel" autoComplete="tel" inputMode="tel" required />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="E-mail" name="email" type="email" autoComplete="email" required />
        <Select label={dict.forms.country} name="country" options={["Brasil", "Chile", dict.forms.other]} placeholder={dict.forms.choose} required />
      </div>
      <Select label={dict.forms.clientNeed} name="need" options={[...dict.forms.clientOptions]} placeholder={dict.forms.choose} required />
      <label className="mb-4 grid gap-2 text-sm font-extrabold text-[#071f3b]">
        {dict.forms.message}
        <textarea
          name="message"
          rows={4}
          placeholder={dict.forms.clientPlaceholder}
          className="focus-ring min-h-32 min-w-0 w-full border border-[#cbd5df] bg-white px-3 py-3 font-normal text-[#102235]"
        />
      </label>
      <button
        type="submit"
        disabled={submitting}
        className="focus-ring inline-flex min-h-12 w-full items-center justify-center gap-2 border border-[#071f3b] bg-[#071f3b] px-5 text-center text-sm font-extrabold leading-tight text-white transition hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-wait disabled:opacity-70"
      >
        <Send className="h-5 w-5" aria-hidden />
        <span>{submitting ? dict.forms.sending : dict.forms.clientSubmit}</span>
      </button>
      <p
        className={`mt-3 min-h-6 text-sm font-bold ${statusType === "error" ? "text-[#c91f28]" : "text-[#0f6f43]"}`}
        aria-live="polite"
      >
        {status}
      </p>
    </form>
  );
}

function saveLocalLead(key: string, payload: Record<string, FormDataEntryValue>) {
  try {
    const current = JSON.parse(localStorage.getItem(key) || "[]");
    localStorage.setItem(key, JSON.stringify([...current, { ...payload, createdAt: new Date().toISOString() }]));
  } catch {
    // Local fallback is best-effort only; form submission should not depend on browser storage.
  }
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  inputMode,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  required?: boolean;
}) {
  return (
    <label className="mb-4 grid gap-2 text-sm font-extrabold text-[#071f3b]">
      {label}
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        inputMode={inputMode}
        required={required}
        className="focus-ring h-12 min-w-0 w-full border border-[#cbd5df] bg-white px-3 font-normal text-[#102235]"
      />
    </label>
  );
}

function Select({
  label,
  name,
  options,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  placeholder: string;
  required?: boolean;
}) {
  return (
    <label className="mb-4 grid gap-2 text-sm font-extrabold text-[#071f3b]">
      {label}
      <select name={name} required={required} className="focus-ring h-12 min-w-0 w-full border border-[#cbd5df] bg-white px-3 font-normal text-[#102235]">
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}
