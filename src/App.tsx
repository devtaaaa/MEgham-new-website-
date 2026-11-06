import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

// Pages
import { HomePage } from './pages/HomePage';
import { StoryPage } from './pages/StoryPage';
import { MenuPage } from './pages/MenuPage';
import { BakeryPage } from './pages/BakeryPage';
import { CelebrationsPage } from './pages/CelebrationsPage';
import { GalleryPage } from './pages/GalleryPage';
import { InstagramPage } from './pages/InstagramPage';
import { ContactPage } from './pages/ContactPage';

// Modals
import { ReservationModal } from './components/Modals/ReservationModal';
import { CakeEnquiryModal } from './components/Modals/CakeEnquiryModal';
import { CelebrationEnquiryModal } from './components/Modals/CelebrationEnquiryModal';

export const App: React.FC = () => {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isCakeModalOpen, setIsCakeModalOpen] = useState(false);
  const [selectedCakeTitle, setSelectedCakeTitle] = useState('');
  const [isCelebrationModalOpen, setIsCelebrationModalOpen] = useState(false);
  const [selectedOccasion, setSelectedOccasion] = useState('');

  const handleOpenCakeModal = (cakeTitle?: string) => {
    setSelectedCakeTitle(cakeTitle || '');
    setIsCakeModalOpen(true);
  };

  const handleOpenCelebrationModal = (occasion?: string) => {
    setSelectedOccasion(occasion || '');
    setIsCelebrationModalOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-cream text-espresso flex flex-col font-sans selection:bg-gold selection:text-cream">
        
        {/* Navigation Bar */}
        <Navbar
          onOpenReservation={() => setIsReservationOpen(true)}
          onOpenCelebration={() => handleOpenCelebrationModal()}
        />

        {/* Multi-Page Routes */}
        <main className="flex-grow">
          <Routes>
            {/* 1. Complete Home Page (identically preserved with all details) */}
            <Route
              path="/"
              element={
                <HomePage
                  onOpenReservation={() => setIsReservationOpen(true)}
                  onOpenCakeModal={handleOpenCakeModal}
                  onOpenCelebrationModal={handleOpenCelebrationModal}
                />
              }
            />

            {/* 2. Dedicated Our Story & Philosophy Page */}
            <Route
              path="/story"
              element={
                <StoryPage
                  onOpenReservation={() => setIsReservationOpen(true)}
                  onOpenCelebrationModal={() => handleOpenCelebrationModal()}
                />
              }
            />
            <Route
              path="/about"
              element={
                <StoryPage
                  onOpenReservation={() => setIsReservationOpen(true)}
                  onOpenCelebrationModal={() => handleOpenCelebrationModal()}
                />
              }
            />

            {/* 3. Dedicated Complete Menu Page */}
            <Route
              path="/menu"
              element={
                <MenuPage
                  onOpenReservation={() => setIsReservationOpen(true)}
                />
              }
            />

            {/* 4. Dedicated Megham Bakery & Custom Cakes Page */}
            <Route
              path="/bakery"
              element={
                <BakeryPage
                  onOpenCakeModal={handleOpenCakeModal}
                />
              }
            />

            {/* 5. Dedicated Celebrations & Events Page */}
            <Route
              path="/celebrations"
              element={
                <CelebrationsPage
                  onOpenCelebrationModal={handleOpenCelebrationModal}
                />
              }
            />

            {/* 6. Dedicated Editorial Gallery Page */}
            <Route
              path="/gallery"
              element={<GalleryPage />}
            />

            {/* 7. Dedicated Instagram & Social Moments Page */}
            <Route
              path="/instagram"
              element={<InstagramPage />}
            />
            <Route
              path="/moments"
              element={<InstagramPage />}
            />

            {/* 8. Dedicated Contact & Reservation Page */}
            <Route
              path="/contact"
              element={
                <ContactPage
                  onOpenReservation={() => setIsReservationOpen(true)}
                  onOpenCakeModal={() => handleOpenCakeModal()}
                  onOpenCelebrationModal={() => handleOpenCelebrationModal()}
                />
              }
            />

            {/* Fallback to Home */}
            <Route
              path="*"
              element={
                <HomePage
                  onOpenReservation={() => setIsReservationOpen(true)}
                  onOpenCakeModal={handleOpenCakeModal}
                  onOpenCelebrationModal={handleOpenCelebrationModal}
                />
              }
            />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Global Interactive Modals */}
        <ReservationModal
          isOpen={isReservationOpen}
          onClose={() => setIsReservationOpen(false)}
        />

        <CakeEnquiryModal
          isOpen={isCakeModalOpen}
          onClose={() => setIsCakeModalOpen(false)}
          selectedCakeTitle={selectedCakeTitle}
        />

        <CelebrationEnquiryModal
          isOpen={isCelebrationModalOpen}
          onClose={() => setIsCelebrationModalOpen(false)}
          selectedOccasion={selectedOccasion}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
