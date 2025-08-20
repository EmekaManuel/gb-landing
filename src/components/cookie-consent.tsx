"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Settings, Cookie, Shield, Eye, Database } from "lucide-react";

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

interface CookieConsentProps {
  onAccept: (preferences: CookiePreferences) => void;
  onReject: () => void;
}

export const CookieConsent: React.FC<CookieConsentProps> = ({
  onAccept,
  onReject,
}) => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
    preferences: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    localStorage.setItem("cookie-consent", JSON.stringify(allAccepted));
    onAccept(allAccepted);
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    const onlyEssential = {
      essential: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    localStorage.setItem("cookie-consent", JSON.stringify(onlyEssential));
    onReject();
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences));
    onAccept(preferences);
    setShowBanner(false);
    setShowSettings(false);
  };

  const handlePreferenceChange = (type: keyof CookiePreferences) => {
    if (type === "essential") return; // Essential cookies cannot be disabled
    setPreferences((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const cookieTypes = [
    {
      key: "essential" as keyof CookiePreferences,
      title: "Essential Cookies",
      description:
        "Necessary for the website to function properly. Cannot be disabled.",
      icon: <Shield className="w-5 h-5 text-green-600" />,
      required: true,
    },
    {
      key: "analytics" as keyof CookiePreferences,
      title: "Analytics Cookies",
      description:
        "Help us understand how visitors interact with our website to improve services.",
      icon: <Eye className="w-5 h-5 text-blue-600" />,
      required: false,
    },
    {
      key: "marketing" as keyof CookiePreferences,
      title: "Marketing Cookies",
      description:
        "Used to deliver personalized advertisements and track campaign performance.",
      icon: <Cookie className="w-5 h-5 text-orange-600" />,
      required: false,
    },
    {
      key: "preferences" as keyof CookiePreferences,
      title: "Preference Cookies",
      description:
        "Remember your settings and preferences for a better experience.",
      icon: <Database className="w-5 h-5 text-purple-600" />,
      required: false,
    },
  ];

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {!showSettings ? (
            // Main Banner
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Cookie className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-medium text-gray-900">
                    We use cookies to enhance your experience
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  We use cookies to analyze site traffic, personalize content,
                  and provide social media features. By clicking &quot;Accept
                  All&quot;, you consent to our use of cookies.{" "}
                  <button
                    onClick={() => setShowSettings(true)}
                    className="text-green-600 hover:text-green-700 underline font-medium"
                  >
                    Learn more
                  </button>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <button
                  onClick={handleRejectAll}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
                >
                  Reject All
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                >
                  Accept All
                </button>
              </div>
            </div>
          ) : (
            // Settings Panel
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Settings className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-medium text-gray-900">
                    Cookie Preferences
                  </h3>
                </div>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                {cookieTypes.map((cookieType) => (
                  <div
                    key={cookieType.key}
                    className="flex items-start justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-start gap-3 flex-1">
                      <div className="mt-1">{cookieType.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium text-gray-900">
                            {cookieType.title}
                          </h4>
                          {cookieType.required && (
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                              Required
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">
                          {cookieType.description}
                        </p>
                      </div>
                    </div>

                    <div className="ml-4">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences[cookieType.key]}
                          onChange={() =>
                            handlePreferenceChange(cookieType.key)
                          }
                          disabled={cookieType.required}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                      </label>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-end">
                <button
                  onClick={() => setShowSettings(false)}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
