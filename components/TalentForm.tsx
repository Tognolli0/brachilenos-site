"use client";

import { AlertCircle, CheckCircle2, FileText, Send, X } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import type { Dictionary } from "@/lib/dictionaries";

type Props = {
  dict: Dictionary;
};

type FormValues = {
  name: string;
  whatsapp: string;
  email: string;
  country: string;
  city: string;
  education: string;
  registry: string;
  area: string;
  experience: string;
  linkedin: string;
  interest: string;
  message: string;
};

type FieldName = keyof FormValues;
type Errors = Partial<Record<FieldName | "portfolio", string>>;
type FileMeta = { name: string; size: number; type: string };

const maxFileSize = 5 * 1024 * 1024;

const initialValues: FormValues = {
  name: "",
  whatsapp: "",
  email: "",
  country: "",
  city: "",
  education: "",
  registry: "",
  area: "",
  experience: "",
  linkedin: "",
  interest: "",
  message: "",
};

export function TalentForm({ dict }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [values, setValues] = useState<FormValues>(initialValues);
  const [portfolio, setPortfolio] = useState<File | null>(null);
  const [touched, setTouched] = useState<Partial<Record<FieldName | "portfolio", boolean>>>({});
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");
  const [submitting, setSubmitting] = useState(false);

  const labels = useMemo(
    () => ({
      name: dict.forms.name,
      whatsapp: "WhatsApp",
      email: "E-mail",
      country: dict.forms.country,
      city: optionalLabel(dict.forms.city),
      education: optionalLabel(dict.forms.education),
      registry: optionalLabel(dict.forms.registry),
      area: optionalLabel(dict.forms.area),
      experience: optionalLabel(dict.forms.experience),
      linkedin: optionalLabel("LinkedIn"),
      interest: dict.forms.interest,
      message: dict.forms.message,
    }),
    [dict],
  );

  const errors = validate(values, portfolio, dict);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

    const nextErrors = validate(values, portfolio, dict);
    setTouched({
      name: true,
      whatsapp: true,
      email: true,
      country: true,
      city: true,
      education: true,
      registry: true,
      area: true,
      experience: true,
      linkedin: true,
      interest: true,
      message: true,
      portfolio: true,
    });

    if (Object.keys(nextErrors).length > 0) {
      setStatus("");
      setStatusType("");
      event.currentTarget.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
      return;
    }

    const payload: FormValues & { portfolio: FileMeta | ""; group: string } = {
      ...values,
      portfolio: portfolio ? { name: portfolio.name, size: portfolio.size, type: portfolio.type } : "",
      group: getGroup(values.interest, dict),
    };

    setSubmitting(true);
    setStatus("");
    setStatusType("");

    try {
      const response = await fetch("/api/talents", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Talent request failed");
      }

      saveLocalTalent(payload);
      setStatus(dict.forms.successTalent);
      setStatusType("success");
      setValues(initialValues);
      setPortfolio(null);
      setTouched({});
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch {
      saveLocalTalent(payload);
      setStatus(dict.forms.error);
      setStatusType("error");
    } finally {
      setSubmitting(false);
    }
  }

  function updateField(name: FieldName, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
  }

  function markTouched(name: FieldName | "portfolio") {
    setTouched((current) => ({ ...current, [name]: true }));
  }

  function onFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0] || null;
    setPortfolio(file);
    markTouched("portfolio");
  }

  function removeFile() {
    setPortfolio(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
      fileInputRef.current.focus();
    }
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
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={labels.city} name="city" value={values.city} onChange={updateField} onBlur={markTouched} />
        <Field label={labels.education} name="education" value={values.education} onChange={updateField} onBlur={markTouched} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={labels.registry} name="registry" value={values.registry} onChange={updateField} onBlur={markTouched} />
        <Select label={labels.area} name="area" value={values.area} onChange={updateField} onBlur={markTouched} options={[...dict.forms.talentAreas]} placeholder={dict.forms.choose} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={labels.experience} name="experience" value={values.experience} onChange={updateField} onBlur={markTouched} />
        <Field label={labels.linkedin} name="linkedin" value={values.linkedin} onChange={updateField} onBlur={markTouched} type="url" />
      </div>
      <Select label={labels.interest} name="interest" value={values.interest} error={touched.interest ? errors.interest : ""} onChange={updateField} onBlur={markTouched} options={[...dict.forms.interests]} placeholder={dict.forms.choose} required />

      <label className="field-label">
        {optionalLabel(dict.forms.portfolio)}
        <input
          ref={fileInputRef}
          name="portfolio"
          type="file"
          accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
          aria-invalid={Boolean(touched.portfolio && errors.portfolio)}
          aria-describedby={touched.portfolio && errors.portfolio ? "portfolio-error" : "portfolio-hint"}
          onChange={onFileChange}
          className="focus-ring field-control px-3 py-3 file:mr-3 file:border-0 file:bg-[#071f3b] file:px-3 file:py-2 file:text-sm file:font-bold file:text-white"
        />
        <span id="portfolio-hint" className="text-xs font-semibold text-[#5c6b78]">
          {dict.forms.fileHint}
        </span>
        {portfolio ? (
          <span className="flex items-center justify-between gap-3 border border-[#d9e0e6] bg-[#f8faf9] px-3 py-2 text-sm font-bold text-[#071f3b]">
            <span className="inline-flex min-w-0 items-center gap-2">
              <FileText className="h-4 w-4 shrink-0 text-[#b88228]" aria-hidden />
              <span className="truncate">{portfolio.name}</span>
              <span className="shrink-0 text-xs text-[#5c6b78]">{formatFileSize(portfolio.size)}</span>
            </span>
            <button type="button" onClick={removeFile} className="focus-ring inline-flex h-8 w-8 shrink-0 items-center justify-center border border-[#cbd5df] bg-white text-[#071f3b]" aria-label={dict.forms.removeFile}>
              <X className="h-4 w-4" aria-hidden />
            </button>
          </span>
        ) : null}
        {touched.portfolio && errors.portfolio ? <FieldError id="portfolio-error">{errors.portfolio}</FieldError> : null}
      </label>

      <Textarea label={optionalLabel(labels.message)} name="message" value={values.message} onChange={updateField} onBlur={markTouched} placeholder={dict.forms.talentPlaceholder} />
      <button type="submit" disabled={submitting} className="focus-ring btn-submit">
        <Send className="h-5 w-5" aria-hidden />
        <span>{submitting ? dict.forms.sending : dict.forms.talentSubmit}</span>
      </button>
      <StatusMessage status={status} statusType={statusType} />
    </form>
  );
}

