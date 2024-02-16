let titelCount = 1;
let totalPrice = 0;
const cards = document.querySelectorAll(".card");
for(const card of cards ){
    card.addEventListener("click", ()=>{
       const title = card.querySelector("h3").innerText;
       const price = parseFloat(card.querySelector("span").innerText.split(" ")[1]);
    //    ppending taitale container
       const titleContainer = document.getElementById("title-container");
      
       const p = document.createElement("p");
       
       p.innerText =titelCount + ". " + title;
       titleContainer.appendChild(p);
       titelCount++;
    //    calculate price
    totalPrice += price;
    document.getElementById("totalPrice").innerText = totalPrice.toFixed(2);
    })    
}
// make discunt price 
document.getElementById("apply-btn").addEventListener("click", ()=>{
    const cupponElement = document.getElementById("input-field").value;
    let cupponCode = cupponElement.split(" ").join("").toUpperCase();
    console.log(cupponCode)

    if (totalPrice >= 200){
        
        if(cupponCode = "SELL200"){
            // discunt calclutaion
            const discuntElement = document.getElementById("discountPrice");
            const discountAmmount = totalPrice * 0.2;
            discuntElement.innerText = discountAmmount.toFixed("2");
            // rest total
            const restTotal = document.getElementById("total");
            restTotal.innerText = totalPrice - discountAmmount.toFixed(2);
            document.getElementById("input-field").value = " "
        }else{
            alert("Invalid Cuppon cod");
            document.getElementById("input-field").value = " ";
        }
    }
    else{
        alert("If you sopping minimum $200 .You got to discunt");
        document.getElementById("input-field").value = " ";
    }
})

document.getElementById("make-prc").addEventListener("click", ()=>{
    const modatbtn = document.getElementById("modat-btn");
    modatbtn.click();
     
    document.getElementById("discountPrice").innerText = " ";
})