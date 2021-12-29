//Looks through html for ALL items with this class (returns a node list - like an array)
const counters = document.querySelectorAll('.metric-heading');

window.onscroll = function() {
  scrollFunction()
};

const updateInc = (target, count) => {
  if (target == 1500) {
    addDollar = true;
    inc = 4;
    incTimeout = 3.5;
    addPlus = false;
  } else if (target == 5) {
    addDollar = false;
    inc = 1;
    incTimeout = 800;
    addPlus = false;
  } else if (target == 75) {
    addDollar = false;
    inc = 1;
    incTimeout = 50;
    addPlus = true;
  } else {
    addDollar = false;
    inc = 5
    incTimeout = 10;
    addPlus = true;
  }

  return [addDollar, inc, incTimeout, addPlus];
}

function scrollFunction() {
  if (document.documentElement.scrollTop > 200) {
    //loop through the node list counter
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');

        if (target == 1500) {
          count = +counter.innerText.substring(1);
        } else {
          count = +counter.innerText;
        }

        arr = updateInc(target, count);

        if (count < target && arr[0]) {
          counter.innerText = "$" + (count + arr[1]).toString();
          //After 1 ms, call updateCount
          setTimeout(updateCount, arr[2]);
        } else if (count < target && !arr[0]) {
          counter.innerText = count + arr[1];
          setTimeout(updateCount, arr[2]);
        } else {
          if (arr[3]) {
            counter.innerText = counter.getAttribute('data-target') + "+";
          } else if (arr[0]) {
            counter.innerText = "$" + counter.getAttribute('data-target');
          } else {
            counter.innerText = target;
          }
        }
      }
      updateCount();
    });
  }
}
