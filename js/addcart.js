
 let ButtonOncart;
 let clickedbutton;


let availableTilapia=50;
let revTilapia=50;
var tilapiaElement = document.getElementById('til');
let tilapianumber = 0;
 let prevtilapia = 0;

let availablenileperch=77;
let revnileperch=77;
var nileperchElement = document.getElementById('nilep');
let nileperchnumber = 0;
 let prevnileperch = 0;

let availablecat=50;
let revcat=50;
var catElement = document.getElementById('cat');
let catnumber = 0;
 let prevcat = 0;

let availablesilver=50;
let revsilver=50;
var silverElement = document.getElementById('silver');
let silvernumber = 0;
 let prevsilver = 0;

let availablelung=50;
let revlung=50;
var lungElement = document.getElementById('lung');
let lungnumber = 0;
 let prevlung = 0;

let availablemud=50;
let revmud=50;
var mudElement = document.getElementById('mud');
let mudnumber = 0;
 let prevmud = 0;

let availablesprat=50;
let revsprat=50;
var spratElement = document.getElementById('sprat');
let spratnumber = 0;
 let prevsprat = 0;

let availableclarias=50;
let revclarias=50;
var clariasElement = document.getElementById('clarias');
let clariasnumber = 0;
 let prevclarias = 0;

let availablebarbel=50;
let revbarbel=50;
var barbelElement = document.getElementById('barbel');
let barbelnumber = 0;
 let prevbarbel = 0;

let availablecarp=10;
let revcarp=10;
var carpElement = document.getElementById('carp');
let carpnumber = 0;
 let prevcarp = 0;

const elements = {
    element:[
        tilapiaElement,
        nileperchElement,
        catElement,
        silverElement,
        lungElement,
        mudElement,
        spratElement,
        clariasElement,
        barbelElement,
        carpElement
    ],

    

    available:[
        availableTilapia,
        availablenileperch,
        availablecat,
        availablesilver,
        availablelung,
        availablemud,
        availablesprat,
        availableclarias,
        availablebarbel,
        availablecarp
    ],

    revElement:[
        revTilapia,
        revnileperch,
        revcat,
        revsilver,
        revlung,
        revmud,
        revsprat,
        revclarias,
        revbarbel,
        revcarp

    ],

    elementnumber:[
        tilapianumber,
        nileperchnumber,
        catnumber,
        silvernumber,
        lungnumber,
        mudnumber,
        spratnumber,
        clariasnumber,
        barbelnumber,
        carpnumber
    ],

    prevElement :[
        prevtilapia,
        prevnileperch,
        prevcat,
        prevsilver,
        prevlung,
        prevmud,
        prevsprat,
        prevclarias,
        prevbarbel,
        prevcarp
    ],
    hideElement : {
        id1:["ugx0","ugx1","ugx2","ugx3","ugx4","ugx5","ugx6","ugx7","ugx8","ugx9"],
        id3:["one-halfblock0","one-halfblock1","one-halfblock2","one-halfblock3",
            "one-halfblock4","one-halfblock5","one-halfblock6","one-halfblock7","one-halfblock8","one-halfblock9"],
        id4:["imageblock0","imageblock1","imageblock2","imageblock3","imageblock4","imageblock5",
        "imageblock6","imageblock7","imageblock8","imageblock9"],
        id5:["priceblock0","priceblock1","priceblock2","priceblock3","priceblock4","priceblock5",
        "priceblock6","priceblock7","priceblock8","priceblock9"],
        id6:["paddingblock0","paddingblock1","paddingblock2","paddingblock3",
        "paddingblock4","paddingblock5","paddingblock6","paddingblock7","paddingblock8","paddingblock9"]
    }
}

const password ="wwww";

// SELECT ELEMENTS
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}


function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('add-cart')
    
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    

    }

    document.getElementsByClassName('confirm-btn')[0].addEventListener('click', purchaseClicked)
}

