function lanternfish(arr, day) {
  //sort the fishes in 8 groups depending on the number of days left in its internal timer
  let fishes = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  function sort(count) {
    fishes[count] = fishes[count] + 1;
  }
  arr.forEach(sort)

  //sum function
  let sum = 0;
  function summing(value) {
    sum = sum + value;
  }

  //everyday, the internal timer is updated and so is the sorted array
  let new_fishes = []; 
  function helper(day) {
    new_fishes = [fishes[1],fishes[2],fishes[3],fishes[4],fishes[5],fishes[6],
                      fishes[0]+fishes[7],fishes[8],fishes[0]];
    fishes = new_fishes; 
    
    if (day === 1) {
      fishes.forEach(summing);
      return sum;
    } else {return helper(day - 1);}
  }
  
  return helper(day);
}
lanternfish([2,5,3,4,4,5,3,2,3,3,2,2,4,2,5,4,1,1,4,4,5,1,2,1,5,2,1,5,1,1,1,2,4,3,3,1,
            4,2,3,4,5,1,2,5,1,2,2,5,2,4,4,1,4,5,4,2,1,5,5,3,2,1,3,2,1,4,2,5,5,5,2,3,3,
            5,1,1,5,3,4,2,1,4,4,5,4,5,3,1,4,5,1,5,3,5,4,4,4,1,4,2,2,2,5,4,3,1,4,4,3,4,
            2,1,1,5,3,3,2,5,3,1,2,2,4,1,4,1,5,1,1,2,5,2,2,5,2,4,4,3,4,1,3,3,5,4,5,4,5,
            5,5,5,5,4,4,5,3,4,3,3,1,1,5,2,4,5,5,1,5,2,4,5,4,2,4,4,4,2,2,2,2,2,3,5,3,1,
            1,2,1,1,5,1,4,3,4,2,5,3,4,4,3,5,5,5,4,1,3,4,4,2,2,1,4,1,2,1,2,1,5,5,3,4,1,
            3,2,1,4,5,1,5,5,1,2,3,4,2,1,4,1,4,2,3,3,2,4,1,4,1,4,4,1,5,3,1,5,2,1,1,2,3,
            3,2,4,1,2,1,5,1,1,2,1,2,1,2,4,5,3,5,5,1,3,4,1,1,3,3,2,2,4,3,1,1,2,4,1,1,1,
            5,4,2,4,3], 256)