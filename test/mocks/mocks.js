export const html = '<!doctype html><html><body></body></html>';
export const viewNameSync = 'test_view';
export const viewNameAsync = 'test_view_async';
export const tableNameSync = 'test_table' + _randomString(5, 'N');
export const tableNameAsync = 'test_table_async' + _randomString(5, 'N');
export const viewState = JSON.stringify({ foo: 'bar' });
export const viewLink = '183264ed';
export const query = 'SELECT count(*) AS n FROM contributions';

/**
 * Return a random alpha-numeric string.
 * @param {Number} len - length of the string to create
 * @param {String} [an] - 'A' for alpha only, 'N' for numeric only
 * @return {String} randomString
 * @example
 * randomString(10);        // "4Z8iNQag9v"
 * randomString(10, "A");   // "aUkZuHNcWw"
 * randomString(10, "N");   // "9055739230"
 */
function _randomString(len, an) {
  an = an && an.toLowerCase();
  var str = '';
  var min = an === 'a' ? 10 : 0;
  var max = an === 'n' ? 10 : 62;
  for (var i = 0; i < len; i++) {
    var r = Math.random() * (max - min) + min << 0;
    var s = r < 36 ? 55 : 61;
    var t = r > 9 ? s : 48;
    str += String.fromCharCode(r += t);
  }
  return str;
}