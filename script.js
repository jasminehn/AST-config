if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    hideDivs();
    getToggleButtons();

    /*
    var hiddenDivs = document.getElementsByClassName('dropdown-text-wrapper')
    for (var i = 0; i < hiddenDivs.length; i++) {
        hiddenDivs[i].style.display = 'none'
    }
    
    var toggleButtons = document.getElementsByClassName('toggle-dropdown')
    for (var i = 0; i < toggleButtons.length; i++) {
        var button = toggleButtons[i]
        button.addEventListener('click', toggleClicked)
        console.log("READY")
    }
    */
    
    /*
    var parentElement = document.querySelector('body') // or any other parent element that exists in the DOM at the time of page load
    parentElement.addEventListener('click', function(event) {
        if (event.target.classList.contains('toggle-dropdown')) {
            toggleClicked(event.target)
        }
        console.log("READY")
    })
    */
    
    //const toggleButtons = document.querySelectorAll('.toggle-button');
    //toggleButtons.forEach(button => {
    //    button.addEventListener('click', function() {
    //        const hiddenDiv = this.parentNode.querySelector('.display-dorpdown-text');
    //        if (hiddenDiv.style.display === 'none') {
    //            hiddenDiv.style.display = 'block';
    //        } else {
    //            hiddenDiv.style.display = 'none';
    //        }
    //    });
    //});
    
}

function hideDivs(){
    var hiddenDivs = document.getElementsByClassName('dropdown-text-wrapper')
    for (var i = 0; i < hiddenDivs.length; i++) {
        hiddenDivs[i].style.display = 'none'
    }
    console.log("HID THE DIVS")
}

function getToggleButtons() {
    var toggleButtons = document.getElementsByClassName('toggle-dropdown')
    for (var i = 0; i < toggleButtons.length; i++) {
        var button = toggleButtons[i]
        button.addEventListener('click', toggleClicked)
    }
    console.log("GOT THE TOGGLES")
}

function collectAnswer(inputName) {
    //const name = document.getElementById("name-input").value;
    // Do something with the name, e.g. store it in a database or update the UI
    // Load the next question dynamically using AJAX, e.g. loadContent('question2.html', 'content-container')
    const radioButtons = document.getElementsByName(inputName);
    let selectedValue;

    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
        selectedValue = radioButtons[i].value;
        break;
        }
    }

    console.log(selectedValue);
}

//LOAD CONTENT
function loadContent(url, containerId) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(containerId).innerHTML = this.responseText;
            ready(); //ready() typically only loads once (when the page is first loaded) which causes dynamically loaded content (ajax) to not be ready
        }
    };
    xhttp.open("GET", url, true);    
    xhttp.send();
}

//SHOW OR HIDE DISPLAY TEXT
/*const toggleButton = document.getElementsByClassName('toggle-button');
const hiddenDiv = document.getElementsByClassName('display-dorpdown-text');

showDiv.addEventListener('click', () => {
    if (hiddenDiv.style.display === 'none') {
        hiddenDiv.style.display = 'block';
    } else {
        hiddenDiv.style.display = 'none';
    }
});*/


function selectAll(source) {
    //console.log("woop");
    checkboxes = document.getElementsByName(source.name);
    for(var i=0, n=checkboxes.length;i<n;i++) {
        checkboxes[i].checked = source.checked;
    }
    //console.log("YEHET");
}

/*function checkInput() {
    const textInput = document.getElementById('project-name');
    const submitButton = document.querySelector('.gold-button');

    textInput.addEventListener('input', function() {
        if (textInput.value.trim().length > 0) {
            submitButton.removeAttribute('disabled');
            submitButton.style.backgroundColor = '#D4AE58'; // Change to non-gray color
        } else {
            submitButton.setAttribute('disabled', true);
            submitButton.style.backgroundColor = 'gray'; // Change to gray color
        }
    });
}*/

//              idk
/*const toggleButtons = document.querySelectorAll('.toggle-button');

toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
        const hiddenDiv = this.parentNode.querySelector('.display-dorpdown-text');
        if (hiddenDiv.style.display === 'none') {
            hiddenDiv.style.display = 'block';
        } else {
            hiddenDiv.style.display = 'none';
        }
        console.log("HELLO?????");
    });
});
*/

function toggleClicked(event) {
    console.log("HELLO...");
    var button = event.target
    //const divToShow = button.parentNode.querySelector('.display-dropdown-text')
    //const divToShow = button.parentElement.querySelector('.display-dropdown-text')
    //const divToShow = button.parentElement.getElementsByClassName('display-dropdown-text')
    const divToShow = button.parentNode.parentNode.querySelector('.dropdown-text-wrapper')
    //console.log(button.parentNode.parentNode.className);
    console.log(divToShow.style.display);
    
    if (divToShow.style.display === 'none') {
        divToShow.style.display = 'block';
    } else {
        divToShow.style.display = 'none';
    }
    console.log("toggled bih");
}

/*function addItemToCart(title, price, imageSrc) {
    var tbodyRef = document.getElementById('cart').getElementsByTagName('tbody')[0]
    
    //cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0];
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            console.log("YEET")
            alert('This item is already added to the cart')
            return
        }
    }

    var cartRow = tbodyRef.insertRow();

    //var cartRow = document.createElement('tr')
    cartRow.classList.add('cart-item')

    var cartRowContents = `
        <tr class="cart-item">
            <td>
                <h1 class="cart-item-title">${title}</h1>
                <img class="item-image" src="${imageSrc}">
                <!--<p>You can tune a guitar, but you can't tuna fish</p>-->
            </td>
            <td class="cart-item-price">${price}</td>
            <td><input class="quantity" type="number" value="1"></td>
            <td class="remove-item"><i class="fa-solid fa-trash"></i></td>
        </tr>
        `

    cartRow.innerHTML = cartRowContents
    //cartItems.append(cartRow)
    cartRow.getElementsByClassName('remove-item')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('quantity')[0].addEventListener('change', quantityChanged)
}*/