//alert("det funkar")

// fetch("hannaprojekt.json")
//     .then((response) => { return response.json()})
//     .then((projects) => {
//         projects.forEach(project => {
//             writeProjectsToDom(project)
//         })
//     })

const  writeProjectsToDom = (project) => {
    // skapa flex-item
    const tag = document.createElement("div")
    tag.classList.add("flex-item")

    const title = document.createElement("h3")
    title.textContent = project.title;

    const customer = document.createElement("p")
    customer.textContent = project.customer;

    const description = document.createElement("p")
    description.textContent = project.description;

    //lägg till allt i container
    tag.appendChild(title)
    tag.appendChild(customer)
    tag.appendChild(description)

    //bifoga? till flexbox
    document.getElementById("flex-container").appendChild(tag)

}

axios.get("hannaprojekt.json")
    .then((response) => {
	response.data.forEach(project => {
            writeProjectsToDom(project)
        })

})

const images = [
    {src: "images/01-hbildspel.png", alt: "Illustration av textproduktion och publicering av innehåll på en weebplats."},
    {src: "images/02-hbildspel.png", alt: "Illustration av fotografi och bildhantering för digitalt innehåll."},
    {src: "images/03-hbildspel.png", alt: "Illustration av digital marknadsföring och kommunikation i sociala medier."},
    {src: "images/04-hbildspel.png", alt: "Illustration av innehållsplanering och schemaläggning av publicering under en arbetsvecka."},
    {src: "images/05-hbildspel.png", alt: "Illustration av grafisk profil med färgpalett, typografi och designanalys."}
]

let currentImage = 0

const imageSlide = document.getElementById("image-slide")
const prevBtn = document.getElementById("prev")
const nextBtn = document.getElementById("next")

nextBtn.addEventListener("click", () => {
    currentImage++

    if(currentImage >= images.length){
        currentImage = 0
    }

    imageSlide.src = images[currentImage].src
    imageSlide.alt = images[currentImage].alt
})

prevBtn.addEventListener("click", () => {
    currentImage--

    if(currentImage < 0){
        currentImage = images.length -1
    }

    imageSlide.src = images[currentImage].src
    imageSlide.alt = images[currentImage].alt
})