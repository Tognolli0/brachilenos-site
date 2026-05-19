"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import type { Dictionary } from "@/lib/dictionaries";
import { createWhatsAppUrl } from "@/lib/conversion";

type Props = {
  dict: Dictionary;
};

export function CommercialLeadForm({ dict }: Props) {
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [whatsappHref, setWhatsappHref] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    const whatsappUrl = createWhatsAppUrl(createLeadMessage(payload));

    setWhatsappHref(whatsappUrl);
    setSubmitting(true);

    try {
      localStorage.setItem(
        "brachilenos.clientLeads",
        JSON.stringify([
          ...JSON.parse(localStorage.getItem("brachilenos.clientLeads") || "[]"),
          { ...payload, createdAt: new Date().toISOString() },
        ]),
      );

      window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Lead request failed");
      }

      setStatus(dict.forms.successClient);
      form.reset();
    } catch {
      setStatus(dict.forms.error);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="min-w-0 border border-[#d9e0e6] bg-white p-4 shadow-[0_12px_32px_rgba(7,31,59,0.06)] sm:p-6">
      <div className="mb-5 border border-[#d9e0e6] bg-[#f8faf9] p-4">
        <p className="text-xs font-black uppercase tracking-[0.14em] text-[#b88228]">Atendimento comercial</p>
        <p className="mt-2 text-sm font-semibold leading-6 text-[#31465a]">
          Preencha o diagnóstico e o WhatsApp será aberto com a mensagem organizada para envio.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={dict.forms.name} name="name" autoComplete="name" required />
        <Field label="WhatsApp" name="whatsapp" type="tel" autoComplete="tel" required />
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
        <WhatsAppIcon className="h-5 w-5" aria-hidden />
        <span>{dict.forms.clientSubmit}</span>
      </button>
      {whatsappHref ? (
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm font-extrabold text-[#071f3b] hover:text-[#b88228]">
          Abrir WhatsApp novamente
          <ArrowRight className="h-4 w-4" aria-hidden />
        </a>
      ) : null}
      <p className="mt-3 min-h-6 text-sm font-bold text-[#0f6f43]" aria-live="polite">
        {status}
      </p>
    </form>
  );
}

function createLeadMessage(payload: Record<string, FormDataEntryValue>) {
  const value = (key: string) => String(payload[key] || "").trim();

  return [
    "Olá! Quero solicitar uma análise da BRACHILENOS.",
    "",
    `Nome: ${value("name")}`,
    `WhatsApp: ${value("whatsapp")}`,
    `E-mail: ${value("email")}`,
    `País: ${value("country")}`,
    `Necessidade: ${value("need")}`,
    "",
    `Mensagem: ${value("message") || "Não informado"}`,
  ].join("\n");
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
