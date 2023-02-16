const actors = [
    { id: 1, name: "Robin Williams" },
    { id: 2, name: "Pedro Pascal" },
    { id: 3, name: "Jennifer Lawrence" }
];

const movies = [
    { id: 1, name: "iRobot", actorId: 1 },
    { id: 2, name: "Goodwill Hunting", actorId: 1 },
    { id: 3, name: "The Pursuit of Happiness", actorId: 2},
    { id: 4, name: "Home Alone", actorId: 3 },
    { id: 5, name: "Parasite", actorId: 4 },
    { id: 6, name: "Typical Rain", actorId: 2 }
]

module.exports = {
    actors,
    movies
}