import { INTAKE_INTENTS, SMS_CONSENT_COPY } from "./intake";

export type IntakeIntent = typeof INTAKE_INTENTS[number];
export type IntakePayload = { request_id: string; intent: IntakeIntent; fields: Record<string, string>; sms_consent_text: string };
export type PendingIntake = { version: 1; payload: IntakePayload; created_at: string };
type Storage = Pick<globalThis.Storage, "getItem" | "setItem" | "removeItem">;
export const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
export const UNCERTAIN_INTAKE = "We could not confirm your inquiry. Your original answers are saved in this tab. Retry this inquiry, or contact us before submitting another.";
export const pendingIntakeKey = (intent: IntakeIntent) => `jays:pending-inquiry:${intent}:v1`;
const key = pendingIntakeKey;
const notify = () => { if (typeof window !== "undefined") window.dispatchEvent(new Event("jays-pending-intake")); };

export function readPendingIntake(storage: Storage, intent: IntakeIntent): PendingIntake | null {
  const saved = storage.getItem(key(intent));
  if (saved === null) return null;
  return decodePendingIntake(saved, intent);
}
export function decodePendingIntake(saved: string, intent: IntakeIntent): PendingIntake {
  const draft = JSON.parse(saved) as PendingIntake;
  if (draft.version !== 1 || !draft.payload || draft.payload.intent !== intent ||
      !UUID_PATTERN.test(draft.payload.request_id) || !Number.isFinite(Date.parse(draft.created_at)) ||
      !draft.payload.fields || typeof draft.payload.fields !== "object" || Array.isArray(draft.payload.fields) ||
      Object.values(draft.payload.fields).some(value => typeof value !== "string" || value.length > 5000) ||
      typeof draft.payload.sms_consent_text !== "string") throw new Error("Previous inquiry cannot be recovered");
  return draft;
}

export function savePendingIntake(storage: Storage, intent: IntakeIntent, fields: Record<string, string>, reference: string): PendingIntake {
  if (!INTAKE_INTENTS.includes(intent) || !UUID_PATTERN.test(reference) || storage.getItem(key(intent)) !== null) throw new Error("Previous inquiry still needs confirmation");
  const draft: PendingIntake = { version: 1, payload: { request_id: reference, intent, fields, sms_consent_text: SMS_CONSENT_COPY }, created_at: new Date().toISOString() };
  const saved = JSON.stringify(draft);
  storage.setItem(key(intent), saved);
  if (storage.getItem(key(intent)) !== saved) throw new Error("Inquiry recovery unavailable");
  notify();
  return JSON.parse(saved) as PendingIntake;
}

export function clearPendingIntake(storage: Storage, draft: PendingIntake) {
  if (readPendingIntake(storage, draft.payload.intent)?.payload.request_id === draft.payload.request_id) {
    storage.removeItem(key(draft.payload.intent));
    if (storage.getItem(key(draft.payload.intent)) !== null) throw new Error("Inquiry cleanup unconfirmed");
    notify();
  }
}

export function intakeReceiptMatches(result: unknown, draft: PendingIntake): result is { success: true; submission_id: string; processing_status: "processed" } {
  if (!result || typeof result !== "object") return false;
  const receipt = result as Record<string, unknown>;
  return receipt.success === true && receipt.submission_id === draft.payload.request_id && receipt.processing_status === "processed";
}
