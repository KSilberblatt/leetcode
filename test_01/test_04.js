function solution(total_money, total_damage, costs, damages) {
    // write your code in JavaScript (Node.js 8.9.4)
    let my_ratios = new Object();
    let my_ratios2 = new Object();
    for (let i = 0; i < costs.length; i++){
      my_ratios[i] = damages[i] / costs[i];
    }
    for (let i = 0; i < costs.length; i++){
      my_ratios2[i] = damages[i] / (costs[i] * costs[i] / 2);
    }
    let my_keys = Object.keys(my_ratios);
    my_keys.sort(function(a, b) {
        return my_ratios[b] - my_ratios[a];
    });
    let my_keys2 = Object.keys(my_ratios2);
    my_keys.sort(function(a, b) {
        return my_ratios2[b] - my_ratios2[a];
    });
    console.log(my_ratios);
    console.log(my_ratios2);

    let counter = 0;
    let my_cost = 0;
    let my_damage = 0;
    while (my_cost < total_money && counter < costs.length){
      if (costs[my_keys[counter]] + my_cost <= total_money){
        my_damage += damages[my_keys[counter]];
        my_cost += costs[my_keys[counter]];
      }
      if (my_damage >= total_damage){
        return true;
      }
      counter++;
    }
    counter = 0;
    my_cost = 0;
    my_damage = 0;
    while (my_cost < total_money && counter < costs.length){
      if (costs[my_keys2[counter]] + my_cost <= total_money){
        my_damage += damages[my_keys2[counter]];
        my_cost += costs[my_keys2[counter]];
      }
      if (my_damage >= total_damage){
        return true;
      }
      counter++;
    }
    return false;
}



let total_money = 500;
let total_damage = 600;
let costs = [250, 250, 251];
let damages = [300, 300, 599];

console.log(solution(total_money, total_damage, costs, damages));
