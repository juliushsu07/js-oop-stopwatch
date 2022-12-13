class Stopwatch {
    constructor (seconds, running, display) {
        this.seconds = 0;
        this.running = false;
        this.display = document.querySelector('main section');
    }

    formatTime(value) {
        let hrs = Math.floor(value/ 3600);
        let mins = Math.floor((value - (hrs * 3600))  / 60);
        let secs = value % 60;
        
        if (secs <10) secs = '0' + secs;
        if (mins <10) mins = '0' + mins;
        if (hrs <10) hrs ='0' + hrs;

        return `${hrs}:${mins}:${secs}`;
    }

    update() {
        if (this.running) {
            this.seconds += 1;
        }
        this.display.innerHTML = this.formatTime(this.seconds)
    }

    start() {
        if (this.running) {
            alert("Stopwatch has already been stareted!")
        }
        
        this.running = true;
        if(!this.interval) {
            let time = this; 
            this.interval = setInterval(function() {time.update()},1000);
        }
    }
        
    stop() {
        if (!this.running) {
            alert("Stopwatch has already been stopped!")
        }
        this.running = false;
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }

    reset() {
        clearInterval(this.interval);
        this.running = false;
        this.seconds=0;
        this.update();
    }
}

stopwatch = new Stopwatch("stopwatch");