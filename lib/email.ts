const DEFAULT_SHOP_EMAIL_TO = "rangerautolawrence@gmail.com";
const DEFAULT_SHOP_EMAIL_FROM = "Ranger Auto <onboarding@resend.dev>";

export function getShopEmailTo() {
  return (process.env.SHOP_EMAIL_TO || DEFAULT_SHOP_EMAIL_TO)
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
}

export function getShopEmailFrom() {
  return process.env.SHOP_EMAIL_FROM || DEFAULT_SHOP_EMAIL_FROM;
}
