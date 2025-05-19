const gameList = [
    { name: 'roblox', id: 'roblox' },
    { name: 'fortnite', id: 'fortnite' },
    { name: 'minecraft JAVA', id: 'minecraftJ' },
    { name: 'minecraft BEDROCK', id: 'minecrafB' },
    { name: 'rocket league', id: 'rocketleague' }
];

const searchBar = document.getElementById('game-searchbar');
const gameButtonsContainer = document.getElementById('game-buttons');

function renderButtons(games) {
    gameButtonsContainer.innerHTML = ''; // Clear previous

    if (games.length === 0) {
        gameButtonsContainer.innerHTML = '<p>No games found.</p>';
        return;
    }

    games.forEach(game => {
        const btn = document.createElement('button');
        btn.classList.add('game-btn');
        btn.setAttribute('game-data', game.id);
        btn.textContent = game.name;

        btn.addEventListener('click', () => {
            alert(`You clicked: ${game.name}`);
            // Hook in real game launcher logic here
        });

        gameButtonsContainer.appendChild(btn);
    });
}

// Initial load
renderButtons(gameList);

// Live search on input
searchBar.addEventListener('input', () => {
    const input = searchBar.value.toLowerCase();

    const filteredGames = gameList.filter(game =>
        game.name.toLowerCase().includes(input)
    );

    renderButtons(filteredGames);
});
