module.exports = {
  template: 'this is {{msg}}',
  replace: true,
  data: function () {
    return {
      msg: 'I am component A!'
    }
  }
}