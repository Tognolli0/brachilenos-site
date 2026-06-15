"use client";

import { ArrowLeft, ArrowRight, CheckCircle2, Send, UploadCloud } from "lucide-react";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import type { Dictionary } from "@/lib/dictionaries";

type Props = {
  forms: Dictionary["forms"];
};

type FormField = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
type TalentPayloadValue = string | { name: string; size: number; type: string };

export function TalentForm({ forms }: Props) {
  const steps = [
    { title: forms.talentStepContact, description: forms.talentStepContactText },
    { title: forms.talentStepProfile, description: forms.talentStepProfileText },
    { title: forms.talentStepSend, description: forms.talentStepSendText },
  ];
  const pathname = usePathname();
  const formRef = useRef<HTMLFormElement>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [status, setStatus] = useState("");
  const [statusKind, setStatusKind] = useState<"success" | "error">("success");
  const [submitting, setSubmitting] = useState(false);
  const [emailHref, setEmailHref] = useState("");

  function getStepFields(step: number) {
    const form = formRef.current;
    if (!form) return [];

    return Array.from(
      form.querySelectorAll(`[data-form-step="${step}"] input, [data-form-step="${step}"] select, [data-form-step="${step}"] textarea`),
    ) as FormField[];
  }

  function validateStep(step: number, report = true) {
    const invalidField = getStepFields(step).find((field) => !field.checkValidity());

    if (!invalidField) {
      return true;
    }

    if (report && step === currentStep) {
      invalidField.reportValidity();
    }

    return false;
  }

  function goToStep(step: number) {
    if (step <= currentStep || validateStep(currentStep)) {
      setStatus("");
      setCurrentStep(step);
    }
  }

  function goNext() {
    if (validateStep(currentStep)) {
      setStatus("");
      setCurrentStep((step) => Math.min(step + 1, steps.length - 1));
    }
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

    for (let step = 0; step < steps.length; step += 1) {
      if (!validateStep(step, step === currentStep)) {
        setCurrentStep(step);
        setStatusKind("error");
        setStatus(forms.validationRequired);
        return;
      }
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload: Record<string, TalentPayloadValue> = {};
    setSubmitting(true);
    setStatus("");
    setEmailHref("");

    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        payload[key] = value.name ? { name: value.name, size: value.size, type: value.type || "application/octet-stream" } : "";
      } else {
        payload[key] = value.toString();
      }
    }

    const groupByInterest: Record<string, string> = {
      [forms.interests[0]]: "candidatos",
      [forms.interests[1]]: "prestadores",
    };

    payload.group = groupByInterest[String(payload.interest)] || "candidatos";
    formData.set("group", payload.group);

    try {
      saveLocalTalent(payload);

      const response = await fetch("/api/talents", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Talent request failed");
      }

      const result = (await response.json()) as { mode?: string; mailtoHref?: string; destination?: string; attachmentSkipped?: boolean };

      if (result.mailtoHref) {
        setEmailHref(result.mailtoHref);
        window.open(result.mailtoHref, "_blank", "noopener,noreferrer");
      }

      setStatusKind("success");
      setStatus(
        result.mode === "email_draft"
          ? `${forms.emailDraftReady}${result.attachmentSkipped ? ` ${forms.emailDraftAttachmentNote}` : ""}`
          : forms.successTalent,
      );
      setCurrentStep(0);
      form.reset();
    } catch {
      setStatusKind("error");
      setStatus(forms.error);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      ref={formRef}
      noValidate
      onSubmit={onSubmit}
      className="min-w-0 border border-[#d9e0e6] bg-white shadow-[0_16px_42px_rgba(7,31,59,0.08)]"
    >
      <div className="border-b border-[#d9e0e6] p-4 sm:p-6">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-[#b88228]">{forms.talentFormEyebrow}</p>
        <h3 className="display-serif mt-2 text-2xl font-bold text-[#071f3b]">{forms.talentFormTitle}</h3>
        <p className="mt-2 text-sm font-semibold leading-6 text-[#5c6b78]">{forms.talentFormText}</p>
        <div className="mt-4 grid gap-2 border border-[#d9e0e6] bg-[#f8faf9] p-3 text-sm font-semibold leading-6 text-[#31465a] sm:grid-cols-3">
          <span>{forms.talentBaseCandidates}</span>
          <span>{forms.talentBaseProviders}</span>
          <span>{forms.talentEmailDestination}</span>
        </div>
        <ol className="mt-5 grid gap-2 sm:grid-cols-3">
          {steps.map((step, index) => {
            const isActive = index === currentStep;
            const isDone = index < currentStep;

            return (
              <li key={step.title}>
                <button
                  type="button"
                  onClick={() => goToStep(index)}
                  className={`focus-ring flex min-h-16 w-full items-center gap-3 border px-3 py-3 text-left transition ${
                    isActive
                      ? "border-[#071f3b] bg-[#071f3b] text-white"
                      : isDone
                        ? "border-[#0f6f43] bg-[#f1faf5] text-[#071f3b]"
                        : "border-[#d9e0e6] bg-[#f8faf9] text-[#071f3b]"
                  }`}
                >
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center border text-sm font-black ${
                      isActive ? "border-white/35 text-white" : isDone ? "border-[#0f6f43] text-[#0f6f43]" : "border-[#cbd5df] text-[#5c6b78]"
                    }`}
                  >
                    {isDone ? <CheckCircle2 className="h-4 w-4" aria-hidden /> : index + 1}
                  </span>
                  <span className="min-w-0">
                    <strong className="block text-sm leading-5">{step.title}</strong>
                    <span className={`block text-xs leading-4 ${isActive ? "text-white/70" : "text-[#5c6b78]"}`}>{step.description}</span>
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="p-4 sm:p-6">
        <input type="hidden" name="sourcePath" value={pathname || ""} />
        <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
        <fieldset data-form-step="0" hidden={currentStep !== 0} className="grid gap-4">
          <legend className="sr-only">{forms.contactLegend}</legend>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label={forms.name} name="name" autoComplete="name" required />
            <Field label="WhatsApp" name="whatsapp" type="tel" autoComplete="tel" required />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="E-mail" name="email" type="email" autoComplete="email" required />
            <Select label={forms.country} name="country" options={["Brasil", "Chile", forms.other]} placeholder={forms.choose} required />
          </div>
          <Field label={forms.city} name="city" />
        </fieldset>

        <fieldset data-form-step="1" hidden={currentStep !== 1} className="grid gap-4">
          <legend className="sr-only">{forms.professionalLegend}</legend>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label={forms.education} name="education" />
            <Field label={forms.registry} name="registry" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Select label={forms.area} name="area" options={[...forms.talentAreas]} placeholder={forms.choose} />
            <Field label={forms.experience} name="experience" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Select label={forms.operationCountry} name="operationCountry" options={[...forms.operationCountryOptions]} placeholder={forms.choose} />
            <Select label={forms.languages} name="languages" options={[...forms.languageOptions]} placeholder={forms.choose} />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Select label={forms.workMode} name="workMode" options={[...forms.workModeOptions]} placeholder={forms.choose} />
            <Select label={forms.availability} name="availability" options={[...forms.availabilityOptions]} placeholder={forms.choose} />
          </div>
          <Field label="LinkedIn" name="linkedin" />
        </fieldset>

        <fieldset data-form-step="2" hidden={currentStep !== 2} className="grid gap-4">
          <legend className="sr-only">{forms.interestLegend}</legend>
          <Select label={forms.interest} name="interest" options={[...forms.interests]} placeholder={forms.choose} required />
          <label className="grid gap-2 text-sm font-extrabold text-[#071f3b]">
            {forms.portfolio}
            <span className="flex min-h-20 flex-col items-start gap-3 border border-dashed border-[#b88228] bg-[#fffaf1] px-4 py-3 text-sm font-bold text-[#071f3b] sm:flex-row sm:items-center">
              <UploadCloud className="h-5 w-5 shrink-0 text-[#b88228]" aria-hidden />
              <input
                name="portfolio"
                type="file"
                accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                className="min-w-0 max-w-full flex-1 text-sm font-normal text-[#102235] file:mr-3 file:border-0 file:bg-[#071f3b] file:px-3 file:py-2 file:text-sm file:font-bold file:text-white"
              />
            </span>
          </label>
          <label className="grid gap-2 text-sm font-extrabold text-[#071f3b]">
            {forms.message}
            <textarea
              name="message"
              rows={4}
              placeholder={forms.talentPlaceholder}
              className="focus-ring min-h-32 min-w-0 w-full border border-[#cbd5df] bg-white px-3 py-3 font-normal text-[#102235]"
            />
          </label>
          <label className="flex gap-3 border border-[#d9e0e6] bg-[#f8faf9] p-3 text-sm font-semibold leading-6 text-[#31465a]">
            <input type="checkbox" name="privacyConsent" required className="mt-1 h-4 w-4 shrink-0 accent-[#071f3b]" />
            <span>{forms.privacyConsent}</span>
          </label>
        </fieldset>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={() => {
              setStatus("");
              setCurrentStep((step) => Math.max(step - 1, 0));
            }}
            disabled={currentStep === 0 || submitting}
            className="focus-ring inline-flex min-h-12 w-full items-center justify-center gap-2 border border-[#cbd5df] px-5 text-sm font-extrabold text-[#071f3b] transition hover:border-[#071f3b] disabled:cursor-not-allowed disabled:opacity-45 sm:w-auto"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            {forms.back}
          </button>

          {currentStep < steps.length - 1 ? (
            <button
              type="button"
              onClick={goNext}
              className="focus-ring inline-flex min-h-12 w-full items-center justify-center gap-2 border border-[#071f3b] bg-[#071f3b] px-5 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:shadow-xl sm:w-auto"
            >
              {forms.nextStep}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </button>
          ) : (
            <button
              type="submit"
              disabled={submitting}
              className="focus-ring inline-flex min-h-12 w-full items-center justify-center gap-2 border border-[#071f3b] bg-[#071f3b] px-5 text-center text-sm font-extrabold leading-tight text-white transition hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-wait disabled:opacity-70 sm:w-auto"
            >
              <Send className="h-5 w-5" aria-hidden />
              <span>{submitting ? forms.sending : forms.talentSubmit}</span>
            </button>
          )}
        </div>

        <p className={`mt-4 min-h-6 text-sm font-bold ${statusKind === "success" ? "text-[#0f6f43]" : "text-[#b42318]"}`} role="status" aria-live="polite">
          {status}
        </p>
        {emailHref ? (
          <a href={emailHref} className="mt-2 inline-flex items-center gap-2 text-sm font-extrabold text-[#071f3b] hover:text-[#b88228]">
            {forms.reopenEmailDraft}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        ) : null}
      </div>
    </form>
  );
}

function saveLocalTalent(payload: Record<string, TalentPayloadValue>) {
  const key = "brachilenos.talentBank";
  const nextTalent = { ...payload, createdAt: new Date().toISOString() };

  try {
    const stored = JSON.parse(localStorage.getItem(key) || "[]");
    const talents = Array.isArray(stored) ? stored : [];
    localStorage.setItem(key, JSON.stringify([...talents, nextTalent]));
  } catch {
    localStorage.setItem(key, JSON.stringify([nextTalent]));
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
    <label className="grid gap-2 text-sm font-extrabold text-[#071f3b]">
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
    <label className="grid gap-2 text-sm font-extrabold text-[#071f3b]">
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
