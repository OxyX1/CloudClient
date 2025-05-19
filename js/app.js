const appList = [
    { name: 'discord', id: 'discord' },
    { name: 'snapchat', id: 'snapchat' },
    { name: 'google voice', id: 'googlevoice' },
    { name: 'twitter', id: 'twitter' },
    { name: 'instagram', id: 'instagram' }
];

const searchBar = document.getElementById('app-searchbar');
const appButtonsContainer = document.getElementById('app-buttons');

function renderButtons(apps) {
    appButtonsContainer.innerHTML = ''; // Clear previous

    if (apps.length === 0) {
        appButtonsContainer.innerHTML = '<p>No apps found.</p>';
        return;
    }

    apps.forEach(app => {
        const btn = document.createElement('button');
        btn.classList.add('app-btn');
        btn.setAttribute('app-data', app.id);
        btn.textContent = app.name;

        btn.addEventListener('click', () => {
            alert(`You clicked: ${app.name}`);
            // Hook in real app launcher logic here
        });

        appButtonsContainer.appendChild(btn);
    });
}

// Initial load
renderButtons(appList);

// Live search on input
searchBar.addEventListener('input', () => {
    const input = searchBar.value.toLowerCase();

    const filteredGames = appList.filter(app =>
        app.name.toLowerCase().includes(input)
    );

    renderButtons(filteredGames);
});
