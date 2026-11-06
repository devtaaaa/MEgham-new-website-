import React from 'react';
import { Hero } from '../components/Hero';
import { BrandIntro } from '../components/BrandIntro';
import { MenuSection } from '../components/MenuSection';
import { BakerySection } from '../components/BakerySection';
import { CelebrationsSection } from '../components/CelebrationsSection';
import { MagazineGallery } from '../components/MagazineGallery';
import { InstagramSection } from '../components/InstagramSection';
import { AmbienceExperience } from '../components/AmbienceExperience';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { ContactSection } from '../components/ContactSection';

interface HomePageProps {
  onOpenReservation: () => void;
  onOpenCakeModal: (cakeTitle?: string) => void;
  onOpenCelebrationModal: (occasion?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenReservation,
  onOpenCakeModal,
  onOpenCelebrationModal,
}) => {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero
        onOpenReservation={onOpenReservation}
        onOpenCelebration={() => onOpenCelebrationModal()}
        onOpenCakeModal={() => onOpenCakeModal()}
      />

      {/* 2. Brand Identity & The Triad */}
      <BrandIntro />

      {/* 3. Our Rooftop Food Menu */}
      <MenuSection onOpenReservation={onOpenReservation} />

      {/* 4. Megham Bakery & Custom Cake Studio */}
      <BakerySection onOpenCakeModal={onOpenCakeModal} />

      {/* 5. Celebrations & Special Occasions */}
      <CelebrationsSection onOpenCelebrationModal={onOpenCelebrationModal} />

      {/* 6. Magazine-Style Editorial Gallery */}
      <MagazineGallery />

      {/* 7. Instagram Moments & 9:16 Video Reels */}
      <InstagramSection />

      {/* 8. Rooftop Ambience & Experience */}
      <AmbienceExperience />

      {/* 9. Verified Customer Testimonials */}
      <TestimonialsSection />

      {/* 10. Contact, Directions & Functional Action Buttons */}
      <ContactSection
        onOpenReservation={onOpenReservation}
        onOpenCakeModal={() => onOpenCakeModal()}
        onOpenCelebrationModal={() => onOpenCelebrationModal()}
      />
    </>
  );
};
