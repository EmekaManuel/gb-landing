/* eslint-disable @typescript-eslint/no-explicit-any */
export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

export class CookieManager {
  private static instance: CookieManager;
  private preferences: CookiePreferences | null = null;

  private constructor() {
    this.loadPreferences();
  }

  public static getInstance(): CookieManager {
    if (!CookieManager.instance) {
      CookieManager.instance = new CookieManager();
    }
    return CookieManager.instance;
  }

  private loadPreferences(): void {
    if (typeof window === "undefined") return;

    try {
      const stored = localStorage.getItem("cookie-consent");
      if (stored) {
        this.preferences = JSON.parse(stored);
      }
    } catch (error) {
      console.error("Error loading cookie preferences:", error);
    }
  }

  public getPreferences(): CookiePreferences | null {
    return this.preferences;
  }

  public setPreferences(preferences: CookiePreferences): void {
    this.preferences = preferences;
    if (typeof window !== "undefined") {
      localStorage.setItem("cookie-consent", JSON.stringify(preferences));
      this.applyPreferences(preferences);
    }
  }

  public hasConsent(): boolean {
    return this.preferences !== null;
  }

  public canUseAnalytics(): boolean {
    return this.preferences?.analytics === true;
  }

  public canUseMarketing(): boolean {
    return this.preferences?.marketing === true;
  }

  public canUsePreferences(): boolean {
    return this.preferences?.preferences === true;
  }

  private applyPreferences(preferences: CookiePreferences): void {
    // Apply analytics cookies
    if (preferences.analytics) {
      this.enableAnalytics();
    } else {
      this.disableAnalytics();
    }

    // Apply marketing cookies
    if (preferences.marketing) {
      this.enableMarketing();
    } else {
      this.disableMarketing();
    }

    // Apply preference cookies
    if (preferences.preferences) {
      this.enablePreferences();
    } else {
      this.disablePreferences();
    }
  }

  private enableAnalytics(): void {
    // Google Analytics
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }

    // Set analytics cookies
    this.setCookie("_ga", "enabled", 365);
    this.setCookie("_gid", "enabled", 1);
    this.setCookie("_gat", "enabled", 1);
  }

  private disableAnalytics(): void {
    // Google Analytics
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        analytics_storage: "denied",
      });
    }

    // Remove analytics cookies
    this.removeCookie("_ga");
    this.removeCookie("_gid");
    this.removeCookie("_gat");
  }

  private enableMarketing(): void {
    // Facebook Pixel
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("consent", "grant");
    }

    // Set marketing cookies
    this.setCookie("_fbp", "enabled", 90);
    this.setCookie("_fbc", "enabled", 90);
  }

  private disableMarketing(): void {
    // Facebook Pixel
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("consent", "revoke");
    }

    // Remove marketing cookies
    this.removeCookie("_fbp");
    this.removeCookie("_fbc");
  }

  private enablePreferences(): void {
    // Set preference cookies
    this.setCookie("theme", "light", 365);
    this.setCookie("language", "en", 365);
  }

  private disablePreferences(): void {
    // Remove preference cookies
    this.removeCookie("theme");
    this.removeCookie("language");
  }

  private setCookie(name: string, value: string, days: number): void {
    if (typeof window === "undefined") return;

    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);

    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
  }

  private removeCookie(name: string): void {
    if (typeof window === "undefined") return;

    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
  }

  public getCookie(name: string): string | null {
    if (typeof window === "undefined") return null;

    const nameEQ = name + "=";
    const ca = document.cookie.split(";");

    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }

    return null;
  }

  public getAllCookies(): Record<string, string> {
    if (typeof window === "undefined") return {};

    const cookies: Record<string, string> = {};
    const ca = document.cookie.split(";");

    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      const eqPos = c.indexOf("=");
      if (eqPos > 0) {
        const name = c.substring(0, eqPos);
        const value = c.substring(eqPos + 1);
        cookies[name] = value;
      }
    }

    return cookies;
  }

  public clearAllCookies(): void {
    if (typeof window === "undefined") return;

    const cookies = this.getAllCookies();
    Object.keys(cookies).forEach((cookieName) => {
      this.removeCookie(cookieName);
    });
  }

  // Analytics tracking methods
  public trackPageView(page: string): void {
    if (!this.canUseAnalytics()) return;

    // Google Analytics
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("config", "GA_MEASUREMENT_ID", {
        page_path: page,
      });
    }

    // Custom analytics
    this.trackEvent("page_view", { page });
  }

  public trackEvent(event: string, parameters?: Record<string, any>): void {
    if (!this.canUseAnalytics()) return;

    // Google Analytics
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", event, parameters);
    }

    // Custom event tracking
    console.log("Event tracked:", event, parameters);
  }

  public trackConversion(conversionId: string, value?: number): void {
    if (!this.canUseMarketing()) return;

    // Google Ads
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "conversion", {
        send_to: conversionId,
        value: value,
      });
    }
  }
}

// Export singleton instance
export const cookieManager = CookieManager.getInstance();
