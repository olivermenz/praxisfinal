import Cookies from 'js-cookie';

export interface CookieSettings {
  necessary: boolean;
}

const COOKIE_SETTINGS_KEY = 'cookie-settings';

export const getStoredCookieSettings = (): CookieSettings => {
  const stored = Cookies.get(COOKIE_SETTINGS_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return getDefaultSettings();
    }
  }
  return getDefaultSettings();
};

export const getDefaultSettings = (): CookieSettings => ({
  necessary: true,
});

export const saveCookieSettings = (settings: CookieSettings) => {
  Cookies.set(COOKIE_SETTINGS_KEY, JSON.stringify(settings), { expires: 365 });
};

export const hasUserMadeCookieChoice = (): boolean => {
  return Cookies.get(COOKIE_SETTINGS_KEY) !== undefined;
};