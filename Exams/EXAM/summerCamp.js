class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {
            'child': 150,
            'student': 300,
            'collegian': 500
        };
        this.listOfParticipants = [];
    };

    registerParticipant (name, condition, money) {
        if(!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw new Error('Unsuccessful registration at the camp.');
        }

        if(this.listOfParticipants.some(n => n.name == name)) {
            return `The ${name} is already registered at the camp.`;
        }

        if(money < 150 && condition == 'child' || money < 300 && condition == 'student' || money < 500 && condition == 'collegian') {
            return 'The money is not enough to pay the stay at the camp.';
        }

        this.listOfParticipants.push({name, condition, power: 100, wins: 0});
        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name) {
        if (!this.listOfParticipants.some(n => n.name == name)) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }

        this.listOfParticipants = this.listOfParticipants.filter(n => n.name !== name);
        return `The ${name} removed successfully.`;
    }

    timeToPlay (typeOfGame, part1, part2) {
        const player1 = this.listOfParticipants.find(p => p.name == part1);
        const player2 = this.listOfParticipants.find(p => p.name == part2);

        if (typeOfGame == 'WaterBalloonFights'){
            if (!player1 || !player2) {
                throw new Error('Invalid entered name/s.');
            }

            if(player1.condition !== player2.condition) {
                throw new Error('Choose players with equal condition.');
            }
            
            if (player1.power > player2.power) {
                player1.wins += 1;
                return `The ${player1.name} is winner in the game ${typeOfGame}.`;
            } else if (player2.power > player1.power) {
                player2.wins += 1;
                return `The ${player2.name} is winner in the game ${typeOfGame}.`;
            } else {
                return 'There is no winner.';
            }

        };

        if (typeOfGame === 'Battleship') {
            if (!player1) {
                throw new Error(`Invalid entered name/s.`);
            }
            player1.power += 20;
            return `The ${player1.name} successfully completed the game ${typeOfGame}.`;
        }

    }

    toString() {
        let result = [`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`];
        this.listOfParticipants
            .sort((a, b) => b.wins - a.wins)
            .forEach(p => result.push(`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`));
        
        return result.join('\n');
    }

}



// class SummerCamp {
//     constructor(organizer, location) {
//         this.organizer = organizer;
//         this.location = location;
//         this.priceForTheCamp = {
//             child: 150,
//             student: 300,
//             collegian: 500
//         };
//         this.listOfParticipants = [];
//     }
 
//     registerParticipant(name, condition, money) {
//         money = Number(money);
// 		if (!this.priceForTheCamp[condition]) {
// 			throw new Error('Unsuccessful registration at the camp.');
// 		}
 
// 		if (this.priceForTheCamp[name]) {
// 			return `The ${name} is already registered at the camp.`;
// 		}
 
// 		if (money < this.priceForTheCamp[condition]) {
// 			return `The money is not enough to pay the stay at the camp.`;
// 		}
 
// 		let participant = {
// 			name,
// 			condition,
// 			power: 100,
// 			wins: 0,
//         };
 
//         this.listOfParticipants.push(participant);
//         return `The ${name} was successfully registered.`;
//     }
 
//     unregisterParticipant(name) {
//         const participant = this.listOfParticipants.find((participant) => participant.name == name);
//         if (participant == undefined) {
//             throw new Error(`The ${name} is not registered in the camp.`);
//         }
 
//         const index = this.listOfParticipants.indexOf(participant);
//         this.listOfParticipants.splice(index, 1);
//         console.log(this.listOfParticipants);
//         return `The ${name} removed successfully.`;
//     }
 
//     timeToPlay(typeOfGame, ...partic) { 
//         if (partic.length == 2) {
//             let part1 = null
//             let part2 = null
//             for (let i = 0; i < this.listOfParticipants.length; i++) {
//                 const partName = this.listOfParticipants[i]['name']
//                 if (partName == partic[0]) {
//                     part1 = this.listOfParticipants[i]
//                 }

//                 if (partName == partic[1]) {
//                     part2 = this.listOfParticipants[i]
//                 }
//             }
//             if (part1 == undefined) {
//                 throw new Error(`Invalid entered name/s.`);
//             }

//             if (part1.condition != part2.condition) {
//                 throw new Error(`Choose players with equal condition.`);
//             }
//             if (typeOfGame == 'WaterBalloonFights') {
    
//                 if (part1.power > part2.power) {
//                     part1.wins += 1;
//                     return `The ${part1.name} is winner in the game ${typeOfGame}.`;
//                 } else if (part2.power > part1.power) {
//                     part2.wins += 1;
//                     return `The ${part2.name} is winner in the game ${typeOfGame}.`;
//                 } else {
//                     return `There is no winner.`;
//                 }
//             }
//         }
    
//         if (partic.length == 1) {
//             const participant = this.listOfParticipants.find((participant) => participant.name == partic[0]);
//             if (participant == undefined) {
//                 throw new Error(`Invalid entered name/s.`);
//             }
 
//             participant.power += 20
//             return `The ${participant.name} successfully completed the game ${typeOfGame}.`;
//         }
 
//     }
 
//     toString() {
//         let result = [];
//         result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`)
 
//         this.listOfParticipants.sort((a, b) => b.wins - a.wins)
 
//         for (const participant of this.listOfParticipants) {
//             result.push(`${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}`);
//         }
 
//         return result.join('\n');
//     }
// }


// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());
