function solve(speed, area) {
    let motorway = 130;
    let interstate = 90;
	let city = 50;
    let residential = 20;

    let diff = 0;
    let speedZone = 0;
    let overLimit = '';

    switch(area) {
        case 'motorway':
            speedZone = motorway;
            break;
        case 'interstate':
            speedZone = interstate;
            break;
        case 'city':
            speedZone = city;
            break;
        case 'residential':
            speedZone = residential;
            break;
    }

    if (speed > speedZone) {
        diff = speed - speedZone;
    }

    if (diff > 0) {
        if (diff <= 20) {
            overLimit = 'speeding';
        } else if (diff <= 40) {
            overLimit = 'excessive speeding';

        } else {
            overLimit = 'reckless driving';
        }

        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedZone} - ${overLimit}`);
    } else {
        console.log(`Driving ${speed} km/h in a ${speedZone} zone`);
    }

    
}

solve (40, 'city')
solve (21, 'residential')
solve (120, 'interstate')
solve(200, 'motorway')