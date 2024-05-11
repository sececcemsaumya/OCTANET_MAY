let selectedMood = '';
let moodLogs = [];
let moodCount = {};
let streakCount = 0;
let lastCheckInDate = null;

function logMood(mood) {
    selectedMood = mood;
    moodLogs.push(mood);
    document.getElementById('selectedMood').innerText = `Selected Mood: ${selectedMood}`;
    // Update mood count
    moodCount[mood] = (moodCount[mood] || 0) + 1;

    // Generate personalized recommendation
    generateRecommendation();
}

function viewTrends() {
    // Display mood trends
    let trendsText = 'Your Mood Trends\n\n';
    for (let mood in moodCount) {
        trendsText += `${mood}: ${moodCount[mood]}\n`;
    }
    alert(trendsText);
}

function promptDailyCheckIn() {
    // Prompt user for daily check-in
    let checkInConfirmation = confirm("Would you like to check in on your mood today?");
    if (checkInConfirmation) {
        // Perform daily check-in actions
        // For now, let's just display a message
        const greetings = [
            "Good morning! How are you feeling today?",
            "Hello there! How's your mood today?",
            "Hey! Ready to check in on your mood?",
            "Hi! Let's take a moment to check in on how you're feeling today."
        ];
        const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
        alert(randomGreeting);

        // Check streak
        const currentDate = new Date().toDateString();
        if (currentDate === lastCheckInDate) {
            streakCount++;
        } else {
            streakCount = 1; // Reset streak if not consecutive
        }
        lastCheckInDate = currentDate;
        alert(`Your current streak: ${streakCount} days`);
    } else {
        // If the user skips the check-in, reset the streak
        streakCount = 0;
        lastCheckInDate = null;
    }
}

function generateRecommendation() {
    // Quotes and dialogues related to user's mood based on emoji-based mood trends
    const moodQuotes = {
        '😄': [
            "Life is beautiful. Keep smiling!",
            "You're doing great! Keep up the positive vibes.",
            "Remember, happiness is a choice. Choose to be happy today!",
            "The happiness of your life depends upon the quality of your thoughts.",
            "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful."
        ],
        '😐': [
            "Feeling neutral? Take a moment to reflect and find some inspiration.",
            "It's okay to feel neither good nor bad. Embrace the balance.",
            "Sometimes, the most productive thing you can do is relax and be okay with doing nothing.",
            "Find something that brings you joy today, even if it's something small.",
            "Find balance in the ebb and flow of life's ups and downs.",
            "Embrace the neutrality of this moment and allow yourself to simply be.",
            "Sometimes, the most profound moments come from quiet reflection.",
            "Embrace the neutral ground as a place of calm and serenity.",
            "In the midst of neutrality, there lies an opportunity for self-discovery and growth."
        ],
        '😔': [
            "Feeling down? Remember, tough times don't last, but tough people do.",
            "It's okay to not be okay. Take some time for self-care and recharge.",
            "The sun will shine again after the storm. Hang in there!",
            "Chin up! Better days are coming. You got this!",
            "Every day is a new day, and you'll never be able to find happiness if you don't move on.",
            "Every day may not be good, but there is something good in every day."
        ]
    };

    // Get the mood-specific quotes
    const quotesForMood = moodQuotes[selectedMood];

    // Randomly select a quote
    const randomIndex = Math.floor(Math.random() * quotesForMood.length);
    const selectedQuote = quotesForMood[randomIndex];

    // Display the recommendation
    document.getElementById('recommendation').innerText = `Recommendation: ${selectedQuote}`;
}

// Chatbot functionality
const chatbox = document.getElementById('chatbox');
const inputField = document.getElementById('inputField');
const toggleChatBtn = document.getElementById('toggleChatBtn');

function appendMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.innerText = `${sender}: ${message}`;
    chatbox.appendChild(messageElement);
}

