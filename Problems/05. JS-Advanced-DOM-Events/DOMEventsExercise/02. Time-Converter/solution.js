function attachEventsListeners() {
    const ratios = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    };

    function converter(value, unit) {
        const inDays = value / ratios[unit];
        return {
            days: inDays,
            hours: inDays * ratios.hours,
            minutes: inDays * ratios.minutes,
            seconds: inDays * ratios.seconds
        };
    }

    const daysIn = document.getElementById('days');
    const hoursIn = document.getElementById('hours');
    const minutesIn = document.getElementById('minutes');
    const secondsIn = document.getElementById('seconds');

    // document.getElementById('daysBtn').addEventListener('click', onConvert);
    // document.getElementById('hoursBtn').addEventListener('click', onConvert);
    // document.getElementById('minutesBtn').addEventListener('click', onConvert);
    // document.getElementById('secondsBtn').addEventListener('click', onConvert);
    
    document.querySelector('main').addEventListener('click', onConvert);

    function onConvert(ev) {
        if (ev.target.tagName == 'INPUT' && ev.target.type == 'button') {
            const input = ev.target.parentElement.querySelector('input[type="text"]');

            const time = converter(Number(input.value), input.id);
            daysIn.value = time.days;
            hoursIn.value = time.hours;
            minutesIn.value = time.minutes;
            secondsIn.value = time.seconds;
        }
    }
}