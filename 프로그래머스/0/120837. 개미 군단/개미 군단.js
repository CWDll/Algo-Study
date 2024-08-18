function solution(hp) {
    let head = Math.floor(hp / 5);
    let middle = Math.floor((hp - head*5) / 3);
    let bottom = hp - head*5 - middle*3;
    
    return head + middle + bottom;
}