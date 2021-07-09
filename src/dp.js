// 从多个小问题的解的合并能够解决最终原问题的解。得出的递推式：res[i][j] = res[i-1][j] + res[i][j-1]
var climbStairs = function (n) {
  let p = 0, q = 0, r = 1;
  for (let i = 1; i <= n; ++i) {
    p = q;
    q = r;
    r = p + q;
  }
  return r;
};
var result = climbStairs(3);
console.log(result);

var grid = function (m, n) {
  var dp = []
  for (var i = 0; i < m; i++) {
    for (var j = 0; j < n; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = 1;
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
      }
    }
  }
  return dp[m - 1][n - 1];
}
var two = grid(3, 2);
console.log(two)