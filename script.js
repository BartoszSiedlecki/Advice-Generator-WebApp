const button = document.querySelector(".roll")
var rot = 360

const fetchAdvice = async() => {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()
        
    document.querySelector(".number").innerHTML = data.slip.id
    document.querySelector(".advice").innerHTML = data.slip.advice
}

button.addEventListener("click", () => {
    rot += 360
    button.style.transform = "translateY(35px) rotate("+rot+"deg)"
    button.classList.add("active")
    setTimeout(() => {
        button.classList.remove("active")
    }, 1000);
    fetchAdvice()   
})
    
fetchAdvice()