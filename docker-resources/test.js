describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('sample.html', function() {
  it('displays 42', function() {
    browser().navigateTo('/sample.html');
    // This assertion will fail
    expect(element('#content').text()).toBe('43');
  });
});
