"use client";

import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import type { Dictionary } from "@/lib/dictionaries";
import { buildCommercialLeadMessage, createWhatsAppUrl } from "@/lib/conversion";

type Props = {
  forms: Dictionary["forms"];
};

export function CommercialLeadForm({ forms }: Props) {
  const pathname = usePathname();
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [whatsappHref, setWhatsappHref] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    const whatsappUrl = createWhatsAppUrl(buildCommercialLeadMessage(payload));

    setWhatsappHref(whatsappUrl);
    setSubmitting(true);

    try {
      saveLocalLead(payload);

      window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Lead request failed");
      }

      setStatus(forms.successClient);
      form.reset();
    } catch {
      setStatus(forms.error);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="min-w-0 border border-[#d9e0e6] bg-white p-4 shadow-[0_12px_32px_rgba(7,31,59,0.06)] sm:p-6">
      <div className="mb-5 border border-[#d9e0e6] bg-[#f8faf9] p-4">
        <p className="text-xs font-black uppercase tracking-[0.14em] text-[#b88228]">{forms.commercialEyebrow}</p>
        <p className="mt-2 text-sm font-semibold leading-6 text-[#31465a]">{forms.commercialText}</p>
      </div>
      <input type="hidden" name="sourcePath" value={pathname || ""} />
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={forms.name} name="name" autoComplete="name" required />
        <Field label="WhatsApp" name="whatsapp" type="tel" autoComplete="tel" required />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="E-mail" name="email" type="email" autoComplete="email" required />
        <Select label={forms.clientProfile} name="profile" options={[...forms.clientProfileOptions]} placeholder={forms.choose} required />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Select label={forms.clientMarket} name="market" options={[...forms.clientMarketOptions]} placeholder={forms.choose} required />
        <Select label={forms.country} name="country" options={["Brasil", "Chile", forms.other]} placeholder={forms.choose} required />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={forms.city} name="city" autoComplete="address-level2" />
        <Select label={forms.clientUrgency} name="urgency" options={[...forms.clientUrgencyOptions]} placeholder={forms.choose} />
      </div>
      <Select label={forms.clientNeed} name="need" options={[...forms.clientOptions]} placeholder={forms.choose} required />
      <label className="mb-4 grid gap-2 text-sm font-extrabold text-[#071f3b]">
        {forms.message}
        <textarea
          name="message"
          rows={4}
          placeholder={forms.clientPlaceholder}
          className="focus-ring min-h-32 min-w-0 w-full border border-[#cbd5df] bg-white px-3 py-3 font-normal text-[#102235]"
        />
      </label>
      <label className="mb-5 flex gap-3 border border-[#d9e0e6] bg-[#f8faf9] p-3 text-sm font-semibold leading-6 text-[#31465a]">
        <input type="checkbox" name="privacyConsent" required className="mt-1 h-4 w-4 shrink-0 accent-[#071f3b]" />
        <span>{forms.privacyConsent}</span>
      </label>
      <button
        type="submit"
        disabled={submitting}
        className="focus-ring inline-flex min-h-12 w-full items-center justify-center gap-2 border border-[#071f3b] bg-[#071f3b] px-5 text-center text-sm font-extrabold leading-tight text-white transition hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-wait disabled:opacity-70"
      >
        <WhatsAppIcon className="h-5 w-5" aria-hidden />
        <span>{forms.clientSubmit}</span>
      </button>
      {whatsappHref ? (
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm font-extrabold text-[#071f3b] hover:text-[#b88228]">
          {forms.reopenWhatsapp}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </a>
      ) : null}
      <p className="mt-3 min-h-6 text-sm font-bold text-[#0f6f43]" role="status" aria-live="polite">
        {status}
      </p>
    </form>
  );
}

function saveLocalLead(payload: Record<string, FormDataEntryValue>) {
  const key = "brachilenos.clientLeads";
  const nextLead = { ...payload, createdAt: new Date().toISOString() };

  try {
    const stored = JSON.parse(localStorage.getItem(key) || "[]");
    const leads = Array.isArray(stored) ? stored : [];
    localStorage.setItem(key, JSON.stringify([...leads, nextLead]));
  } catch {
    localStorage.setItem(key, JSON.stringify([nextLead]));
  }
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
