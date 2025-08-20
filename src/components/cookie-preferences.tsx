"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Settings,
  Cookie,
  Shield,
  Eye,
  Database,
  Save,
  RefreshCw,
} from "lucide-react";
import { cookieManager, CookiePreferences } from "@/lib/cookie-manager";

interface CookiePreferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CookiePreferencesModal: React.FC<CookiePreferencesModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const currentPreferences = cookieManager.getPreferences();
      if (currentPreferences) {
        setPreferences(currentPreferences);
      }
    }
  }, [isOpen]);

  const handlePreferenceChange = (type: keyof CookiePreferences) => {
    if (type === "essential") return; // Essential cookies cannot be disabled
    setPreferences((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      cookieManager.setPreferences(preferences);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      onClose();
    } catch (error) {
      console.error("Error saving preferences:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleReset = () => {
    const defaultPreferences = {
      essential: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    setPreferences(defaultPreferences);
  };

  const cookieTypes = [
    {
      key: "essential" as keyof CookiePreferences,
      title: "Essential Cookies",
      description:
        "These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and form submissions. The website cannot function properly without these cookies.",
      icon: <Shield className="w-5 h-5 text-green-600" />,
      required: true,
      examples: [
        "Session management",
        "Security features",
        "Basic functionality",
      ],
    },
    {
      key: "analytics" as keyof CookiePreferences,
      title: "Analytics Cookies",
      description:
        "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website and services.",
      icon: <Eye className="w-5 h-5 text-blue-600" />,
      required: false,
      examples: ["Google Analytics", "Page views", "User behavior"],
    },
    {
      key: "marketing" as keyof CookiePreferences,
      title: "Marketing Cookies",
      description:
        "These cookies are used to track visitors across websites to display relevant and engaging advertisements. They may also be used to limit the number of times you see an ad.",
      icon: <Cookie className="w-5 h-5 text-orange-600" />,
      required: false,
      examples: ["Facebook Pixel", "Google Ads", "Retargeting"],
    },
    {
      key: "preferences" as keyof CookiePreferences,
      title: "Preference Cookies",
      description:
        "These cookies allow the website to remember choices you make and provide enhanced, more personal features. They may be set by us or by third-party providers.",
      icon: <Database className="w-5 h-5 text-purple-600" />,
      required: false,
      examples: ["Language settings", "Theme preferences", "Customization"],
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 overflow-y-auto"
        >
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
              onClick={onClose}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="inline-block w-full max-w-4xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Settings className="w-6 h-6 text-green-600" />
                  <h2 className="text-2xl font-medium text-gray-900">
                    Cookie Preferences
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Description */}
              <div className="mb-8">
                <p className="text-gray-600">
                  Manage your cookie preferences to control how we use cookies
                  and similar technologies on our website. You can change these
                  settings at any time.
                </p>
              </div>

              {/* Cookie Types */}
              <div className="space-y-6 mb-8">
                {cookieTypes.map((cookieType) => (
                  <div
                    key={cookieType.key}
                    className="border border-gray-200 rounded-lg p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-3 flex-1">
                        <div className="mt-1">{cookieType.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg font-medium text-gray-900">
                              {cookieType.title}
                            </h3>
                            {cookieType.required && (
                              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                                Always Active
                              </span>
                            )}
                          </div>
                          <p className="text-gray-600 text-sm mb-3">
                            {cookieType.description}
                          </p>
                          <div className="text-xs text-gray-500">
                            <strong>Examples:</strong>{" "}
                            {cookieType.examples.join(", ")}
                          </div>
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
                  </div>
                ))}
              </div>

              {/* Current Cookies Info */}
              <div className="bg-gray-50 rounded-lg p-4 mb-8">
                <h4 className="font-medium text-gray-900 mb-2">
                  Current Cookies
                </h4>
                <div className="text-sm text-gray-600">
                  <p>
                    You currently have{" "}
                    {Object.keys(cookieManager.getAllCookies()).length} cookies
                    stored.
                  </p>
                  <button
                    onClick={() => {
                      cookieManager.clearAllCookies();
                      window.location.reload();
                    }}
                    className="text-green-600 hover:text-green-700 underline mt-1"
                  >
                    Clear all cookies
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 justify-end">
                <button
                  onClick={handleReset}
                  className="flex items-center justify-center px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Reset to Default
                </button>
                <button
                  onClick={handleSave}
                  disabled={isSaving}
                  className="flex items-center justify-center px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSaving ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4 mr-2" />
                      Save Preferences
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
