describe('the global helper', function () {

  // INTEGRATION BOUNDARY 1
  it('should return the book title from Meteor settings', function () {
    // SETUP
    var expectedValue = Meteor.settings.public.book.title;

    // EXECUTE
    var actualValue = $('h1').text();

    // VERIFY
    expect(actualValue).toBe(expectedValue);
  });

  // INTEGRATION BOUNDARY 2
  it('should return the book title from Meteor settings object', function () {
    // SETUP
    var expectedValue = Meteor.settings.public.book.title;

    // EXECUTE
    var actualValue = UI._globalHelpers.bookTitle();

    // VERIFY
    expect(actualValue).toBe(expectedValue);
  });

  // INTEGRATION BOUNDARY 3
  it('should put the book title from Meteor settings object in the template', function () {
    // SETUP
    var expectedValue = Meteor.settings.public.book.title;

    // EXECUTE
    var actualValue = $('h1').text();

    // VERIFY
    expect(actualValue).toBe(expectedValue);
  });

});
