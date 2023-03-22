if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    hideDivs();
    getToggleButtons();
    //retrieveAnswers(); //load answers (kinda works)
}

//LOAD CONTENT VIA AJAX
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
    window.scrollTo({top: 0, behavior: 'smooth'}); //scrolls to top
}

//HIDE THE DROPDOWNS WHEN PAGE LOADS
function hideDivs(){
    var hiddenDivs = document.getElementsByClassName('dropdown-text-wrapper')
    for (var i = 0; i < hiddenDivs.length; i++) {
        hiddenDivs[i].style.display = 'none'
    }

    /*var hiddenThings = document.getElementsByClassName('hide-me')
    for (var i = 0; i < hiddenThings.length; i++) {
        hiddenThings[i].style.display = 'none'
    }*/
    //console.log("HID THE DIVS")
}

//INITIALIZE TOGGLE BUTTONS
function getToggleButtons() {
    var toggleButtons = document.getElementsByClassName('toggle-dropdown')
    for (var i = 0; i < toggleButtons.length; i++) {
        var button = toggleButtons[i]
        button.addEventListener('click', toggleClicked)
    }
    //console.log("GOT THE TOGGLES")
}

//SAVE INPUT ANSWERS FROM RADIO BUTTONS
function collectAnswers(...inputName) {
    /*const radioButtons = document.getElementsByName(inputName);
    let selectedValue;

    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            selectedValue = radioButtons[i].value;
            break;
        }
    }

    console.log(selectedValue);*/

    var radioGroups = document.querySelectorAll('.radio-buttons-wrapper');
    var answers = {}; // Define an object to store the answers

    // Loop through each radio button group
    radioGroups.forEach(function(radioGroup, index) {
        var groupName = 'need-' + (index + 1); // Get the name of the radio button group
        var selectedValue = radioGroup.querySelector('input:checked').value; // Get the selected value of the radio button group
        answers[groupName] = selectedValue; // Add the answer to the answers object
    });

    console.log(answers); // Log the answers to the console
    localStorage.setItem('answers', JSON.stringify(answers)); // Store the answers in localStorage
}

// GET ANSWERS FROM STORAGE
function retrieveAnswers(){
    var answers = JSON.parse(localStorage.getItem('answers'));

    // Check if the value for need-1 is "yes"
    if (answers['need-1'] === 'yes') {
        document.querySelector('.hide-me').style.display = 'block'; // Show the element
    }else{
        document.querySelector('.hide-me').style.display = 'none';
    }
}

//SELECT ALL CHECKBOXES
function selectAll(source) {
    checkboxes = document.getElementsByName(source.name);
    for(var i=0, n=checkboxes.length;i<n;i++) {
        checkboxes[i].checked = source.checked;
    }
}

//DISABLE BUTTON UNTIL REQUIRED INPUTS ARE FILLED
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

//TOGGLE HIDE/SHOW DROPDOWNS
function toggleClicked(event) {
    var button = event.target
    const divToShow = button.parentNode.parentNode.querySelector('.dropdown-text-wrapper')
    //console.log(button.parentNode.parentNode.className);
    
    if (divToShow.style.display === 'none') {
        divToShow.style.display = 'block';
    } else {
        divToShow.style.display = 'none';
    }
}