// import functions and grab DOM elements
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');
const charNameInput = document.getElementById('charName-input');
const charNameButton = document.getElementById('charName-button');
const charNameEl = document.getElementById('charName');




// set state for how many times the user changes the head, middle, and bottom
// set state for all of the character's catchphrases

let headCount = 0;
let middleCount = 0;
let bottomCount = 0;
const catchphrases = [];
const charNames = [];

charNameButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    const newCharName = charNameInput.value;
    // push the new catchphrase to the catchphrase array in state
    charNames.push(newCharName);
    // clear out the form input's value so it's empty to the user
    charNameInput.value = '';
    // update the dom to show the new catchphrases (refactor to/call displayCatchphrases to do this work)
    displayCharNames();

});

function displayCharNames() {
    charNameEl.textContent = '';
    for (let characterName of charNames) {
        const h2 = document.createElement('h2');

        h2.classList.add('char-name');
        h2.textContent = characterName;

        charNameEl.append(h2);

    }

    // if (charNames.length >= 0) {
    //     charNames.pop();
    // }
    charNames.pop();
    
}


headDropdown.addEventListener('change', () => {
    // get the value of the head dropdown
    let chosenHead = headDropdown.options[headDropdown.selectedIndex].value;
    // increment the head change count state
    headCount++;
    // update the dom for the head (use style.backgroundImage on the bottomEl div instead of trying to set the .src -- it's NOT an img tag!)
    headEl.style.backgroundImage = `url("./assets/${chosenHead}-head.png")`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});


middleDropdown.addEventListener('change', () => {
    // get the value of the middle dropdown
    let chosenMiddle = middleDropdown.options[middleDropdown.selectedIndex].value;
    // increment the middle change count state
    middleCount++;
    // update the dom for the middle (NOTE: use style.backgroundImage on the middleEl div instead of trying to set the .src -- it's NOT an img tag!)
    middleEl.style.backgroundImage = `url("./assets/${chosenMiddle}-middle.png")`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});


bottomDropdown.addEventListener('change', () => {
    // get the value of the bottom dropdown
    let chosenBottom = bottomDropdown.options[bottomDropdown.selectedIndex].value;
    // increment the bottom change count state
    bottomCount++;
    // update the dom for the bottom (NOTE use style.backgroundImage on the bottomEl div instead of trying to set the .src -- it's NOT an img tag!)
    bottomEl.style.backgroundImage = `url("./assets/${chosenBottom}-pants.png")`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    const newCatchphrase = catchphraseInput.value;
    // push the new catchphrase to the catchphrase array in state
    catchphrases.push(newCatchphrase);
    // clear out the form input's value so it's empty to the user
    catchphraseInput.value = '';
    // update the dom to show the new catchphrases (refactor to/call displayCatchphrases to do this work)
    displayCatchphrases();

});

function displayStats() {
    // text content of the reportEl to tell the user how many times they've changed each piece of the state
    reportEl.textContent = `You've changed the head ${headCount} times, the middle ${middleCount} times, and the bottom ${bottomCount} times.`;
}

function displayCatchphrases() {
    // clear out the DOM for the currently displayed catchphrases
    catchphrasesEl.textContent = '';
    // loop through each catchphrase in state
    for (let catchphrase of catchphrases) {
        const pTag = document.createElement('p');

        pTag.classList.add('catchphrase');
        pTag.textContent = catchphrase;

        catchphrasesEl.append(pTag);

    }
    // and for each catchphrase
    // create an HTML element with the catchphrase as its text content
 
    // and append that HTML element to the cleared-out DOM
}
