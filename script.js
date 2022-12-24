var test_arr = [
  [12, "abc", 5, 1],
  [11, "def", 6, 2],
  [10, "ghj", 7, 3],
  [9, "ijk", 8, 4]
];

var manage = {
  mirror: {
    y: function (arr) {
      var output = [];
      for (i = 0; i < arr[0].length; i++) {
        output.push(arr[i].reverse());
      }
      return output;
    },
    x: function (arr) {
      var output = arr.reverse();
      return output;
    }
  },
  rotate: {
    cc: function (arr) {
      var array = arr.reverse();
      var output = array[0].map((_, colIndex) =>
        array.map((row) => row[colIndex])
      );
      return output.reverse();
    },
    c: function (arr) {
      var array = arr[0].map((_, colIndex) => arr.map((row) => row[colIndex]));
      var output = [];
      for (i = 0; i < array.length; i++) {
        output.push(array[i].reverse());
      }
      return output;
    }
  },
  shuffle: function (arr) {
    var a = arr.join().split(",");
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    var output = [];
    for (i = 0; i < arr.length; i++) {
      output.push(a.slice(i * arr[0].length, (i + 1) * arr[0].length));
    }
    return output;
  },
  sortBy: {
    row: function (arr, row) {
      var output = [];
      var list_arr = [];
      var sortBy = [];
      // add numbers
      for (i = 0; i < arr[0].length; i++) {
        var list_arr_temp = [];
        for (j = 0; j < arr.length; j++) {
          list_arr_temp.push(arr[i][j]);
        }
        list_arr_temp.push(i);
        list_arr.push(list_arr_temp);
      }
      // get row
      for (i = 0; i < arr.length; i++) {
        sortBy.push(arr[i][row]);
      }
      sortBy.sort();
      sortBy.sort(function (a, b) {
        return a - b;
      });

      var temp_arr = [];
      var rem_arr = arr;
      for (i = 0; i < sortBy.length; i++) {
        for (j = 0; j < sortBy.length; j++) {
          if (rem_arr[j].indexOf(sortBy[i]) > -1) {
            temp_arr.push(arr[j]);
            rem_arr[j] = [];
          }
        }
      }

      var output = temp_arr;
      return output;
    }
  },
  colum: function () {
    var msg =
      "Not Working Yet!\n If you still need this, do this:\n 1. rotate Array clockwise\n 2. Sort array by row\n 3. Rotate array counter clokwise";
    return msg;
  },
  help: function () {
    var msg =
      "Get further help under: https://github.com/MushroomFX/arr_mngr/blob/main/README.md";
    return msg;
  }
};
