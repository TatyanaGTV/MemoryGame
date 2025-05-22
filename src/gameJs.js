
let card = [
    {id:1, text:'1'},
    {id:2, text:'2'},
    {id:3, text:'3'},
    {id:4, text:'4'},
    {id:5, text:'5'},
    {id:6, text:'6'},
    {id:7, text:'7'},
    {id:8, text:'8'},
    {id:9, text:'9'},
    {id:10, text:'10'},
    {id:11, text:'11'},
    {id:12, text:'12'}
];
    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }

function renderCards(card) {
    const gameContainer = document.getElementById('game');
   // let count = 1
    shuffle(card);
    card.forEach(item => {

        let frontTile = document.createElement('div');
        frontTile.classList.add('tile');
        frontTile.style.display = 'none';
        frontTile.setAttribute('data-id', item.id);
        frontTile.innerText = item.text;
        let backTile = document.createElement('div');
        backTile.classList.add('back');
        backTile.style.display = 'block';
        const cardElement = document.createElement('div');
        cardElement.classList.add('card-block');

// Добавление обработчика клика
        cardElement.addEventListener('click', () => turnOn (item,frontTile,backTile))
        cardElement.appendChild(frontTile);
        cardElement.appendChild(backTile);
        gameContainer.appendChild(cardElement);
    });
    }
renderCards(card);

function turnOn (item,frontTile,backTile) {
    if (backTile.style.display === 'block'){
        backTile.style.display =  'none';
        frontTile.style.display = 'block';

        console.log('1')
    } else{
        backTile.style.display = 'block';
        frontTile.style.display = 'none';

        console.log('2')
    }
}
 //добавить попап в конце игры и анимацию переворота карточек и поздравления в конйе игры


