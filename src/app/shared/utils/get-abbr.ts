export function GetAbbr(value: string): string {
  const arr = value.split(' ');
  return `${arr[0]?.charAt(0)}${arr[1]?.charAt(0)}`.toUpperCase();
}