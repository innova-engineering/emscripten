mergeInto(LibraryManager.library, {
  floaty: function(x, y, z) {
    return -x + y;
  },
  floatyAlone: function(x, y, z) {
    return x - y;
  }
});

