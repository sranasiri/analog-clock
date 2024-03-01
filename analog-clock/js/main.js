const div=document.getElementById("clock")
const second=document.getElementById("second")
const hour=document.getElementById("hour")
const minute=document.getElementById("minute")
let secondsDegree=6


function seconds(){
        const d=new Date()
        const hourRotation=d.getHours()*30 + d.getMinutes()/ 2
        const minRotation=d.getMinutes()*6
        const secRotation=d.getSeconds()*6
        // console.log(degree)
        hour.style.transform = `rotateZ(${hourRotation}deg)`
        minute.style.transform = `rotateZ(${minRotation}deg)`
        second.style.transform = `rotateZ(${secRotation}deg)`


}
seconds()
setInterval(seconds,1000)