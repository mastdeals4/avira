'use client';

import type { ElementType } from 'react';
import { FlaskConical, Layers, Leaf, Pill, Sparkles, Droplets, Beaker, Package, X } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { getCategoryLabel } from './displayLabels';

export type CategoryDef = {
  value: string;
  label: string;
  icon: ElementType;
  badgeClass: string;
};

const CATEGORY_META: Record<string, Omit<CategoryDef, 'value'>> = {
  API: {
    label: 'API',
    icon: FlaskConical,
    badgeClass: 'bg-brand-blue-light text-brand-navy border-brand-blue/20',
  },
  Excipient: {
    label: 'Excipient',
    icon: Layers,
    badgeClass: 'bg-brand-green-light text-brand-navy border-brand-green/25',
  },
  'Herbal Extract': {
    label: 'Herbal Extract',
    icon: Leaf,
    badgeClass: 'bg-brand-green-light text-brand-green-dark border-brand-green/25',
  },
  Nutraceutical: {
    label: 'Nutraceutical',
    icon: Pill,
    badgeClass: 'bg-white text-brand-blue border-brand-blue/25',
  },
  'Cosmetic Ingredient': {
    label: 'Cosmetic',
    icon: Sparkles,
    badgeClass: 'bg-white text-brand-navy border-brand-navy/15',
  },
  'Refined Oil': {
    label: 'Refined Oil',
    icon: Droplets,
    badgeClass: 'bg-brand-blue-light text-brand-blue border-brand-blue/25',
  },
  Probiotic: {
    label: 'Probiotic',
    icon: Beaker,
    badgeClass: 'bg-brand-green-light text-brand-green-dark border-brand-green/25',
  },
};

export const getCategoryBadgeClass = (category: string) =>
  CATEGORY_META[category]?.badgeClass || 'bg-gray-50 text-gray-600 border-gray-100';

type Props = {
  activeCategory: string;
  categories: string[];
  onChange: (category: string) => void;
};

export default function CategoryFilterBar({ activeCategory, categories, onChange }: Props) {
  const { t, lang } = useLanguage();
  const categoryDefs: CategoryDef[] = categories.map((category) => ({
    value: category,
    label: getCategoryLabel(category, lang),
    icon: CATEGORY_META[category]?.icon || Package,
    badgeClass: getCategoryBadgeClass(category),
  }));

  return (
    <div className="w-full max-w-full overflow-x-auto sm:overflow-visible">
      <div className="inline-flex sm:flex sm:flex-wrap gap-2 min-w-0 pb-1 pr-4 sm:pr-0">
      <button
        onClick={() => onChange('')}
        className={`flex items-center gap-2 px-3.5 py-2 rounded-lg border text-xs font-semibold whitespace-nowrap transition-all duration-150 ${
          activeCategory === ''
            ? 'bg-brand-green text-white border-brand-green shadow-sm'
            : 'bg-white text-gray-600 border-gray-200 hover:border-brand-blue hover:text-brand-blue'
        }`}
      >
        {activeCategory === '' && <X size={11} />}
        {t('all_categories')}
      </button>

      {categoryDefs.map(({ value, label, icon: Icon }) => (
        <button
          key={value}
          onClick={() => onChange(activeCategory === value ? '' : value)}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-lg border text-xs font-semibold whitespace-nowrap transition-all duration-150 ${
            activeCategory === value
            ? 'bg-brand-green text-white border-brand-green shadow-sm'
              : 'bg-white text-gray-600 border-gray-200 hover:border-brand-blue hover:text-brand-blue'
          }`}
        >
          <Icon size={13} strokeWidth={1.75} />
          {label}
        </button>
      ))}
      </div>
    </div>
  );
}
