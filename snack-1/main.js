console.log('work')

const bike = [
    {
        type: 'zephyr',
        weight: '30'
    },
    {
        type: 'tundra',
        weight: '60'
    },
    {
        type: 'honeybadger',
        weight: '15'
    },
    {
        type: 'fossil',
        weight: '70'
    }
]

let lightestBike = bike[0];

for (let i = 0; i < bike.length; i++) {
    if (bike[i].weight < lightestBike.weight) {
        lightestBike = bike[i];
    }
}

console.log(lightestBike)




