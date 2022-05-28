var logoTextBox  = document.querySelector('.logo-text-box');
var receiveMessageButton = document.querySelector('.receive-message-button');
var textOutput = document.querySelector('#output');
var radioButton = document.querySelector('.radio-button');
// array for radio button for random affimation
var affirmations = []
affirmations[0] = `I forgive myself and set myself free.`;
affirmations[1] = `I believe I can be all that I want to be.`;
affirmations[2] = `I am in the process of becoming the best version of myself.`;
affirmations[3] = `I have the freedom & power to create the life I desire.`;
affirmations[4] = `I choose to be kind to myself and love myself unconditionally.`;
affirmations[5] = `My possibilities are endless.`;
affirmations[6] = `I am worthy of my dreams.`;
affirmations[7] = `I am enough.`;
affirmations[8] = `I deserve to be healthy and feel good.`;
affirmations[9] = `I am full of energy and vitality and my mind is calm and peaceful.`;
affirmations[10] = `Every day I am getting healthier and stronger.`;
affirmations[11] = `I honor my body by trusting the signals that it sends me.`;
affirmations[12] = `I manifest perfect health by making smart choices.`;
//array for radio button for random mantra
var mantras = []
mantras[0] = `Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.`;
mantras[1] = `Don’t let yesterday take up too much of today.`;
mantras[2] = `Every day is a second chance.`;
mantras[3] = `Tell the truth and love everyone.`;
mantras[4] = `I am free from sadness.`;
mantras[5] = `I am enough.`;
mantras[6] = `In the beginning it is you, in the middle it is you and in the end it is you.`;
mantras[7] = `I love myself.`;
mantras[8] = `I am present now.`;
mantras[9] = `Inhale the future, exhale the past.`;
mantras[10] = `This too shall pass.`;
mantras[11] = `Yesterday is not today.`;
mantras[12] = `The only constant is change.`;
mantras[13] = `Onward and upward.`;
mantras[14] = `I am the sky, the rest is weather.`;
//event listener for click event on my receive message button
receiveMessageButton.addEventListener('click', returnSelectedOption);

// function to create random affirmation
function getRandomAffirmation() {
  var randomAffirmation = Math.floor(Math.random()*(affirmations.length));
  document.getElementById('logo-text-box').innerText = affirmations[randomAffirmation];
}
// function to create random mantra
function getRandomMantra() {
  var randomMantra = Math.floor(Math.random()*(mantras.length));
  document.getElementById('logo-text-box').innerText = mantras[randomMantra];
}
// function to return random affirmation or mantra on click of my "receive message" button
function returnSelectedOption() {
  if (document.getElementById('affirmationId').checked) {
    return getRandomAffirmation();
  } else if (document.getElementById('mantraId').checked) {
    return getRandomMantra();
  }
}
