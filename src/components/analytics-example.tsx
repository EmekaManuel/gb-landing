"use client";

import React, { useEffect } from "react";
import { useCookie } from "@/providers/cookie-provider";

// Example component showing how to use cookie tracking
export const AnalyticsExample: React.FC = () => {
  const { trackPageView, trackEvent, trackConversion } = useCookie();

  useEffect(() => {
    // Track page view when component mounts
    trackPageView("/example-page");
  }, [trackPageView]);

  const handleButtonClick = () => {
    // Track button click event
    trackEvent("button_click", {
      button_name: "example_button",
      page: "/example-page",
    });
  };

  const handleFormSubmit = () => {
    // Track form submission
    trackEvent("form_submit", {
      form_name: "contact_form",
      page: "/example-page",
    });
  };

  const handlePurchase = () => {
    // Track conversion (purchase)
    trackConversion("AW-CONVERSION_ID", 100.0);
  };

  return (
    <div className="p-4 space-y-4">
      <h3 className="text-lg font-medium">Analytics Example</h3>
      <p className="text-sm text-gray-600">
        This component demonstrates how to use the cookie tracking
        functionality. Events will only be tracked if the user has consented to
        analytics cookies.
      </p>

      <div className="space-y-2">
        <button
          onClick={handleButtonClick}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Track Button Click
        </button>

        <button
          onClick={handleFormSubmit}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 ml-2"
        >
          Track Form Submit
        </button>

        <button
          onClick={handlePurchase}
          className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 ml-2"
        >
          Track Purchase
        </button>
      </div>
    </div>
  );
};
