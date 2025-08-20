"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { CookieConsent } from "@/components/cookie-consent";
import { CookiePreferencesModal } from "@/components/cookie-preferences";
import { cookieManager, CookiePreferences } from "@/lib/cookie-manager";

interface CookieContextType {
  showCookiePreferences: () => void;
  trackPageView: (page: string) => void;
  trackEvent: (event: string, parameters?: Record<string, unknown>) => void;
  trackConversion: (conversionId: string, value?: number) => void;
}

const CookieContext = createContext<CookieContextType | undefined>(undefined);

export const useCookie = () => {
  const context = useContext(CookieContext);
  if (context === undefined) {
    throw new Error("useCookie must be used within a CookieProvider");
  }
  return context;
};

interface CookieProviderProps {
  children: React.ReactNode;
}

export const CookieProvider: React.FC<CookieProviderProps> = ({ children }) => {
  const [showPreferencesModal, setShowPreferencesModal] = useState(false);

  useEffect(() => {
    const handleShowPreferences = () => {
      setShowPreferencesModal(true);
    };

    window.addEventListener("showCookiePreferences", handleShowPreferences);

    return () => {
      window.removeEventListener(
        "showCookiePreferences",
        handleShowPreferences
      );
    };
  }, []);

  const handleCookieAccept = (preferences: CookiePreferences) => {
    cookieManager.setPreferences(preferences);
    console.log("Cookie preferences accepted:", preferences);
  };

  const handleCookieReject = () => {
    const onlyEssential = {
      essential: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    cookieManager.setPreferences(onlyEssential);
    console.log("Cookie preferences rejected, only essential cookies enabled");
  };

  const showCookiePreferences = () => {
    setShowPreferencesModal(true);
  };

  const trackPageView = (page: string) => {
    cookieManager.trackPageView(page);
  };

  const trackEvent = (event: string, parameters?: Record<string, unknown>) => {
    cookieManager.trackEvent(event, parameters);
  };

  const trackConversion = (conversionId: string, value?: number) => {
    cookieManager.trackConversion(conversionId, value);
  };

  const contextValue: CookieContextType = {
    showCookiePreferences,
    trackPageView,
    trackEvent,
    trackConversion,
  };

  return (
    <CookieContext.Provider value={contextValue}>
      {children}

      {/* Cookie Consent Banner */}
      <CookieConsent
        onAccept={handleCookieAccept}
        onReject={handleCookieReject}
      />

      {/* Cookie Preferences Modal */}
      <CookiePreferencesModal
        isOpen={showPreferencesModal}
        onClose={() => setShowPreferencesModal(false)}
      />
    </CookieContext.Provider>
  );
};
