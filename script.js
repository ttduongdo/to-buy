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

function addItemToCart(item){
    cart.push(item);
}

function display(name, brand, price, type){
    const box = document.createElement("div");
    mainContainer.appendChild(box);
    box.classList.add("box", "add");
    box.innerText = 
    `Name: ${name}
    Brand: ${brand}
    Price: $${price}
    Type: ${type}`;
    


    for (let i = 0; i<cart.length; i++){
        console.log(cart[i]);
    }
}


addButton.addEventListener("click", () => {
    dialog.showModal();
})


dialog.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.querySelector("#name").value;
    const brand = document.querySelector("#brand").value;
    const price = document.querySelector("#price").value;
    const type = document.querySelector("#type").value;


    const newItem = new Item(name, brand, price, type);
    addItemToCart(newItem);
    display(name, brand, price, type);

    form.innerHTML = form.innerHTML;
    form.style.display = "none";
});

dialog.addEventListener('cancel', () => {
    dialog.close();
})

submit.addEventListener("click", (event) => {
    event.preventDefault();
    dialog.close(); 
  });
