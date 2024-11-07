import React, { useState } from 'react';
import { TemplateGallery } from './components/TemplateGallery';
import { AuthModal } from './components/auth/AuthModal';
import { Layout } from './components/Layout';
import { LandingPageWizard } from './components/wizard/LandingPageWizard';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [showWizard, setShowWizard] = useState(false);

  const handleSignInClick = () => {
    setIsAuthModalOpen(true);
  };

  const handleGetStartedClick = () => {
    setShowWizard(true);
  };

  return (
    <Layout onSignInClick={handleSignInClick}>
      {showWizard ? (
        <LandingPageWizard onBack={() => setShowWizard(false)} />
      ) : (
        <TemplateGallery 
          templates={[]}
          onSelect={() => {}}
          onSignInClick={handleSignInClick}
          onGetStartedClick={handleGetStartedClick}
        />
      )}
      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </Layout>
  );
}

export default App;