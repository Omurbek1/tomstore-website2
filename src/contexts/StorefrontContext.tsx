"use client";

import {
  createContext,
  PropsWithChildren,
  startTransition,
  useContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useRouter } from "next/navigation";

import {
  normalizeCurrency,
  normalizeLocale,
  setStorefrontRuntimeState,
  type StorefrontCurrency,
  type StorefrontLocale,
} from "@lib/storefront-runtime";

type StorefrontContextValue = {
  locale: StorefrontLocale;
  currency: StorefrontCurrency;
  exchangeRate: number;
  setLocale: (value: StorefrontLocale) => void;
  setCurrency: (value: StorefrontCurrency) => void;
};

type StorefrontProviderProps = PropsWithChildren<{
  initialLocale: StorefrontLocale;
  initialCurrency: StorefrontCurrency;
  initialExchangeRate: number;
}>;

const LOCALE_COOKIE = "tomstore_locale";
const CURRENCY_COOKIE = "tomstore_currency";

const StorefrontContext = createContext<StorefrontContextValue | undefined>(
  undefined,
);

function persistCookie(name: string, value: string) {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=31536000; samesite=lax`;
}

export default function StorefrontProvider({
  children,
  initialLocale,
  initialCurrency,
  initialExchangeRate,
}: StorefrontProviderProps) {
  const router = useRouter();
  const [locale, setLocaleState] = useState(normalizeLocale(initialLocale));
  const [currency, setCurrencyState] = useState(
    normalizeCurrency(initialCurrency),
  );
  const [exchangeRate] = useState(initialExchangeRate > 0 ? initialExchangeRate : 89);

  const refreshStorefront = useCallback(() => {
    startTransition(() => {
      router.refresh();
    });
  }, [router]);

  const applyLocale = useCallback(
    (value: StorefrontLocale) => {
      const nextLocale = normalizeLocale(value);
      setLocaleState(nextLocale);
      persistCookie(LOCALE_COOKIE, nextLocale);
      setStorefrontRuntimeState({
        locale: nextLocale,
        currency,
        usdExchangeRate: exchangeRate,
      });

      if (typeof document !== "undefined") {
        document.documentElement.lang = nextLocale;
      }

      refreshStorefront();
    },
    [currency, exchangeRate, refreshStorefront],
  );

  const applyCurrency = useCallback(
    (value: StorefrontCurrency) => {
      const nextCurrency = normalizeCurrency(value);
      setCurrencyState(nextCurrency);
      persistCookie(CURRENCY_COOKIE, nextCurrency);
      setStorefrontRuntimeState({
        locale,
        currency: nextCurrency,
        usdExchangeRate: exchangeRate,
      });

      if (typeof document !== "undefined") {
        document.documentElement.dataset.currency = nextCurrency;
      }

      refreshStorefront();
    },
    [exchangeRate, locale, refreshStorefront],
  );

  setStorefrontRuntimeState({ locale, currency, usdExchangeRate: exchangeRate });

  useEffect(() => {
    setStorefrontRuntimeState({ locale, currency, usdExchangeRate: exchangeRate });
    persistCookie(LOCALE_COOKIE, locale);
    persistCookie(CURRENCY_COOKIE, currency);
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
      document.documentElement.dataset.currency = currency;
    }
  }, [currency, exchangeRate, locale]);

  const value = useMemo(
    () => ({
      locale,
      currency,
      exchangeRate,
      setLocale: applyLocale,
      setCurrency: applyCurrency,
    }),
    [applyCurrency, applyLocale, currency, exchangeRate, locale],
  );

  return (
    <StorefrontContext.Provider value={value}>
      {children}
    </StorefrontContext.Provider>
  );
}

export function useStorefrontPreferences() {
  const context = useContext(StorefrontContext);
  if (!context) {
    throw new Error("useStorefrontPreferences must be used within StorefrontProvider");
  }
  return context;
}
