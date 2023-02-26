const loadAdvice=()=>{
    fetch('https://api.adviceslip.com/advice')
    .then(res=>res.json())
    .then(data=>displayAdvice(data))
}
const displayAdvice=(advice)=>{
    console.log(advice.slip.id);
    const adviceContainer=document.getElementById('advice-container')
    adviceContainer.innerHTML=`
    <h1 class="text-center text-lime-300 font-semibold">ADVICE # ${advice.slip.id}</h1>
    <p class="font-bold text-white my-5">"${advice.slip.advice}"</p>
    `
}

loadAdvice()