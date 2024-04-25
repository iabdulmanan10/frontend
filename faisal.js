document.getElementById("services").addEventListener("click" , ()=>{
     document.getElementById("services").style.backgroundColor = "crimson"
     document.getElementById("services").style.color = "yellow"
})


document.getElementById("services").addEventListener("dblclick" , ()=>{
    document.getElementById("services").style.backgroundColor = "yellow"
    document.getElementById("services").style.color = "crimson"
})


document.getElementById("services").addEventListener("mouseleave" , ()=>{
    document.getElementById("services").style.backgroundColor = "black"
    document.getElementById("services").style.color = "green"
})


document.getElementById("small").addEventListener("mouseleave" , ()=>{
    document.getElementById("small").style.backgroundColor = "black"
    document.getElementById("small").style.color = "green"
})


document.getElementById("dots").style.color = "green"
document.getElementById("dots").style.fontSize = "20px"



// document.getElementById("email").addEventListener("click" , ()=>{
//     document.getElementById("email").style.backgroundColor = "black"
// })


document.getElementById("footer").addEventListener("click" , ()=>{
    document.getElementById("footer").style.color = "green"
})
