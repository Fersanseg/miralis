export class Utils {
  static serializeNonPOJOs(obj: any) {
    return structuredClone(obj);
  }
}