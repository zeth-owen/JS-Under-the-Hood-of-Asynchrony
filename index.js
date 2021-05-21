
function doWork() {
   return new Promise(resolve => {
        // Create a worker
        const myWorker = new Worker("worker.js");
        
        // Start the worker
        myWorker.postMessage('doWork')

        // Listen for when the worker is finished
        myWorker.onmessage = function(){
            console.log('in here')
            // Resolve the asynchronous process
            resolve()
        }
   })
}

function sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time))
}

let example1Button = document.querySelector('#example-1')
let example2Button = document.querySelector('#example-2')
let example3Button = document.querySelector('#example-3')

example1Button.addEventListener('click', function () {
    exampleOne()
    example1Button.textContent = 'Done!'
})

example2Button.addEventListener('click', function () {
    exampleTwo()
        .then(function () {
            example2Button.textContent = 'Done!'
        })
})

example3Button.addEventListener('click', function () {
    Promise.all(exampleThree())
        .then(function(){
            example3Button.textContent = 'Done!'
        })
})