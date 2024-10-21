//index.js

const data = [
    {
      "id": 1,
      "name": "Mr. Cute",
      "image": "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",
      "votes": 0
    },
    {
      "id": 2,
      "name": "Mx. Monkey",
      "image": "https://thumbs.gfycat.com/FatalInnocentAmericanshorthair-max-1mb.gif",
      "votes": 0
    },
    {
      "id": 3,
      "name": "Ms. Zebra",
      "image": "https://media2.giphy.com/media/20G9uNqE3K4dRjCppA/source.gif",
      "votes": 0
    },
    {
      "id": 4,
      "name": "Dr. Lion",
      "image": "http://bestanimations.com/Animals/Mammals/Cats/Lions/animated-lion-gif-11.gif",
      "votes": 0
    },
    {
      "id": 5,
      "name": "Mme. Panda",
      "image": "https://media.giphy.com/media/ALalVMOVR8Qw/giphy.gif",
      "votes": 0
    }
  ];
  
  // Function to load characters
  function loadCharacters() {
    const characterBar = document.getElementById('character-bar');
    const detailedInfoName = document.getElementById('detailed-name');
    const detailedInfoImage = document.getElementById('image');
    const detailedInfoVotes = document.getElementById('vote-count');
  
    data.forEach(character => {
      const span = document.createElement('span');
      span.textContent = character.name;
      span.classList.add('character-name');
      span.onclick = () => {
        detailedInfoName.textContent = character.name;
        detailedInfoImage.src = character.image;
        detailedInfoVotes.textContent = `Votes: ${character.votes}`;
      };
      characterBar.appendChild(span);
    });
  }
  
  // Handle the votes form submission
  const votesForm = document.getElementById('votes-form');
  const voteInput = document.getElementById('vote-input');
  
  votesForm.onsubmit = (event) => {
    event.preventDefault();
    const characterName = document.getElementById('detailed-name').textContent;
    const votesToAdd = parseInt(voteInput.value);
    const character = data.find(char => char.name === characterName);
  
    if (character && !isNaN(votesToAdd)) {
      character.votes += votesToAdd;
      document.getElementById('vote-count').textContent = `Votes: ${character.votes}`;
      voteInput.value = '';
    }
  };
  
  // Load characters when the page is loaded
  window.onload = loadCharacters;
  
  // Handle adding a new character from the form
  const characterForm = document.getElementById('character-form');
  
  characterForm.onsubmit = (event) => {
    event.preventDefault(); // Prevent form submission
  
    const nameInput = document.getElementById('name').value;
    const imageUrlInput = document.getElementById('image-url').value;
  
    if (nameInput.trim() !== '' && imageUrlInput.trim() !== '') {
      const newCharacter = {
        id: data.length + 1,
        name: nameInput,
        image: imageUrlInput,
        votes: 0
      };
  
      data.push(newCharacter);
  
      const characterBar = document.getElementById('character-bar');
      const span = document.createElement('span');
      span.textContent = newCharacter.name;
      span.classList.add('character-name');
      span.onclick = () => {
        document.getElementById('detailed-name').textContent = newCharacter.name;
        document.getElementById('image').src = newCharacter.image;
        document.getElementById('vote-count').textContent = `Votes: ${newCharacter.votes}`;
      };
  
      characterBar.appendChild(span);
      document.getElementById('name').value = '';
      document.getElementById('image-url').value = '';
    }
  };
  
