const counters = document.querySelectorAll(".counters span");
const container = document.querySelector(".counters");
//Variable that tracks if the counters have been activated
let activated = false;
window.addEventListener ("scroll", () => {
   /*If the page is scrolled to the containers
   element and the counters are not activated*/
   if(
    window.scrollY > container.offsetTop - container.offsetHeight - 200
     && activated === false
   ) {
    counters.forEach(counter => {
        //Set counter values to zero
         counter.innerText = 0;
        /*Set count variable to
         track the count*/
         let count = 0;
         //Update count function
         function updateCount() {
        //Get counter target number to count to
        const target = parseInt(counter.dataset.count);
        if(count < target) {
            //Increment the count
             count++;
            //Set the counter text to the count
             counter.innerText = count;
            //Repeat this every 1 miliseconds
             setTimeout (updateCount, 1); 
        }
        else {
           counter.innertext = target; 
        }
      }
      //Run the function initialy
      updateCount();
      //Set activated to true
      activated = true;
    });
    }
    else if(
        window.scrollY < container.offsetTop - container.offsetHeight - 500 || window.scrollY === 0 && activated === true
    )
    {
        counters.forEach(counter => {
            //Set counter text back to zero
             counter.innerText = 0;
           });
          //Set activated to false
          activated = false;  
    }
   });
