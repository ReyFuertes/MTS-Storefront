export function FmtLabel(str: string): string {
  return str?.replace(/_/g, " ");
}
export function FmtAmountToNumber(value: string): any {
  return value ? String(value).replace(/[$]|[,]/g, '').slice(0, -2) : 0;
}
export function FmtAmountToCents(value: string): any {
  return value ? String(Number(value).toFixed(2)).replace(/[$]|[,]/g, '') : 0;
}
export function removeDollarSymbol(value: string): any {
  return value ? String(value).replace(/[$]/g, '') : 0;
}