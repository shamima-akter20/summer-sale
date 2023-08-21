let total = 0;

function handleclick(target){

const selectedItemContainer = document.getElementById("selected-item");


const count = selectedItemContainer.childElementCount;


const itemName = target.childNodes[3].childNodes[3].innerText;
const li = document.createElement('li');
// li.innerText = itemName;

li.innerText = `${count + 1}. ${itemName}`;

selectedItemContainer.appendChild(li);
  
const price = target.childNodes[3].childNodes[5].innerText.split(" ")[0];

total = parseFloat(total)  + parseFloat(price);

document.getElementById("total").innerText = total;


 let discountTotal = total - (total*(20/100));

 let discountTaka = total * (20/100);
 console.log(total);
 if(total > 0){
  document.getElementById('purchase-btn').disabled = false;
 }
if(total >= 200){
  document.getElementById('sale-offer').disabled = false;
 }

 document.getElementById("final-total").innerText = total;

}

// Discount offer price adding part-----------------------------------------------------------------------------
function saleOffer(){
    const saleButton = document.getElementById("sale-offer");
    const inputField = document.getElementById("inputField");

// button enable disable function====================
    const condition = (total > 200);
    
    if (condition == true) {
            saleButton.disabled = false; // Enable the button
          } else {
            saleButton.disabled = true; // Disable the button
          }

        //   console.log("Button is " + (saleButton.disabled ? "disabled" : "enabled"));

//button  input varification========================= 
const inputValue = inputField.value;

if(condition == true){
            if (inputValue === 'SELL200') {
              let discountTaka = total * (20/100);
                document.getElementById("discount-amount").innerText = discountTaka.toFixed(2) ;
               
            } else{
                alert('Wrong Code ');
            }
  }
  if(condition == true){
  let discountTotal = total - (total*(20/100));
  document.getElementById("final-total").innerText = discountTotal; 
}else{
  document.getElementById("final-total").innerText = total;
}
   
}

// purchase button part ( enable disable ) -----------------------------------------------------------------

function toggleModal(){
  const myBtn = document.getElementById("myButton");
   const modalCheckbox = document.getElementById('my_modal_6');
  const con1 = (total>0);

  if(con1 == true){
    myBtn.disabled = false; // Enable the button
  } else {
    myBtn.disabled = true; // Disable the button
  }


}



// reload part-----------------------------------------------------------------------------------------------
const reloadButton = document.getElementById("reloadButton");

        reloadButton.addEventListener("click", function() {
            location.reload(); // Reloads the entire page
        });


       