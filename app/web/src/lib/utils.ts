export function serializeNonPOJOs(obj: any) {
  return structuredClone(obj);
}