fetch("http://localhost:3000/pups")
.then(resp => resp.json())
.then(data => {
    const dogSummaryDiv = document.querySelector("#dog-info")
    const dogImg = document.createElement("img")
    const h2Tag = document.createElement("h2")
    const isGoodDogButton = document.createElement("button")
    data.forEach(dog => {
        const span = document.createElement("span")
        span.textContent = dog.name
        span.id = dog.id
        document.querySelector("#dog-bar").appendChild(span)
        span.addEventListener("click", e => {        
            dogImg.src = dog.image
            h2Tag.textContent = dog.name
            dog.isGoodDog ? isGoodDogButton.textContent = "Good dog!" : isGoodDogButton.textContent = "Bad dog!"
            dogSummaryDiv.append(dogImg, h2Tag, isGoodDogButton);
        });
    });
    isGoodDogButton.addEventListener("click", e => {
        if (e.target.innerText === "Good dog!"){
            e.target.innerText = "Bad dog!"
        } else {
            e.target.innerText = "Good dog!"
        }
    })
})