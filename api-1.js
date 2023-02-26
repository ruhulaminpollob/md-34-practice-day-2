
const loadPerson=()=>{
    const data=person.result;
    displayPerson(data)
    
}

const displayPerson=person=>{
    const personContainer=document.getElementById('person-container')
    person.forEach(element => {
        console.log(element);
        const div=document.createElement('div');
        div.innerHTML=`
        <div class="shadow-lg p-5">
            <h1>Person Name:${element.name.common}</h1>
            <h1>age:${element.age}</h1>
            <h1>street:${element.address.street}</h1>
        </div>
        `


        personContainer.appendChild(div)
    });

}
loadPerson()