function validate(values: FormValues, portfolio: File | null, dict: Dictionary): Errors {
  const errors: Errors = {};

  for (const name of ["name", "whatsapp", "email", "country", "interest"] as FieldName[]) {
    if (!values[name].trim()) {
      errors[name] = dict.forms.requiredField;
    }
  }

  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = dict.forms.invalidEmail;
  }

  if (portfolio && portfolio.size > maxFileSize) {
    errors.portfolio = dict.forms.fileTooLarge;
  }

  return errors;
}

function getGroup(interest: string, dict: Dictionary) {
  const groupByInterest: Record<string, string> = {
    [dict.forms.interests[0]]: "candidatos",
    [dict.forms.interests[1]]: "parceiros",
    [dict.forms.interests[2]]: "prestadores",
  };

  return groupByInterest[interest] || "candidatos";
}

function saveLocalTalent(payload: FormValues & { portfolio: FileMeta | ""; group: string }) {
  try {
    const current = JSON.parse(localStorage.getItem("brachilenos.talentBank") || "[]");
    localStorage.setItem("brachilenos.talentBank", JSON.stringify([...current, { ...payload, createdAt: new Date().toISOString() }]));
  } catch {
    // Local fallback is best-effort only; form submission should not depend on browser storage.
  }
}

function formatFileSize(size: number) {
  if (size < 1024 * 1024) {
    return `${Math.max(1, Math.round(size / 1024))} KB`;
  }

  return `${(size / 1024 / 1024).toFixed(1)} MB`;
}

function optionalLabel(label: string) {
  return `${label} (opcional)`;
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
