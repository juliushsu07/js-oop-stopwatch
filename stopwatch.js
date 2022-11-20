function Stopwatch() {
    let startTime, endTime
    let running = false;
    let duration = 0;   // duration is private for the function, thus not accessable 

    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration;
        }
    })

    this.start = function() {
        if (running) {
            throw new Error("Stop watch has already been stareted!")
        }
        // Get the start time for duration calulation when we stop the watch!
        startTime = new Date();

        // Set running boolean = true, so that the stop watch cannot be started again!
        running = true;
    },

    this.stop = function() {
        if (!running) {
            throw new Error("Stop watch has already been Stopped!")
        }
        // Set this.duration = duration, subtracting startTime from endTime!
        endTime = new Date();
        duration = (endTime.getTime() - startTime.getTime()) /1000 + ' ms'
        
        // Set running boolean = false, so that the stop watch cannot be stopped again!
        running = false;
    },

    this.reset = function() {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    }
}