export function isObject(data: unknown): data is object {
  return typeof data === 'object' && data !== null;
}
export function isString(value: unknown): value is string {
  return typeof value === 'string' || value instanceof String;
}