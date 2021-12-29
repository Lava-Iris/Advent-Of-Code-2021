function probe(target_x1, target_x2, target_y1, target_y2) {
    //target_x1 < target_x2; target_y1 < target_y2;
      function check(x_speed, y_speed) {
          function next_step() {
              x = x + x_speed;
              y = y + y_speed;
              if (max_y < y) {
                  max_y = y;
              }
              x_speed = x_speed < 0
                        ? x_speed + 1
                        : x_speed > 0
                        ? x_speed - 1
                        : x_speed;
              y_speed = y_speed - 1;
  
              return x > target_x2 || y < target_y1
                      ? false
                      : x >= target_x1 && y <= target_y2
                      ? true
                      : next_step();
          }
          let x = 0;
          let y = 0;
          let max_y = -Infinity;
          return next_step();
      }
  
      let count = 0;
      for (let x_speed = 0; x_speed <= target_x2; x_speed++) {
        for (let y_speed = target_y1; y_speed < -1 * target_y1; y_speed++) {
          if (check(x_speed, y_speed) !== false) {
            count++
          } 
        }
      }
      return count;
  }
  
  //probe(20, 30, -10, -5); //example
  
  probe(111, 161, -154, -101); //input