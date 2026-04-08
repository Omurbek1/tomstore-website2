"use client";

import { useCallback } from "react";
import NextImage from "next/image";
import { IconChevronDown, IconMail, IconPhone } from "@tabler/icons-react";

import Menu from "../menu";
import NavLink from "../nav-link";
import MenuItem from "../MenuItem";
import Container from "../Container";
import { Small } from "../Typography";
import { StyledTopbar } from "./styles";
import { LANGUAGES, CURRENCIES } from "./data";
import { formatExchangeRate, t } from "@utils/utils";
import { useStorefrontPreferences } from "@context/StorefrontContext";
import type { StorefrontCurrency, StorefrontLocale } from "@lib/storefront-runtime";

import logo from "../../../public/assets/images/logo.svg";

export default function Topbar() {
  const { locale, currency: selectedCurrency, exchangeRate, setLocale, setCurrency } =
    useStorefrontPreferences();

  const handleCurrencyClick = useCallback(
    (curr: (typeof CURRENCIES)[number]) => () => setCurrency(curr.id as StorefrontCurrency),
    [setCurrency],
  );

  const handleLanguageClick = useCallback(
    (lang: (typeof LANGUAGES)[number]) => () => setLocale(lang.id as StorefrontLocale),
    [setLocale],
  );

  const currentLanguage = LANGUAGES.find((item) => item.id === locale) || LANGUAGES[0];
  const currentCurrency =
    CURRENCIES.find((item) => item.id === selectedCurrency) || CURRENCIES[0];

  return (
    <StyledTopbar>
      <Container className="container">
        <div className="topbar-left">
          <div className="logo">
            <NextImage src={logo} alt="Bonik" />
          </div>

          <div className="phone">
            <IconPhone size={16} stroke={1.5} />
            <span>+88012 3456 7894</span>
          </div>

          <div className="email">
            <IconMail size={16} stroke={1.5} />
            <span>support@ui-lib.com</span>
          </div>
        </div>

        <div className="topbar-right">
          <NavLink className="link" href="/">
            {t("Theme FAQ's")}
          </NavLink>

          <NavLink className="link" href="/">
            {t("Need Help?")}
          </NavLink>

          <Menu
            direction="right"
            handler={(handleOpen) => (
              <div className="dropdown-handler" onClick={handleOpen}>
                <Small fontWeight="600">{currentLanguage.title}</Small>
                <IconChevronDown size={16} stroke={1.5} />
              </div>
            )}>
            {LANGUAGES.map((item) => (
              <MenuItem key={item.id} onClick={handleLanguageClick(item)}>
                <Small fontWeight="600">{item.title}</Small>
              </MenuItem>
            ))}
          </Menu>

          <Menu
            direction="right"
            handler={(handleOpen) => (
              <div className="dropdown-handler" onClick={handleOpen}>
                <Small fontWeight="600">{currentCurrency.title}</Small>
                <IconChevronDown size={16} stroke={1.5} />
              </div>
            )}>
            {CURRENCIES.map((item) => (
              <MenuItem key={item.id} onClick={handleCurrencyClick(item)}>
                <Small fontWeight="600">{item.title}</Small>
              </MenuItem>
            ))}
          </Menu>

          <Small fontWeight="600" ml="0.75rem">
            {t("1 USD = {rate} KGS", { rate: formatExchangeRate(exchangeRate) })}
          </Small>
        </div>
      </Container>
    </StyledTopbar>
  );
}