function adminLogin(){
    let pssdElement = document.getElementById("password").value;
    let availabeElement = document.getElementById("available");
    let wrongpassword = document.getElementById("wrong");
    let quantityincrement = document.getElementsByClassName('available')
    
    
   if(pssdElement===password){
    
     availabeElement.hidden= false;
     wrongpassword.hidden = true;

       for (var i = 0; i < quantityincrement.length; i++) {
        var input = quantityincrement[i];
    

        input.addEventListener('change',event => {
            var input = event.target
           
            
            var newquantity;
            var current= parseFloat(input.value);
            
           if(input.value >= 1){
            // elements.available[0] += 1;
            // elements.available[0] +=(parseFloat(input.value)-previous);
            // elements.available[0] = previous + parseFloat(input.value);
             const previous = elements.available[0] ;
            
            elements.available[0] ++;
            changeitems++;
        

            console.log(input.value);
           console.log(elements.available[0]);

        }

        });
        if(changeitems>0){
            changekilograms();
        }
        }

    } 
   else{
    wrongpassword.innerHTML =`Enter Right Admin password.`;
    availabeElement.hidden= true;
    wrongpassword.hidden = false;
   
   }
}
function purchaseClicked() {
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    elements.elementnumber[ButtonOncart] = 0;
    elements.available[ButtonOncart] = elements.revElement[ButtonOncart]
    elements.prevElement[ButtonOncart]= 0;
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
    deleteupdate(ButtonOncart)
    ButtonOncart = -1;
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    else if(input.value >= elements.revElement[ButtonOncart]){
         
        input.value = elements.revElement[ButtonOncart];
        

    }

    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('product-name')[0].innerText
    var price = shopItem.getElementsByClassName('product-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('img-fluid')[0].src
    

     for(i=0;i<10;i++){
         if(button == document.getElementById(`${i}`)){
             clickedbutton = i;
        
         }
     }

    addItemToCart(title, price, imageSrc)
    updateCartTotal()
    
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            
            return
        }
    }
   ButtonOncart = clickedbutton;
  var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image img-fluid" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)

    
}

 function updateCartTotal() {
    let expquantity;
    let c = 0;
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')

    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
       
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
         expquantity = quantity;
        total = total + (price * quantity)
        c++;
       
     
    }
    total = Math.ceil((Math.round(total * 100) / 100)/3600)
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total

     if(c>0){
        
         for(k = 0; k<10 ; k++) {
             if(k === ButtonOncart){
               updatelement(elements.element[k],elements.available[k],expquantity,
                 elements.elementnumber[k],elements.prevElement[k]  )
                 c--;
             }
        
         }
    }
  
}

for(i = 0; i<10 ;i++){
    if(elements.elementnumber[i] === 0){

     elements.element[i].innerHTML = `${elements.available[i]}`;

    }
}

function changekilograms(){
    for(i = 0; i<10 ;i++){
        if(elements.elementnumber[i] === 0){
    
         elements.element[i].innerHTML = `${elements.available[i]}`;
    
        }
    }

}

function deleteupdate(cartbutton){
    for(i = 0; i<10 ;i++){
        if(i === cartbutton){
    
         elements.element[i].innerHTML = `${elements.available[i]}`;
    
        }
    }

}


function updatelement(Element,available,quantity,Elementnumber,prevElement){

    
    if(quantity == 1){
        Elementnumber = 1;
        updatespecies(Element,available,Elementnumber,prevElement)

        prevElement = 1;

        }
         else if(quantity > 1){
            Elementnumber = quantity;
            updatespecies(Element,available,Elementnumber,prevElement)
            prevElement = quantitynumber;
            
            
        }

}


function updatespecies(Element,available,Elementnumber,prevElement) {
    if(Elementnumber == 0){
        Element.innerHTML = `${available} `;
    }
    
    else if(Elementnumber == 1 || Elementnumber > 1){
        let difference = Elementnumber - prevElement;
        
            if(difference == 1 || difference == -1){
            available += difference == 1 ? -1 : 1 ;
            }
            else {
                available -= difference;
            }



             Element.innerHTML = `${available} `; 
        
            }
            
            
            
             if(available == 0){
            document.getElementById(`${ButtonOncart}`).hidden=true;
            document.getElementById(`${elements.hideElement.id1[ButtonOncart]}`).hidden = true;
            document.getElementById(`${elements.hideElement.id3[ButtonOncart]}`).hidden = true;
            document.getElementById(`${elements.hideElement.id4[ButtonOncart]}`).hidden = true;
            document.getElementById(`${elements.hideElement.id5[ButtonOncart]}`).hidden = true;
            document.getElementById(`${elements.hideElement.id6[ButtonOncart]}`).style.padding ="0px";

            }
             else if(available < 0){
                document.getElementById(`${ButtonOncart}`).hidden=true;
                document.getElementById(`${elements.hideElement.id1[ButtonOncart]}`).hidden = true;
                document.getElementById(`${elements.hideElement.id3[ButtonOncart]}`).hidden = true;
                document.getElementById(`${elements.hideElement.id4[ButtonOncart]}`).hidden = true;
                document.getElementById(`${elements.hideElement.id5[ButtonOncart]}`).hidden = true;
                document.getElementById(`${elements.hideElement.id6[ButtonOncart]}`).style.padding ="0px";
            }
             else{
                document.getElementById(`${ButtonOncart}`).hidden = false;
                document.getElementById(`${elements.hideElement.id1[ButtonOncart]}`).hidden = false;
                document.getElementById(`${elements.hideElement.id3[ButtonOncart]}`).hidden = false;
                document.getElementById(`${elements.hideElement.id4[ButtonOncart]}`).hidden = false;
                document.getElementById(`${elements.hideElement.id5[ButtonOncart]}`).hidden = false;
                document.getElementById(`${elements.hideElement.id6[ButtonOncart]}`).style.padding ="15px";

             }
                

    
}




