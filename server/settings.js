App = {

  checkSettings: function () {
    try {
      check(Meteor.settings, Match.ObjectIncluding({
        public: Match.ObjectIncluding({
          book: Match.ObjectIncluding({
            title: String
          })
        })
      }));

    } catch (e) {
      console.error(e.message);
      console.error('please start meteor with --settings and include all the required fields.');
      process.exit(1);
    }
  }

};

App.checkSettings();
