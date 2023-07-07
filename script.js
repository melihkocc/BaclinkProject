const body = document.querySelector("body")
const link = document.getElementById("link")
const form = document.getElementById("form")
const addBacklinkDiv = document.getElementById("addBacklinkDiv")

const websiteName = document.getElementById("websiteName")
const websiteAddress = document.getElementById("websiteAddress")

const containerDiv = document.getElementById("containerDiv")
const rowDiv = document.getElementById("rowDiv")
const xmarkIconForBacklinkDiv = document.getElementById("xmark")
const xmarkIconForLinks = document.querySelectorAll(".xmarkButtons")

let backlinks = [];

link.addEventListener("click",openaddBacklinkDiv)

function openaddBacklinkDiv(){
    body.classList.add("secondBackgroundColor")
    containerDiv.classList.add("d-none")
    setTimeout(() => {
       addBacklinkDiv.classList.remove("noneDiv")
    }, 1000 );
}

form.addEventListener("submit",addBackLink)

function addBackLink(e){

    e.preventDefault();

    if(!websiteAddress.value.trim() && !websiteName.value.trim()){
        alert("Lütfen gerekli alanları doldurunuz.")
        websiteAddress.value = ""
        websiteName.value = ""
    }
    else if(websiteName.value.trim() && !websiteAddress.value.trim()){
        alert("Lütfen geçerli bir website adresi giriniz.")
    }
    else if(!websiteAddress.value.trim().includes(".com")){
        alert("Lütfen geçerli bir website adresi giriniz.")
    }
    else if(websiteAddress.value.trim() && !websiteName.value.trim()){
        alert("Lütfen bir website ismi giriniz.")
    }
    else{
        addBacklinkDiv.classList.add("noneDiv")
        body.classList.remove("secondBackgroundColor")



        const divSm2 = document.createElement("div")
        divSm2.classList.add('col-sm-2','mt-3')

        const cardDiv = document.createElement("div")
        cardDiv.classList.add('card','bg-dark')
        cardDiv.style.width = "8rem"

        const cardBodyDiv = document.createElement("div")
        cardBodyDiv.classList.add("card-body")

        const xmarkİcon = document.createElement("i")
        xmarkİcon.classList.add('fa-solid','fa-xmark','xmarkButtons')

        const h5Etiket = document.createElement("h5")
        h5Etiket.classList.add("mt-4")

        const aEtiket = document.createElement("a")
        aEtiket.classList.add("links")
        if(websiteAddress.value.includes("https")){
            aEtiket.href = `${websiteAddress.value}`
        }else{
            aEtiket.href = `https://${websiteAddress.value}`
        }
        aEtiket.textContent = `${websiteName.value}`
        aEtiket.target = "_blank"

        containerDiv.appendChild(rowDiv)
        rowDiv.appendChild(divSm2)
        divSm2.appendChild(cardDiv)
        cardDiv.appendChild(cardBodyDiv)
        cardBodyDiv.appendChild(xmarkİcon)
        cardBodyDiv.appendChild(h5Etiket)
        h5Etiket.appendChild(aEtiket)
        containerDiv.classList.remove("d-none")

websiteName.value = ""
websiteAddress.value = ""

    }

}

xmarkIconForBacklinkDiv.addEventListener("click",()=>{
    addBacklinkDiv.classList.add("noneDiv")
    body.classList.remove("secondBackgroundColor")
    websiteName.value = ""
    websiteAddress.value = ""
})

rowDiv.addEventListener("click",(e)=>{
    if(e.target.classList.contains("fa-xmark")){
        e.target.parentElement.parentElement.parentElement.classList.add("d-none")
    }
})

function fetchbackBacklinks(){
    if(localStorage.getItem("backlinks")){
        backlinks = JSON.parse(localStorage.getItem("backlinks"))
    }
}