export class Utils {
  static serializeNonPOJOs(obj: any) {
    return structuredClone(obj);
  }

  static capitalizeFirstLetter(field: string): string {
    return field.charAt(0).toUpperCase() + field.slice(1).toLowerCase()
  }

  static sanitizeBarString(field: string): string {
    return field.replaceAll("|", ", ");
  }
}