function handleUserInput() {
    const userInput = inputField.value.trim();
    if (userInput !== '') {
        appendMessage(userInput, 'You');
        inputField.value = '';

        // Add chatbot response
        const botResponse = generateBotResponse(userInput);
        appendMessage(botResponse, 'Bot');
    }
}

function generateBotResponse(userInput) {
    // Dummy bot responses based on user input
    const responses = {
        "Hello": "Hi there! How can I assist you today?",
        "How are you?": "I'm just a bot, but I'm here to help you!",
        "How are you": "I'm just a bot, but I'm here to help you!",
        "how are you": "I'm just a bot, but I'm here to help you!",
        "I feel sad": "I'm sorry to hear that. Remember, it's okay to feel sad sometimes. Is there anything specific that's bothering you?",
        "I'm happy": "That's great to hear! Keep spreading positivity!",
        "Thank you": "You're welcome! If you need anything else, feel free to ask.",
        "thank you": "You're welcome! If you need anything else, feel free to ask.",
        "Goodbye": "Goodbye! Take care.",
        "hi":"Hi there! How can I assist you today?",
        "hello":"Hi there! How can I assist you today?",
        "how are you?": "I'm just a bot, but I'm here to help you!",
        "i feel sad": "I'm sorry to hear that. Remember, it's okay to feel sad sometimes. Is there anything specific that's bothering you?",
        "I feel happy": "That's great to hear! Keep spreading positivity!",
        "i feel happy":"That's great to hear! Keep spreading positivity!",
        "I am happy":"That's great to hear! Keep spreading positivity!",
        "bye": "Goodbye! Take care.",
        "Bye": "Goodbye! Take care.",
        "Hi":"Hi there! How can I assist you today?",
        "I feel alone": "Feeling alone can be tough, but remember, you're not truly alone. There are people who care about you and want to support you through this. Take some time for self-care, reach out to loved ones, or consider seeking professional help if you need it. You're stronger than you think, and this feeling won't last forever. Hang in there.",
    };

    // Check if user input matches any predefined responses
    const response = responses[userInput];
    if (response) {
        return response;
    } else {
        return "I'm sorry, I didn't understand that. Can you please rephrase?";
    }
}

inputField.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        handleUserInput();
    }
});

function toggleChat() {
    const chatDisplay = chatbox.style.display;
    if (chatDisplay === 'none' || chatDisplay === '') {
        chatbox.style.display = 'block';
        inputField.style.display = 'block';
        toggleChatBtn.innerText = 'Close Chat';
        inputField.focus(); // Focus on the input field when chat opens
    } else {
        chatbox.style.display = 'none';
        inputField.style.display = 'none';
        toggleChatBtn.innerText = 'Chat with AI';
    }
}

// Gratitude prompts for the Bingo squares
const gratitudePrompts = [
   
];

// Function to shuffle array elements
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to generate a new Bingo board
function generateBoard() {
    const bingoBoard = document.querySelector('.bingo-board');
    bingoBoard.innerHTML = ''; // Clear previous board

    shuffleArray(gratitudePrompts); // Shuffle the prompts

    for (let i = 0; i < 25; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.textContent = gratitudePrompts[i];
        bingoBoard.appendChild(square);
    }
}

// Event listener for generating a new board
document.getElementById('generateBoardBtn').addEventListener('click', generateBoard);

// Initial board generation on page load
generateBoard();

function displayInput(squareNumber) {
    document.getElementById('incident-input').style.display = 'block';
    document.getElementById('save-btn').style.display = 'block';
}

function saveIncident() {
    const incident = document.getElementById('incident-input').value;
    if (incident.trim() !== '') {
        const savedIncidents = document.getElementById('saved-incidents');
        const newIncidentElement = document.createElement('div');
        newIncidentElement.textContent = incident;
        savedIncidents.appendChild(newIncidentElement);
        document.getElementById('incident-input').value = '';
        document.getElementById('incident-input').style.display = 'none';
        document.getElementById('save-btn').style.display = 'none';
        savedIncidents.style.display = 'block';
    }
}
