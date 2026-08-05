import {
  FlaskConical,
  Leaf,
  Pill,
  Dna,
  BatteryCharging,
  Microscope,
  ShieldCheck,
  Truck,
  Globe,
  Award,
  Beaker,
  Sprout,
  TestTube,
  Atom,
  FlaskRound,
  Tablets,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type Category = {
  slug: string
  name: string
  tagline: string
  description: string
  icon: LucideIcon
  image: string
  highlights: string[]
}

export const categories: Category[] = [
  {
    slug: 'specialty-ingredients',
    name: 'Specialty Ingredients',
    tagline: 'Precision-engineered actives',
    description:
      'High-purity, clinically-backed active compounds formulated for targeted efficacy across pharmaceutical and nutraceutical applications.',
    icon: FlaskConical,
    image:
      'https://images.pexels.com/photos/8533076/pexels-photo-8533076.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    highlights: ['99.8% purity', 'GMP certified', 'Custom synthesis'],
  },
  {
    slug: 'excipients',
    name: 'Excipients',
    tagline: 'The backbone of formulation',
    description:
      'Pharmaceutical-grade binders, fillers, disintegrants and coatings that ensure stability, bioavailability and consistent delivery.',
    icon: Beaker,
    image:
      'https://images.pexels.com/photos/7230262/pexels-photo-7230262.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    highlights: ['USP / EP / JP', 'Low endotoxin', 'Multi-compendial'],
  },
  {
    slug: 'herbal-extracts',
    name: 'Herbal Extracts',
    tagline: 'Nature, standardized',
    description:
      'Standardized botanical extracts derived from sustainably sourced herbs, validated for marker compounds and heavy-metal compliance.',
    icon: Leaf,
    image:
      'https://images.pexels.com/photos/5480250/pexels-photo-5480250.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    highlights: ['Ratio & marker standardized', 'Organic options', 'Low solvent residue'],
  },
  {
    slug: 'nutraceuticals',
    name: 'Nutraceuticals',
    tagline: 'Health, optimized',
    description:
      'Bioavailable vitamins, minerals, amino acids and functional actives for dietary supplements and functional foods.',
    icon: Pill,
    image:
      'https://images.pexels.com/photos/17820709/pexels-photo-17820709.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    highlights: ['High bioavailability', 'Clean-label ready', 'FDA-compliant'],
  },
  {
    slug: 'bio-battery',
    name: 'Bio-Battery',
    tagline: 'Energy from biology',
    description:
      'Next-generation bio-derived energy storage materials leveraging organic redox chemistry for sustainable power solutions.',
    icon: BatteryCharging,
    image:
      'https://images.pexels.com/photos/3639037/pexels-photo-3639037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    highlights: ['Bio-derived electrolytes', 'Green redox actives', 'R&D partnerships'],
  },
]

export type Capability = {
  title: string
  description: string
  icon: LucideIcon
}

export const capabilities: Capability[] = [
  {
    title: 'Custom Synthesis',
    description: 'Bespoke molecule development from milligram to multi-ton scale with full analytical documentation.',
    icon: Atom,
  },
  {
    title: 'Analytical R&D',
    description: 'In-house HPLC, GC-MS, ICP-MS and stability chambers for complete characterization and validation.',
    icon: Microscope,
  },
  {
    title: 'Quality Assurance',
    description: 'ISO 9001 and GMP-aligned quality systems with full traceability and COA on every batch.',
    icon: ShieldCheck,
  },
  {
    title: 'Global Logistics',
    description: 'Cold-chain and hazardous-compliant shipping across 40+ countries with documented chain of custody.',
    icon: Globe,
  },
  {
    title: 'Regulatory Support',
    description: 'DMF, CEP and FDA registration dossiers prepared and maintained by our regulatory affairs team.',
    icon: Award,
  },
  {
    title: 'Reliable Supply',
    description: 'Dual-sourced raw materials and safety stock programs to protect your production schedule.',
    icon: Truck,
  },
]

export type Stat = { value: string; label: string }

export const stats: Stat[] = [
  { value: '25+', label: 'Years of expertise' },
  { value: '1,200+', label: 'Ingredients in catalog' },
  { value: '40+', label: 'Countries served' },
  { value: '99.6%', label: 'On-time delivery' },
]

export type Value = { title: string; description: string; icon: LucideIcon }

export const values: Value[] = [
  {
    title: 'Science First',
    description: 'Every decision is grounded in evidence, data and rigorous analytical validation.',
    icon: TestTube,
  },
  {
    title: 'Sustainable Sourcing',
    description: 'We partner with growers and suppliers who protect biodiversity and fair labor.',
    icon: Sprout,
  },
  {
    title: 'Uncompromising Quality',
    description: 'Quality is not a checkpoint — it is built into every process we operate.',
    icon: ShieldCheck,
  },
]

export const heroImage =
  'https://images.pexels.com/photos/8851786/pexels-photo-8851786.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400'
export const aboutHeroImage =
  'https://images.pexels.com/photos/1181738/pexels-photo-1181738.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400'
export const facilityImage =
  'https://images.pexels.com/photos/7598915/pexels-photo-7598915.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400'
export const labImage =
  'https://images.pexels.com/photos/9574397/pexels-photo-9574397.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400'
export const qcImage =
  'https://images.pexels.com/photos/11589239/pexels-photo-11589239.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400'
export const teamImage =
  'https://images.pexels.com/photos/7644016/pexels-photo-7644016.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400'
