const loadCars = () => {
    const carsData = data;
    displayCars(carsData);
}
const displayCars = cars => {
    const carsContainer=document.getElementById('cars-container')

    cars.forEach(element => {
        const imgurl='https://i.ibb.co/54WzQjR/Honda.png'
        console.log(element);
        const div=document.createElement('div')
        div.innerHTML=`
        <div class="card bg-white card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src="${element.imageURL?element.imageURL:element.imageURL=imgurl}" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">${element.name}</h2>
                <p>${element.description}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Car Price: ${element.price}</button>
                </div>
            </div>
        </div>
        `
        carsContainer.appendChild(div)
    });
}

loadCars()