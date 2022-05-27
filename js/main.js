document.querySelector('#rando').addEventListener('click', assignButtonValues)
  
  function assignButtonValues() {
     let choice = Math.floor(Math.random() * 3)
     if (choice === 0) {
         // make the button assignment blue, green, purple 
          // assign each button a class so it knows what code to run to change the background color
          document.querySelector('#buttonOne').addEventListener('click', turnBlue)
          document.querySelector('#buttonTwo').addEventListener('click', turnGreen)
          document.querySelector('#buttonThree').addEventListener('click', turnPurple)
            } else if (choice === 1) {
     // make the button assignment purple, green, blue
          document.querySelector('#buttonOne').addEventListener('click', turnGreen)
          document.querySelector('#buttonTwo').addEventListener('click', turnPurple)
          document.querySelector('#buttonThree').addEventListener('click', turnBlue)
             } else if (choice === 2) {
          // make the button assignment purple, green,   
          document.querySelector('#buttonOne').addEventListener('click', turnBlue)
          document.querySelector('#buttonTwo').addEventListener('click', turnGreen)
          document.querySelector('#buttonThree').addEventListener('click', turnPurple)
             }
            }
    const pageColor = (color) => document.querySelector('body').style.backgroundColor = color
   
    function turnBlue(){
        pageColor('blue')
    }
    function turnGreen(){
        pageColor('green')
    }
    function turnPurple(){
        pageColor('purple')
    }