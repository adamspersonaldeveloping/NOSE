document.querySelector('#rando').addEventListener('click', assignButtonValues)
  
async function assignButtonValues() {
    const res = await fetch(`/api`)
    const data = await res.json()

    console.log(data)
    // I DON'T THINK I NEED THIS ANY MORE (let choice = Math.floor(Math.random() * 3))
    // make the button assignment blue, green, purple
    if (data.randomNumber === 0) {
        // assign each button a class so it knows what code to run to change the background color
        document.querySelector('#buttonOne').addEventListener('click', turnBlue)
        document.querySelector('#buttonTwo').addEventListener('click', turnGreen)
        document.querySelector('#buttonThree').addEventListener('click', turnPurple)
    } 
    else if (data.randomNumber === 1) {
        document.querySelector('#buttonOne').addEventListener('click', turnGreen)
        document.querySelector('#buttonTwo').addEventListener('click', turnPurple)
        document.querySelector('#buttonThree').addEventListener('click', turnBlue)
    } 
    else if (data.randomNumber === 2) {
        document.querySelector('#buttonOne').addEventListener('click', turnPurple)
        document.querySelector('#buttonTwo').addEventListener('click', turnBlue)
        document.querySelector('#buttonThree').addEventListener('click', turnGreen)
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