var maxDistance = function(position, m) {
    position = position.sort(a, b => a - b);
    let len = position.length;
    if (m === 2) return position[len - 1] - position[0];
    m -= 2;
    position = position.slice(0, len - 2);
    while (m) {
        let i = dis(position);
    }
};
const dis = function(position) {
    let res = 0;
    let flag = 0;
    for (let i = 1; i < position.length - 1; i++) {
        let distance = Math.min(position[position.length - 1] - position[i], position[i] - position[0]);
        if (distance > res) {
            flag = i;
            res = distance;
        }
    }
    return flag;
}
console.log(minDays(7));