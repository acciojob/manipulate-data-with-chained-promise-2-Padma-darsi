
    function manipulateArray() {
      const data = [1, 2, 3, 4];

      // Immediately resolve with data
      Promise.resolve(data)
        .then((array) => {
          // Wait 1 second and filter even numbers
          return new Promise((resolve) => {
            setTimeout(() => {
              const even = array.filter(n => n % 2 === 0);
              document.getElementById("output").textContent = even.toString();
              resolve(even);
            }, 1000);
          });
        })
        .then((evenArray) => {
          // Wait 2 seconds and multiply by 2
          return new Promise((resolve) => {
            setTimeout(() => {
              const doubled = evenArray.map(n => n * 2);
              document.getElementById("output").textContent = doubled.toString();
              resolve(doubled);
            }, 2000);
          });
        });
    }

    // Call the function on load
    manipulateArray();