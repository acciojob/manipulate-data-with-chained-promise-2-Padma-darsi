
    function manipulateArray()
		{
      // Initial promise: resolves after 3 seconds
      new Promise((resolve) => {
        setTimeout(() => {
          resolve([1, 2, 3, 4]);
        }, 3000);
      })
      .then((array) => {
        // Filter even numbers after 1 second
        return new Promise((resolve) => {
          setTimeout(() => {
            const evenNumbers = array.filter(num => num % 2 === 0);
            document.getElementById("output").textContent = evenNumbers.toString();
            resolve(evenNumbers);
          }, 1000);
        });
      })
      .then((evenNumbers) => {
        // Multiply by 2 after 2 seconds
        return new Promise((resolve) => {
          setTimeout(() => {
            const multiplied = evenNumbers.map(num => num * 2);
            document.getElementById("output").textContent = multiplied.toString();
            resolve(multiplied);
          }, 2000);
        });
      });
    }

