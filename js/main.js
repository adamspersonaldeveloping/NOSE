document.querySelector('#rando').addEventListener('click', assignButtonValues)
  
function assignButtonValues() {
    let choice = Math.floor(Math.random() * 3)
    // make the button assignment blue, green, purple
    if (choice === 0) {
        // assign each button a class so it knows what code to run to change the background color
        document.querySelector('#buttonOne').addEventListener('click', turnBlue)
        document.querySelector('#buttonTwo').addEventListener('click', turnGreen)
        document.querySelector('#buttonThree').addEventListener('click', turnPurple)
        } 
        else if (choice === 1) {
            document.querySelector('#buttonOne').addEventListener('click', turnGreen)
            document.querySelector('#buttonTwo').addEventListener('click', turnPurple)
            document.querySelector('#buttonThree').addEventListener('click', turnBlue)
        } 
        else if (choice === 2) {
            document.querySelector('#buttonOne').addEventListener('click', turnBlue)
            document.querySelector('#buttonTwo').addEventListener('click', turnGreen)
            document.querySelector('#buttonThree').addEventListener('click', turnPurple)
        }
    }
    
// Function to change the background color
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