function jelly(goesWith) {
  return new Promise(function(resolve, reject) {
    if(goesWith) {
      setTimeout(() => resolve('peanut butter'), 500);
    } else {
      setTimeout(() => reject('lonely jelly'), 500);
    }
  })
}

module.exports = jelly;
