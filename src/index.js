//index.js
//const baseURL = 'http://localhost:3000/characters'

function fetchCharacters() {
    fetch('http://localhost:3000/characters')

   // Function to fetch and display characters
      .then(response => response.json()) // Convert response to JSON format
      .then(characters => {
        const characterBar = document.getElementById('character-bar'); // Get the character bar div

        // Iterate over each character and create a span element
        characters.forEach(character => {
          const span = document.createElement('span'); // Create a span tag for each character
          span.textContent = character.name;           // Set the character name as the text content
          span.id = `spanks ${character.id}`           // Assign a unique ID to the span
          characterBar.appendChild(span);              // Add the span to the character-bar div
          
          // Add functionality to update display when the character is clicked
          rename(character);
        });
      })
    //.catch(error => console.error('Error fetching characters:', error)); // Error handling
}

// Function to update the main display when a character is clicked
function rename(character) {
    const variab = document.getElementById(`spanks ${character.id}`); // Get the span element by ID
    variab.addEventListener("click", (event) => {
        const chan = document.getElementById('name');       // Get the name display element
        chan.textContent = character.name;                  // Update the name

        const chang = document.getElementById('image');      // Get the image display element
        chang.src = character.image;                        // Update the image source
        chang.alt = character.name;                         // Set the alt text for the image

        const chane = document.getElementById('vote-count'); // Get the vote count display element
        chane.textContent = character.votes;                // Update the vote count
    });
}

// Function to handle vote adding
function addstuff() {
    const chee = document.getElementById('vote-count');  // Get vote count display
    const chehe = document.getElementById('votes');      // Get input for additional votes

    const addvotez = document.getElementById('votes-form'); // Get the form element for voting
    addvotez.addEventListener("submit", (event) => {
        const addition = Number(chee.textContent) + Number(chehe.value); // Add existing votes + new votes
        chee.textContent = addition;                                     // Update vote count in DOM
        event.preventDefault();                                          // Prevent form submission behavior
    });
}

// Function to reset vote count
function resetBtn() {
    const rest = document.getElementById('reset-btn');  // Get reset button
    rest.addEventListener("click", (event) => {
        const vot = document.getElementById("vote-count"); // Get vote count element
        vot.textContent = 0;                              // Reset the vote count to 0
    });
}

// Placeholder function for adding new characters (incomplete)
function addCharacter() {
    const addxters = getElementById("name2"); // This is incomplete and doesn't do anything yet
}

// On window load, initialize the functions
window.onload = () => {
    fetchCharacters();  // Load characters and display them on the page
    addstuff();         // Set up voting functionality
    resetBtn();         // Set up the reset button functionality
    // addCharacter();   // Add character functionality (currently not used)
};


