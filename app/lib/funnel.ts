export const FUNNEL_KEYS = {
  zodiac: "zodiacSelected",
  scan: "scanCompleted",
  payment: "paymentCompleted",
};

export const getFunnelState = () => ({
  zodiac: localStorage.getItem(FUNNEL_KEYS.zodiac) === "true",

  scan: localStorage.getItem(FUNNEL_KEYS.scan) === "true",

  payment: localStorage.getItem(FUNNEL_KEYS.payment) === "true",
});
