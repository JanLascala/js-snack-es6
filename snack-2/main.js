console.log('hi')

const teams = [
    {
        name: 'name team 1',
        scores: '0',
        penalties: '0',

    },
    {
        name: 'name team 2',
        scores: '0',
        penalties: '0',

    },
    {
        name: 'name team 3',
        scores: '0',
        penalties: '0',

    },
]

teams.forEach(team => {
    team.scores = Math.floor(Math.random() * 10) + 1;
    team.penalties = Math.floor(Math.random() * 10) + 1;
});

console.log(teams);