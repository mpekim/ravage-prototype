function bookShow(number){
    var url = "booked.html";
    window.location.href = url;
    createShowData(number);
}

function returnToIndex(){
    var url = "index.html";
    window.location.href = url;
}

function createShowData(showNumber){
    const output = document.querySelector("#show");
    output.appendChild(createNumber("Your selected show is: "));
}

function createNumber(number){
    let item = document.createElement('p');
    item.textContent = number;
    return item;
}