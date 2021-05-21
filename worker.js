// This gets invoked when index.js calls 'myWorker.postMessage'
onmessage = function (message) {
    if (message.data === 'doWork') {
        let start = new Date().getTime()
        let now = start;
        while (now < start + 500) {
            now = new Date().getTime()
        }
        // This invokes myWorker.onmessage in index.js
        postMessage('done')
    }
}

