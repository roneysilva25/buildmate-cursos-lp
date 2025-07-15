function getTimeLeft(endDate) {
    const todayInMs = new Date().getTime()
    const endDateInMs = endDate.getTime()
    const remaining = endDateInMs - todayInMs
    const timezone = 3

    const daysLeft = remaining/(1000*60*60*24)
    const hoursLeft = (daysLeft - Math.floor(daysLeft))*24 + timezone
    const minutesLeft = (hoursLeft - Math.floor(hoursLeft))*60
    const secondsLeft = (minutesLeft - Math.floor(minutesLeft))*60

    return {
        daysLeft: Math.floor(daysLeft),
        hoursLeft: Math.floor(hoursLeft),
        minutesLeft: Math.floor(minutesLeft),
        secondsLeft: Math.floor(secondsLeft)
    }
}

function updateTimer() {
    const DATE_THE_COURSE_WILL_HAPPEN = new Date("2025-08-07")
    setInterval(() => {
        const timer = getTimeLeft(DATE_THE_COURSE_WILL_HAPPEN)
        document.querySelector("#days").innerHTML = timer.daysLeft
        document.querySelector("#hours").innerHTML = timer.hoursLeft
        document.querySelector("#minutes").innerHTML = timer.minutesLeft
        document.querySelector("#seconds").innerHTML = timer.secondsLeft

        if (DATE_THE_COURSE_WILL_HAPPEN.getTime() - new Date().getTime() <= 0) {
            document.querySelector("#timer").innerHTML = "🎉CURSO EM ANDAMENTO!"
            clearInterval(1)
        }
    }, 1000)
}

updateTimer()