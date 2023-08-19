var reverse = function(x) {
    const MAX_SAFE_INTEGER = 2147483647;
    const MIN_SAFE_INTEGER = -2147483648;

    var reverse = 0;

    while (x != 0) {
      if (reverse > MAX_SAFE_INTEGER / 10 || reverse < MIN_SAFE_INTEGER / 10) {
        return 0;
      }

      const digit = x % 10;
      if (reverse == MAX_SAFE_INTEGER / 10 && digit > 7) {
        return 0;
      }
      if (reverse == MIN_SAFE_INTEGER / 10 && digit < -8) {
        return 0;
      }

      reverse = reverse * 10 + digit;
      x = ~~(x / 10);
    }

    return reverse;
};