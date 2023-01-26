// Random Message Generator
// Afternoon tea planner


// Array of partial sentence constructors
const preposal = [
    "Would you like",
    "How do you fancy",
    "How about",
    "I'm thinking more like",
    "I fancy",
    "Something like",
    "Considered",
    "Would you enjoy",
    "I like the sound of",
    "I think you would like",
];
const tea = [
    "English breakfast tea",
    "chamomile tea",
    "white tea",
    "oolong tea",
    "green tea",
    "tea with biscuits",
    "tea and scones",
    "afternoon tea",
    "a mug of tea",
    "a spot of tea",
];
const location = [
    "at yours?",
    "at mine?",
    "at Starbucks?",
    "at coffee #1?",
    "at the cafe?",
    "at home?",
    "by the river?",
    "at the park?",
    "at Costa?",
    "in town?",
];
// Function for random number between 0-.length, that takes the length of the array as an argument so that any updates to the number of choices is taken into account.
function random(len) {
    return (Math.floor(Math.random() * len));
}
// Sentence construction with random number for each constructor.
console.log(`${preposal[random(preposal.length)]} ${tea[random(tea.length)]} ${location[random(location.length)]}`);