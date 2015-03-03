describe('the settings checker', function () {

  var _check;
  var _processExit;
  var _consoleError;

  var _msgs; // an array to keep hol of the console.error messages

  beforeEach(function () {
    _msgs = [];
    _check = check;

    // STUB: the exit method to do nothing in this test case
    _processExit = process.exit;
    process.exit = function () {};

    // KEEP: console messages
    _consoleError = console.error;
    console.error = function (msg) {
      _msgs.push(msg);
    };

  });

  afterEach(function () {
    // RESTORE: original console and exit functions
    check = _check;
    console.error = _consoleError;
    process.exit = _processExit;
  });


  it('displays an error to the user if the check fails', function () {

    // SETUP
    check = function () {
      throw new Error('* * * an error message * * *');
    };

    // EXECUTE
    App.checkSettings();

    // VERIFY
    expect(_msgs[0]).toBe('* * * an error message * * *');
    expect(_msgs[1]).toBeDefined();

  });

  it('does not display an error to the user if the check passes', function () {

    // SETUP
    check = function () {};

    // EXECUTE
    App.checkSettings();

    // VERIFY
    expect(_msgs.length).toBe(0);
    
  });
});
