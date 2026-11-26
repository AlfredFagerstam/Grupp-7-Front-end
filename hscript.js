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