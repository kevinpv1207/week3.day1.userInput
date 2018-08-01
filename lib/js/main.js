const  button = document.querySelector("#title_input");
button.addEventListener("click", clickListener);

function clickListener(event) {
    event.preventDefault();
    const inputElement = document.querySelector("#username");
    const userInput  = inputElement.value;
    alert(userInput);
}