export const useQueryParams = (): Record<string, string> =>
  window.location.search
    .replace('?', '')
    .split('&')
    .map(e => e.split('=').map(decodeURIComponent))
    .reduce((r: Record<string, string>, [k, v]) => {
      r[k] = v;

      return r;
    }, {});
