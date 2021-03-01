class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');

    this.reset();
    this.timer();
    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  timer() {
    const timerText = document.querySelector(`.timer__text`);
    timerText.textContent = Array.from(document.getElementsByClassName(`symbol`)).length;
    setInterval( () => {
    if (timerText.textContent > 3) {
      timerText.textContent = timerText.textContent - 1;
    } else if (timerText.textContent <= 3 && timerText.textContent > 0) {
      timerText.textContent = timerText.textContent - 1;
      
      timerText.classList.add(`timer_red`);
    } else {
      this.fail();
      timerText.classList.remove(`timer_red`);
      
      timerText.textContent = Array.from(document.getElementsByClassName(`symbol`)).length;
    }
  },1000);
  
  }
  registerEvents() {

    document.addEventListener(`keyup`, (e) => {
      if (e.key.toLowerCase() === this.currentSymbol.textContent.toLowerCase()) {
        this.success();
      } else {
        this.fail();
      }
    });


  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript',
        'lustery',
        'keci'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
        `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))