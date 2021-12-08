function solve(area, vol, input) {
    let cubs = JSON.parse(input);

    const res = [];

    for (let c of cubs) {
        const cubArea = area.apply(c);
        const cubVolume = vol.apply(c);

        res.push({
            area: cubArea,
            volume: cubVolume
        })
    }

    return res;
}

// function solve(area, vol, input) {
//     return JSON.parse(input).map(cub => ({
//         area: area.apply(cub),
//         volume: vol.apply(cub)
//     }));
// }



function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};
