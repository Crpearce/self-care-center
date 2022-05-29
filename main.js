// querySelectors
var logoTextBox  = document.querySelector('.logo-text-box');
var receiveMessageButton = document.querySelector('.receive-message-button');
var radioButton = document.querySelector('.radio-button');
var logo = document.querySelector('.logo')
var textOutput = document.querySelector('.output-view');
var clearButton = document.querySelector('.clear-view').style.display = 'none';

//arrays for random string
var affirmations = [
  `I forgive myself and set myself free.`,
  `I believe I can be all that I want to be.`,
  `I am in the process of becoming the best version of myself.`,
  `I have the freedom & power to create the life I desire.`,
  `I choose to be kind to myself and love myself unconditionally.`,
  `My possibilities are endless.`,
  `I am worthy of my dreams.`,
  `I am enough.`,
  `I deserve to be healthy and feel good.`,
  `I am full of energy and vitality and my mind is calm and peaceful.`,
  `Every day I am getting healthier and stronger.`,
  `I honor my body by trusting the signals that it sends me.`,
  `I manifest perfect health by making smart choices.`,
];

var mantras = [
  `Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.`,
  `Do not let yesterday take up too much of today.`,
  `Every day is a second chance.`,
  `Tell the truth and love everyone.`,
  `I am free from sadness.`,
  `I am enough.`,
  `In the beginning it is you, in the middle it is you and in the end it is you.`,
  `I love myself.`,
  `I am present now.`,
  `Inhale the future, exhale the past.`,
  `This too shall pass.`,
  `Yesterday is not today.`,
  `The only constant is change.`,
  `Onward and upward.`,
  `I am the sky, the rest is weather.`,
];
//event Listeners
receiveMessageButton.addEventListener('click', returnSelectedOption);


//functions
function getRandomAffirmation(array) {
  var randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
    console.log(randomAffirmation);
}

function getRandomMantra(array) {
  var randomMantra = mantras[Math.floor(Math.random() * mantras.length)];
    console.log(randomMantra);
}

function returnSelectedOption(event) {
    logo.classList.add("hidden");
    textOutput.classList.remove("hidden");
  var randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
  var randomMantra = mantras[Math.floor(Math.random() * mantras.length)];
  if (document.getElementById('affirmationId').checked) {
    textOutput.innerText = randomAffirmation;
    document.querySelector('.clear-view').style.display = 'block';
  } else if (document.getElementById('mantraId').checked) {
    textOutput.innerText = randomMantra;
    document.querySelector('.clear-view').style.display = 'block';
  } else if (!document.getElementById('affirmationId').checked && !document.getElementById('mantraId').checked) {
    textOutput.innerText = ' ';
    logo.classList.remove("hidden");
    }
  }
function resetBox() {
  if (document.getElementById('affirmationId' || 'mantraId')) {
    textOutput.innerText = ' ';
    logo.classList.remove("hidden");
    clearButton = document.querySelector('.clear-view').style.display = 'none';
  }
}
