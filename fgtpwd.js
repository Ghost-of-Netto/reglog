function myOnClickFn(){
    document.location.href="./index.html";
};


document.querySelector("#button").addEventListener("click", e => {
    e.preventDefault();
    document.getElementById("button").onclick = myOnClickFn();   
}); 

    