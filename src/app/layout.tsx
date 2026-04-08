import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { cookies, headers } from "next/headers";
// THEME PROVIDER
import StyledComponentsRegistry from "@lib/registry";
import { getBackendBaseUrl } from "@lib/backend";
import {
  normalizeCurrency,
  normalizeLocale,
  setStorefrontRuntimeState,
} from "@lib/storefront-runtime";
import StorefrontProvider from "@context/StorefrontContext";
// CONTEXT PROVIDER
import CartProvider from "@context/CartContext";
// THIRD PARTY CSS FILE
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ThemeProvider } from "theme";
import NProgressBar from "@component/NProgress";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Bonik - Market 1",
  description:
    "Bonik market-1 storefront built with React and Next.js.",
  authors: [{ name: "UI-LIB", url: "https://ui-lib.com" }],
  keywords: ["e-commerce", "market-1", "next.js", "react", "bonik"]
};

type StorefrontConfig = {
  storefrontDefaultCurrency?: "KGS" | "USD";
  storefrontUsdExchangeRate?: number;
};

const DEFAULT_STORE_LANG = "en";
const LOCALE_COOKIE = "tomstore_locale";
const CURRENCY_COOKIE = "tomstore_currency";

async function loadStorefrontConfig(): Promise<StorefrontConfig | null> {
  try {
    const response = await fetch(`${getBackendBaseUrl()}/storefront/config`, {
      cache: "no-store"
    });

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as StorefrontConfig;
  } catch {
    return null;
  }
}

function inferLocale(acceptLanguage?: string | null) {
  if (!acceptLanguage) return DEFAULT_STORE_LANG;
  return /(^|,)\s*(ru|ky)(-|,|;|$)/i.test(acceptLanguage) ? "ru" : "en";
}

export default async function RootLayout({ children }: PropsWithChildren) {
  const [cookieStore, headerStore] = await Promise.all([cookies(), headers()]);
  const storefrontConfig = await loadStorefrontConfig();

  const locale = normalizeLocale(
    cookieStore.get(LOCALE_COOKIE)?.value || inferLocale(headerStore.get("accept-language")),
  );
  const currency = normalizeCurrency(
    cookieStore.get(CURRENCY_COOKIE)?.value ||
      storefrontConfig?.storefrontDefaultCurrency ||
      "KGS",
  );
  const exchangeRate = Number(storefrontConfig?.storefrontUsdExchangeRate) || 89;

  setStorefrontRuntimeState({
    locale,
    currency,
    usdExchangeRate: exchangeRate
  });

  return (
    <html lang={locale}>
      <body
        className="antialiased"
        style={{
          fontFamily:
            'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        <StyledComponentsRegistry>
          <StorefrontProvider
            initialLocale={locale}
            initialCurrency={currency}
            initialExchangeRate={exchangeRate}>
            <CartProvider>
              <ThemeProvider>
                {children}
                <NProgressBar />
              </ThemeProvider>
            </CartProvider>
          </StorefrontProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
