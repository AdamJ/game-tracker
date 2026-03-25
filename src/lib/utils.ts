import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function downloadCSV(csv: string, filename: string) {
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function arrayToCSV(arr: Record<string, unknown>[]): string {
  if (!arr || arr.length === 0) return '';
  const header = Object.keys(arr[0]).join(',');
  const rows = arr.map((obj) =>
    Object.values(obj)
      .map((v) => `"${v}"`)
      .join(',')
  );
  return header + '\n' + rows.join('\n');
}
