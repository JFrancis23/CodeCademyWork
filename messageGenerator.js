// Random Message Generator
// Afternoon tea planner

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
    "at coffee 1?",
    "at the cafe?",
    "at home?",
    "by the river?",
    "at the park?",
    "at Costa?",
    "in town?",
];

function random() {
    return (Math.floor(Math.random() * 10));
}

console.log(`${preposal[random()]} ${tea[random()]} ${location[random()]}`);