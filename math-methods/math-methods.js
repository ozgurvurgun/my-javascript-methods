var myMath = {
  //factorial//
  factorial: function (par) {
    var i, result;
    i = 1;
    result = 1;
    for (i; i <= par; i++) {
      result *= i;
    }
    return result;
  },
  //absolute value//
  absolute: function (par) {
    var result;
    if (par > 0) {
      return par;
    } else if (par < 0) {
      result = par * -1;
      return result;
    } else if (par == 0) {
      return par;
    }
  },
  //mod//
  //yet "-" numbers not working correctly//
  //works as long as a>b//
  mod: function (par1, par2) {
    var helper;
    while (true) {
      par1 = par1 - par2;
      helper = par1 - par2;
      if (helper < 0) {
        break;
      }
      if (helper == 0) {
        par1 = 0;
        break;
      }
    }
    return par1;
  },
};
