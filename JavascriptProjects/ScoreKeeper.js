const team = {
  _players: [
    {
      firstName: "Alia",
      lastName: "Alvarez",
      age: 14,
    },
    {
      firstName: "Bruce",
      lastName: "Banner",
      age: 16,
    },
    {
      firstName: "Clay",
      lastName: "Cooper",
      age: 18,
    },
  ],
  _games: [
    {
      opponent: "Broncos",
      teamPoints: 42,
      opponentPoints: 27,
    },
    {
      opponent: "Steelers",
      teamPoints: 42,
      opponentPoints: 27,
    },
    {
      opponent: "Dolphins",
      teamPoints: 42,
      opponentPoints: 27,
    },
  ],
  get games() {
    return this._games;
  },
  get players() {
    return this._players;
  },
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };

    this.players.push(player);
  },
  addGame(opp, myPts, oppPts) {
    const game = {
      opponent: opp,
      teamPoints: myPts,
      opponentPoints: oppPts,
    };
    this.games.push(game);
  },
};
team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);

console.log(team.players);

team.addGame("Dolphins", "23", "31");
team.addGame("Giants", "42", "21");
team.addGame("Chargers", "21", "42");

console.log(team.games);
