export class Utils {
  static serializeNonPOJOs(obj: any) {
    return structuredClone(obj);
  }

  static capitalizeFirstLetter(field: string): string {
    return field.charAt(0).toUpperCase() + field.slice(1).toLowerCase()
  }

  static sanitizeBarString(field: string): string {
    const array = field.split("|").sort();
    return array.join(", ");
  }

  static splitCreatureProperties(props: string): Array<string> {
    return props.split("|").sort();
  }

  static stringReplace(item: any, searchString: string, replaceString: string): string {
    return item.toString().replaceAll(searchString, replaceString);
  }

  static truncate(str: string, pattern: string): string {
    var truncated = "";  // default return for invalid string and pattern

    if (str && str.length) {
      truncated = str;
      if (pattern && pattern.length) {
        var idx = str.indexOf(pattern);

        if (idx != -1) {
          truncated = str.substring(0, idx);
        }
      }
    }
    return (truncated);
  }

  static scrollTo(element: string) {
    const target = document.querySelector(element);
    target?.scrollIntoView({behavior: "smooth"})
  }
}