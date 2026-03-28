import { Slide, ColorTheme } from './types';

export const DEFAULT_ACCENT_COLOR = '#2563EB';  /* Electric Blue */
export const DEFAULT_SECONDARY_COLOR = '#FFFFFF'; /* White */

export interface PresetLogo {
  name: string;
  url: string;
}

export const PRESET_LOGOS: PresetLogo[] = [
  { name: 'تاجر',    url: '/logo-1.png' },
  { name: 'رقمي',    url: '/logo-2.png' },
  { name: 'أزرق',    url: '/logo-3.png' },
  { name: 'أبيض',    url: '/logo-4.png' },
];

// ── Color Themes - Al-Tajer Digital Modern Palette ─────────────────────────
export const COLOR_THEMES: ColorTheme[] = [
  { name: 'التاجر',      accent: '#2563EB', secondary: '#FFFFFF' },   /* Electric Blue + White */
  { name: 'فخامة',       accent: '#0F172A', secondary: '#F8FAFC' },   /* Charcoal + Light Gray */
  { name: 'النمو',       accent: '#10B981', secondary: '#ECFDF5' },   /* Mint Green */
  { name: 'الثقة',       accent: '#0EA5E9', secondary: '#F0F9FF' },   /* Sky Blue */
  { name: 'الطاقة',      accent: '#F97316', secondary: '#FFF7ED' },   /* Orange */
  { name: 'الرؤية',      accent: '#8B5CF6', secondary: '#F5F3FF' },   /* Soft Purple */
  { name: 'رسمي',        accent: '#4B5563', secondary: '#F9FAFB' },   /* Professional Gray */
  { name: 'حداثة',       accent: '#EC4899', secondary: '#FDF2F8' },   /* Modern Pink */
];

// ── Initial State ───────────────────────────────────────────────────────────
export const INITIAL_SLIDES: Slide[] = [
  {
    id: '1',
    title: 'ثلاثة مبادئ أساسية لتقنية المعلومات',
    description: 'الأسس الرئيسية لبناء منتجات رقمية قابلة للتطوير وآمنة وموثوقة.',
    numberText: '03',
    brandName: 'منصة التاجر',
    accentColor: DEFAULT_ACCENT_COLOR,
    secondaryColor: DEFAULT_SECONDARY_COLOR,
    showGrid: false,
    customCss: '',
    logoUrl: undefined,
  },
];

export const MAX_SLIDES = 10;
