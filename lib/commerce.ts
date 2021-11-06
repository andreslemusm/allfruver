import Commerce from "@chec/commerce.js";

const commerceClient = new Commerce(
  process.env.NEXT_PUBLIC_CHEC_PUBLIC_API_KEY as string
);

export { commerceClient };
