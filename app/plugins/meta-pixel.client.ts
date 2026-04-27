const META_PIXEL_ID = "3566875966946377";

type FbqFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    fbq?: FbqFn;
    _fbq?: FbqFn;
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window === "undefined") return;
  if (window.fbq) return;

  const w = window as unknown as Record<string, unknown> & {
    fbq?: FbqFn;
    _fbq?: FbqFn;
  };

  const n: Record<string, unknown> = function (this: unknown) {
    const callMethod = n.callMethod as ((...a: unknown[]) => void) | undefined;
    const queue = n.queue as unknown[];
    if (callMethod) {
      callMethod.apply(n, arguments as unknown as unknown[]);
    } else {
      queue.push(arguments);
    }
  } as unknown as Record<string, unknown>;

  w.fbq = n as unknown as FbqFn;
  if (!w._fbq) w._fbq = n as unknown as FbqFn;
  n.push = n;
  n.loaded = true;
  n.version = "2.0";
  n.queue = [];

  const t = document.createElement("script");
  t.async = true;
  t.src = "https://connect.facebook.net/en_US/fbevents.js";
  const s = document.getElementsByTagName("script")[0];
  s?.parentNode?.insertBefore(t, s);

  const fbq = w.fbq as FbqFn;
  fbq("init", META_PIXEL_ID);
  fbq("track", "PageView");

  const router = nuxtApp.$router as
    | { afterEach: (cb: () => void) => void }
    | undefined;

  router?.afterEach(() => {
    fbq("track", "PageView");
  });
});
