export const useQueryParams = (): Record<string, string> =>
  window.location.search
    .replace('?', '')
    .split('&')
    .map(e => e.split('=').map(decodeURIComponent))
    .reduce((r: any, [k, v]) => {
      r[k] = v;

      return r;
    }, {});
