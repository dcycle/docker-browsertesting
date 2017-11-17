// Be descriptive with titles here. The describe and it titles combined read like a sentence.
var assert = require('assert');
describe('Users factory', function() {
  it('has a dummy spec to test 2 + 2', function() {
    // An intentionally failing test. No code within expect() will never equal 4.
    // Adding code to expect()
    assert.equal(2 + 2, 4);
  });
});
describe('Users factory', function() {
  it('has a dummy spec to test 2 + 2', function() {
    // An intentionally failing test. No code within expect() will never equal 4.
    // Adding code to expect()
    browser.get('http://www.yahoo.com');
    expect(2 + 2).toEqual(4);
  });
});
//
// casper.test.begin('Test Google.com', 2, function(test) {
//   casper.start('http://google.com', function() {
//     this.fill('form[action="/search"]', {
//       'q': 'javascript'
//     }, true);
//   });
//
//   casper.then(function() {
//     test.assertTitleMatch(/^.*javascript.*$/, 'Google search results page doesnt have expected title');
//     test.assertTitleMatch(/^.*Google.*$/, 'Google search results page doesnt have expected title');
//   });
//
//   casper.run(function() {
//     test.done();
//   });
// });
