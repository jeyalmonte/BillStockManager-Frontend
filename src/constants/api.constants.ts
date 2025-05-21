const V1 = "/api/v1";
const inventory = `${V1}/inventory`;
const billing = `${V1}/billing`;

export const ROUTES_V1 = {
  AUTH: `${V1}/auth`,
  CATEGORIES: `${inventory}/categories`,
  PRODUCTS: `${inventory}/products`,
  CUSTOMERS: `${V1}/customers`,
  INVOICES: `${billing}/invoices`,
  PAYMENTS: `${billing}/payments`,
};
