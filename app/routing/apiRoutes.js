var friends = require("../data/friends");

module.exports = function (app) {
  
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function (req, res) {
    let userResponse = req.body.scores;
    let minDiff = 99999;
    let foundFriend;

    for (let i = 0; i < friends.length; i++) {
      let totDiff = 0;
      for (let j = 0; j < userResponse.length; j++) {
        totDiff += Math.abs(friends[i].scores[j] - userResponse[j]);
      }
      if (totDiff <= minDiff) {
        foundFriend = friends[i];
        minDiff = totDiff;
      }
    }
    friends.push(req.body);

    res.json(foundFriend);
  });
};
