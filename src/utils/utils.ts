import ceil from "lodash/ceil";
import { differenceInMinutes } from "date-fns/differenceInMinutes";
import isPropValid from "@emotion/is-prop-valid";
import {
  currency as formatCurrencyValue,
  formatExchangeRate,
  formatRelativeTime,
  t as translate,
} from "@lib/storefront-runtime";

export const isValidProp = (prop: string) => isPropValid(prop);

// CONVERT HEX TO RGB COLOR
export const convertHexToRGB = (hex: string) => {
  // check if it's a rgba

  if (hex.match("rgba")) {
    let triplet = hex.slice(5).split(",").slice(0, -1).join(",");
    return triplet;
  }
  let c: any;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");
    return [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",");
  }
};

// GET THE DATE/TIME DIFFERENCE
export const getDateDifference = (date: string) => {
  let diff = differenceInMinutes(new Date(), new Date(date));
  if (diff < 60) return formatRelativeTime(diff, "minute");

  diff = ceil(diff / 60);
  if (diff < 24) return formatRelativeTime(diff, "hour");

  diff = ceil(diff / 24);
  if (diff < 30) return formatRelativeTime(diff, "day");

  diff = ceil(diff / 30);
  if (diff < 12) return formatRelativeTime(diff, "month");

  diff = diff / 12;
  return formatRelativeTime(Math.ceil(diff), "year");
};

export const renderProductCount = (
  page: number,
  productPerPage: number,
  totalProductLenth: number
) => {
  let startNumber = page * productPerPage;
  let endNumber = (page + 1) * productPerPage;

  if (endNumber > totalProductLenth) endNumber = totalProductLenth;

  return translate("Showing {start}-{end} of {total} products", {
    start: startNumber + 1,
    end: endNumber,
    total: totalProductLenth
  });
};

/**
 * CALCULATE PRICE WITH PRODUCT DISCOUNT THEN RETURN NEW PRODUCT PRICES
 * @param  price - PRODUCT PRICE
 * @param  discount - DISCOUNT PERCENT
 * @returns - RETURN NEW PRICE
 */

export function calculateDiscount(price: number, discount: number) {
  const afterDiscount = Number((price - price * (discount / 100)).toFixed(2));
  return currency(afterDiscount);
}

/**
 * CHANGE THE CURRENCY FORMAT
 * @param  price - PRODUCT PRICE
 * @param  fraction - HOW MANY FRACTION WANT TO SHOW
 * @returns - RETURN PRICE WITH CURRENCY
 */

export function currency(price: number, fraction: number = 2) {
  return formatCurrencyValue(price, fraction);
}

export { formatExchangeRate };
export { translate as t };
