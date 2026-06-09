import HeroSection from '@/components/home/HeroSection';
import CategoriesSection from '@/components/home/CategoriesSection';
import WhyAviraSection from '@/components/home/WhyAviraSection';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import CTASection from '@/components/home/CTASection';
import { getFeaturedProducts } from '@/src/data/products';

export default function HomePage() {
  const featuredProducts = getFeaturedProducts(6);

  return (
    <>
      <HeroSection />
      <WhyAviraSection />
      <CategoriesSection />
      <FeaturedProducts products={featuredProducts} />
      <CTASection />
    </>
  );
}
