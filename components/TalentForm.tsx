"use client";

import { Send } from "lucide-react";
import { useState } from "react";
import type { Dictionary } from "@/lib/dictionaries";

type Props = {
  dict: Dictionary;
};

export function TalentForm({ dict }: Props) {
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload: Record<string, FormDataEntryValue | { name: string; size: number; type: string } | string> = {};
    setSubmitting(true);

    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        payload[key] = value.name ? { name: value.name, size: value.size, type: value.type } : "";
      } else {
        payload[key] = value;
      }
    }

    const groupByInterest: Record<string, string> = {
      [dict.forms.interests[0]]: "candidatos",
      [dict.forms.interests[1]]: "prestadores",
    };

    payload.group = groupByInterest[String(payload.interest)] || "candidatos";

    try {
      localStorage.setItem(
        "brachilenos.talentBank",
        JSON.stringify([
          ...JSON.parse(localStorage.getItem("brachilenos.talentBank") || "[]"),
          { ...payload, createdAt: new Date().toISOString() },
        ]),
      );

      const response = await fetch("/api/talents", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Talent request failed");
      }

      setStatus(dict.forms.successTalent);
      form.reset();
    } catch {
      setStatus(dict.forms.error);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="min-w-0 border border-[#d9e0e6] bg-white p-4 shadow-[0_12px_32px_rgba(7,31,59,0.06)] sm:p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={dict.forms.name} name="name" autoComplete="name" required />
        <Field label="WhatsApp" name="whatsapp" type="tel" autoComplete="tel" required />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="E-mail" name="email" type="email" autoComplete="email" required />
        <Select label={dict.forms.country} name="country" options={["Brasil", "Chile", dict.forms.other]} placeholder={dict.forms.choose} required />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={dict.forms.city} name="city" />
        <Field label={dict.forms.education} name="education" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={dict.forms.registry} name="registry" />
        <Select label={dict.forms.area} name="area" options={[...dict.forms.talentAreas]} placeholder={dict.forms.choose} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={dict.forms.experience} name="experience" />
        <Field label="LinkedIn" name="linkedin" type="url" />
      </div>
      <Select label={dict.forms.interest} name="interest" options={[...dict.forms.interests]} placeholder={dict.forms.choose} required />
      <label className="mb-4 grid gap-2 text-sm font-extrabold text-[#071f3b]">
        {dict.forms.portfolio}
        <input
          name="portfolio"
          type="file"
          accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
          className="focus-ring min-w-0 w-full border border-[#cbd5df] bg-white px-3 py-3 font-normal text-[#102235] file:mr-3 file:border-0 file:bg-[#071f3b] file:px-3 file:py-2 file:text-sm file:font-bold file:text-white"
        />
      </label>
      <label className="mb-4 grid gap-2 text-sm font-extrabold text-[#071f3b]">
        {dict.forms.message}
        <textarea
          name="message"
          rows={4}
          placeholder={dict.forms.talentPlaceholder}
          className="focus-ring min-h-32 min-w-0 w-full border border-[#cbd5df] bg-white px-3 py-3 font-normal text-[#102235]"
        />
      </label>
      <button
        type="submit"
        disabled={submitting}
        className="focus-ring inline-flex min-h-12 w-full items-center justify-center gap-2 border border-[#071f3b] bg-[#071f3b] px-5 text-center text-sm font-extrabold leading-tight text-white transition hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-wait disabled:opacity-70"
      >
        <Send className="h-5 w-5" />
        <span>{dict.forms.talentSubmit}</span>
      </button>
      <p className="mt-3 min-h-6 text-sm font-bold text-[#0f6f43]" aria-live="polite">
        {status}
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="mb-4 grid gap-2 text-sm font-extrabold text-[#071f3b]">
      {label}
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
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
