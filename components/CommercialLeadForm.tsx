"use client";

import { AlertCircle, CheckCircle2, Send } from "lucide-react";
import { useMemo, useState } from "react";
import type { Dictionary } from "@/lib/dictionaries";

type Props = {
  dict: Dictionary;
};

type FormValues = {
  name: string;
  whatsapp: string;
  email: string;
  country: string;
  need: string;
  message: string;
};

type FieldName = keyof FormValues;
type Errors = Partial<Record<FieldName, string>>;

const initialValues: FormValues = {
  name: "",
  whatsapp: "",
  email: "",
  country: "",
  need: "",
  message: "",
};

export function CommercialLeadForm({ dict }: Props) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");
  const [submitting, setSubmitting] = useState(false);

  const labels = useMemo(
    () => ({
      name: dict.forms.name,
      whatsapp: "WhatsApp",
      email: "E-mail",
      country: dict.forms.country,
      need: dict.forms.clientNeed,
      message: dict.forms.message,
    }),
    [dict],
  );

  const errors = validate(values, dict);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

    const nextErrors = validate(values, dict);
    setTouched({ name: true, whatsapp: true, email: true, country: true, need: true, message: true });

    if (Object.keys(nextErrors).length > 0) {
      setStatus("");
      setStatusType("");
      event.currentTarget.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
      return;
    }

    setSubmitting(true);
    setStatus("");
    setStatusType("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Lead request failed");
      }

      saveLocalLead("brachilenos.clientLeads", values);
      setStatus(dict.forms.successClient);
      setStatusType("success");
      setValues(initialValues);
      setTouched({});
    } catch {
      saveLocalLead("brachilenos.clientLeads", values);
      setStatus(dict.forms.error);
      setStatusType("error");
    } finally {
      setSubmitting(false);
    }
  }

  function updateField(name: FieldName, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
  }

  function markTouched(name: FieldName) {
    setTouched((current) => ({ ...current, [name]: true }));
  }

  return (
    <form onSubmit={onSubmit} aria-busy={submitting} noValidate className="form-panel">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={labels.name} name="name" value={values.name} error={touched.name ? errors.name : ""} onChange={updateField} onBlur={markTouched} autoComplete="name" required />
        <Field label={labels.whatsapp} name="whatsapp" value={values.whatsapp} error={touched.whatsapp ? errors.whatsapp : ""} onChange={updateField} onBlur={markTouched} type="tel" autoComplete="tel" inputMode="tel" required />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={labels.email} name="email" value={values.email} error={touched.email ? errors.email : ""} onChange={updateField} onBlur={markTouched} type="email" autoComplete="email" required />
        <Select label={labels.country} name="country" value={values.country} error={touched.country ? errors.country : ""} onChange={updateField} onBlur={markTouched} options={["Brasil", "Chile", dict.forms.other]} placeholder={dict.forms.choose} required />
      </div>
      <Select label={labels.need} name="need" value={values.need} error={touched.need ? errors.need : ""} onChange={updateField} onBlur={markTouched} options={[...dict.forms.clientOptions]} placeholder={dict.forms.choose} required />
      <Textarea label={labels.message} name="message" value={values.message} error={touched.message ? errors.message : ""} onChange={updateField} onBlur={markTouched} placeholder={dict.forms.clientPlaceholder} />
      <button type="submit" disabled={submitting} className="focus-ring btn-submit">
        <Send className="h-5 w-5" aria-hidden />
        <span>{submitting ? dict.forms.sending : dict.forms.clientSubmit}</span>
      </button>
      <StatusMessage status={status} statusType={statusType} />
    </form>
  );
}

function validate(values: FormValues, dict: Dictionary): Errors {
  const errors: Errors = {};

  for (const name of ["name", "whatsapp", "email", "country", "need"] as FieldName[]) {
    if (!values[name].trim()) {
      errors[name] = dict.forms.requiredField;
    }
  }

  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = dict.forms.invalidEmail;
  }

  return errors;
}

function saveLocalLead(key: string, payload: FormValues) {
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
  value,
  error,
  onChange,
  onBlur,
  type = "text",
  autoComplete,
  inputMode,
  required,
}: {
  label: string;
  name: FieldName;
  value: string;
  error?: string;
  onChange: (name: FieldName, value: string) => void;
  onBlur: (name: FieldName) => void;
  type?: string;
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  required?: boolean;
}) {
  const errorId = `${name}-error`;

  return (
    <label className="field-label">
      {label}
      <input
        name={name}
        type={type}
        value={value}
        autoComplete={autoComplete}
        inputMode={inputMode}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        onChange={(event) => onChange(name, event.target.value)}
        onBlur={() => onBlur(name)}
        className="focus-ring field-control field-input"
      />
      {error ? <FieldError id={errorId}>{error}</FieldError> : null}
    </label>
  );
}

function Select({
  label,
  name,
  value,
  error,
  onChange,
  onBlur,
  options,
  placeholder,
  required,
}: {
  label: string;
  name: FieldName;
  value: string;
  error?: string;
  onChange: (name: FieldName, value: string) => void;
  onBlur: (name: FieldName) => void;
  options: string[];
  placeholder: string;
  required?: boolean;
}) {
  const errorId = `${name}-error`;

  return (
    <label className="field-label">
      {label}
      <select
        name={name}
        value={value}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        onChange={(event) => onChange(name, event.target.value)}
        onBlur={() => onBlur(name)}
        className="focus-ring field-control field-select"
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      {error ? <FieldError id={errorId}>{error}</FieldError> : null}
    </label>
  );
}

function Textarea({
  label,
  name,
  value,
  error,
  onChange,
  onBlur,
  placeholder,
}: {
  label: string;
  name: FieldName;
  value: string;
  error?: string;
  onChange: (name: FieldName, value: string) => void;
  onBlur: (name: FieldName) => void;
  placeholder: string;
}) {
  const errorId = `${name}-error`;

  return (
    <label className="field-label">
      {label}
      <textarea
        name={name}
        rows={4}
        value={value}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        onChange={(event) => onChange(name, event.target.value)}
        onBlur={() => onBlur(name)}
        className="focus-ring field-control field-textarea"
      />
      {error ? <FieldError id={errorId}>{error}</FieldError> : null}
    </label>
  );
}

function FieldError({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <span id={id} className="field-error">
      <AlertCircle className="h-4 w-4 shrink-0" aria-hidden />
      {children}
    </span>
  );
}

function StatusMessage({ status, statusType }: { status: string; statusType: "success" | "error" | "" }) {
  if (!status) {
    return <p className="status-note" aria-live="polite" />;
  }

  const success = statusType === "success";

  return (
    <p className={`status-note flex items-start gap-2 ${success ? "text-[#0f6f43]" : "text-[#c91f28]"}`} aria-live="polite">
      {success ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden /> : <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />}
      <span>{status}</span>
    </p>
  );
}
