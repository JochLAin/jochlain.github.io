export const pageview = (url: string) => {
  window.gtag('config', 'G-992KW4CR8X', {
    anonymize_ip: !document.cookie.includes('cookie_compliance'),
    page_path: url,
  });
}

export const event = (action: string, params: any) => {
  window.gtag('event', action, params);
}
