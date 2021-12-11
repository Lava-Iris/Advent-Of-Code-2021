function octopuses(arr) {
    function seperate(row, index) {
      arr[index] = row.split('').map(Number);
    }
    arr.forEach(seperate);
  
    function step(n) {
      //part 1
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          arr[i][j]++;
        }
      }

      //part 2
      function flash() {
        for (let row = 0; row < 10; row++) {
          for (let col = 0; col < 10; col++) {
            if (arr[row][col] > 9) {
              for (let i = -1; i < 2; i++) {
                for (let j = -1; j < 2; j++) {
                  if (arr[row + i] !== undefined && arr[row + i][col + j] !== undefined && arr[row + i][col + j] !== 'flashed') {
                    arr[row + i][col + j]++;
                  } 
                }
              }
              arr[row][col] = 'flashed';
              flash()
            } 
          }
        }
      }
      flash();

      //part 3
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          if (arr[i][j] === 'flashed') {;
            arr[i][j] = 0;
          }
        }
      }

      if (arr.every(row => row.every(cell => cell === 0))) {
        return n;
      } else {
        return step(n + 1);
      }
    }
    
    return step(1)
  }
  
const input = ['6111821767',
  '1763611615',
  '3512683131',
  '8582771473',
  '8214813874',
  '2325823217',
  '2222482823',
  '5471356782',
  '3738671287',
  '8675226574']
  
const example = ['5483143223',
  '2745854711',
  '5264556173',
  '6141336146',
  '6357385478',
  '4167524645',
  '2176841721',
  '6882881134',
  '4846848554',
  '5283751526']
  
  octopuses(input);