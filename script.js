let cart = [];
const mainContainer = document.querySelector(".maincontainer");

const submitButton = document.querySelector(".submit");

const addButton = document.querySelector(".add");

const form = document.querySelector("#form");
const dialog = document.querySelector('#dialog');


function Item(name, brand, price, type) {
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.type = type;
}

Item.prototype.toString = function() {
    return `Name: ${this.name}
    Brand: ${this.brand}
    Price: $${this.price}
    Type: ${this.type}`
}

function addItemToCart(item){
    cart.push(item);
}

function display(item){
    const box = document.createElement("div");
    mainContainer.appendChild(box);
    box.classList.add("box");
    box.innerText = item.toString();

}


addButton.addEventListener("click", () => {
    dialog.showModal();
})


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.querySelector("#name").value;
    const brand = document.querySelector("#brand").value;
    const price = document.querySelector("#price").value;
    const type = document.querySelector("#type").value;


    const newItem = new Item(name, brand, price, type);
    addItemToCart(newItem);
    display(newItem);

    // form.innerHTML = form.innerHTML;
    // form.style.display = "none";
    dialog.close();
});

const cancelButton = form.querySelector('button[value="cancel"]');
cancelButton.addEventListener("click", () => {
    dialog.close();
});