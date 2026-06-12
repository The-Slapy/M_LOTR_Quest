const masterDeck = [
    { id: 1, isSecret: true, esDesc: "Mantén esta carta en secreto. Juégala en cualquier momento. Evades a los guardias y escalas las rocas para encender la almenara de Minas Tirith.", esRew: "La esperanza se enciende. Añade un puesto de avanzada a cualquier conjunto de propiedades completo que poseas.", enDesc: "Keep this card secret. Play at any times. You evade the guards and scale the rocks to light the beacon at Minas Tirith.", enRew: "Hope is kindled, add an outpost to any complete property set you own." },
    { id: 2, isSecret: true, esDesc: "Mantén esta carta en secreto. Juégala en cualquier momento. ¡Abraza el poder del Anillo o abraza tu propia destrucción!", esRew: "Obliga a un jugador a pagarte el alquiler de todas las propiedades que poseas de uno de estos colores: Azul / Rojo / Amarillo.", enDesc: "Keep this card secret. Play at any times. Embrace the power of the ring or embrace your own destruction!", enRew: "Force one player to pay you rent for all properties you own in one of these colors: Blue / Red / Yellow." },
    { id: 3, isSecret: true, esDesc: "Mantén esta carta en secreto. Juégala en cualquier momento. Derribé a mi enemigo y arrojé sus restos sobre la ladera de la montaña.", esRew: "Roba cualquier propiedad a cualquier jugador. No puedes tomar una propiedad que sea parte de un conjunto completo.", enDesc: "Keep this card secret. Play at any times. I threw down my enemy and smote his ruin upon the mountainside.", enRew: "Steal any one property from any player. You may not take a property that is part of a complete set." },
    { id: 4, isSecret: false, esDesc: "Las flechas dan en el blanco mientras entras en acción para derribar a un olifante tú solo.", esRew: "Cobra <span class='m-coin'>M</span>1.", enDesc: "Arrows hit their mark as you swing into action to single-handedly take down an oliphaunt.", enRew: "Collect <span class='m-coin'>M</span>1." },
    { id: 5, isSecret: false, esDesc: "Los muertos invaden la ciudad sitiada de Minas Tirith y arrollan a los ejércitos de Mordor.", esRew: "Cobra <span class='m-coin'>M</span>1.", enDesc: "The dead swarm the besieged city of Minas Tirith and overwhelm the armies of Mordor.", enRew: "Collect <span class='m-coin'>M</span>1." },
    { id: 6, isSecret: false, esDesc: "Deja de lado al Montaraz. Conviértete en quien naciste para ser.", esRew: "Cobra <span class='m-coin'>M</span>1 de cada jugador.", enDesc: "Put aside the Ranger. Become who you were born to be.", enRew: "Collect <span class='m-coin'>M</span>1 from each player." },
    { id: 7, isSecret: false, esDesc: "La magia de Saruman te empuja a través de las Minas de Moria, donde te esperan orcos y un troll de las cavernas enfurecido.", esRew: "Paga <span class='m-coin'>M</span>1.", enDesc: "Saruman's magic forces you through the Mines of Moria, where orcs and a raging cave troll await.", enRew: "Pay <span class='m-coin'>M</span>1." },
    { id: 8, isSecret: false, esDesc: "Desenvainas tu espada y sofocas el frenético ataque de Gollum a tu amigo bajo la pálida luz de la luna.", esRew: "Cobra <span class='m-coin'>M</span>1.", enDesc: "You draw your sword and quell Gollum's frenzied attack on your friend in the pale moonlight.", enRew: "Collect <span class='m-coin'>M</span>1." },
    { id: 9, isSecret: false, esDesc: "¡No puedes pasar!", esRew: "Retrocede tres casillas.", enDesc: "You shall not pass!", enRew: "Go back three spaces." },
    { id: 10, isSecret: false, esDesc: "Arrojas a un Balrog a un gran abismo, pero su látigo ardiente te arrastra hacia la oscura fosa.", esRew: "Paga a cada jugador <span class='m-coin'>M</span>1.", enDesc: "You plunge a Balrog into a great chasm, but its fiery whip drags you into the dark abyss.", enRew: "Pay each player <span class='m-coin'>M</span>1." },
    { id: 11, isSecret: false, esDesc: "Escuchas una voz cruel en el aire mientras caminas con dificultad a través de la nieve cegadora en lo alto de las montañas.", esRew: "Avanza al Paso de Caradhras. Si pasas por la Salida, cobra <span class='m-coin'>M</span>2.", enDesc: "You hear a fell voice on the air while trudging through blinding snow high up in the mountains.", enRew: "Advance to the pass of Caradhras. If you pass Go, Collect <span class='m-coin'>M</span>2." },
    { id: 12, isSecret: true, esDesc: "Escapa de Saruman saltando desde la Torre de Orthanc sobre el lomo de una Gran Águila.", esRew: "Sal de la cárcel gratis. Esta carta puede conservarse, intercambiarse o venderse.", enDesc: "Escape Saruman by leaping from the Orthanc Tower onto the back of a great Eagle.", enRew: "Get out of jail Free. This card may be kept until needed, traded, or sold." },
    { id: 13, isSecret: true, esDesc: "Mantén esta carta en secreto. Juégala en cualquier momento. Pon tus manos sobre una palantir y vislumbra los planes del Enemigo mientras tus compañeros duermen.", esRew: "Cancela una carta de misión que se juegue en tu contra.", enDesc: "Keep this card secret. Play at any times. Place your hands on a palantir and glimpse the enemy's plan while your companions sleep.", enRew: "Cancel a quest card that is played against you." },
    { id: 14, isSecret: false, esDesc: "Repeles a los Jinetes de Huargos para mantener a salvo al pueblo de Rohan en su huida hacia el Abismo de Helm.", esRew: "Cobra <span class='m-coin'>M</span>1.", enDesc: "You repel Warg Riders to keep the people of Rohan safe on their flight to Helm's Deep.", enRew: "Collect <span class='m-coin'>M</span>1." },
    { id: 15, isSecret: false, esDesc: "Tus captores huelen carne humana, ¡lo que significa que tus amigos han seguido tu rastro!", esRew: "Avanza a la Salida. Cobra <span class='m-coin'>M</span>2.", enDesc: "Your captors can smell man-flesh, which means that your friends have picked up your trail!", enRew: "Advance to Go. Collect <span class='m-coin'>M</span>2." },
    { id: 16, isSecret: false, esDesc: "Saruman te encarcela en la cima de Orthanc tras abandonar la razón por la locura.", esRew: "Ve directamente a la Cárcel. No pases por la Salida. No cobres <span class='m-coin'>M</span>2.", enDesc: "Saruman imprisons you at the summit of Orthanc after abandoning reason for madness.", enRew: "Go directly to Jail. Do not pass Go. Do not collect <span class='m-coin'>M</span>2." },
    { id: 17, isSecret: false, esDesc: "Blande a Andúril, la Llama del Oeste, para convocar a un ejército más letal que cualquier otro que camine sobre esta tierra.", esRew: "Avanza al siguiente Fragmento de Narsil. Si no tiene dueño, cómpralo al banco. Si tiene dueño, tira los dados y paga el alquiler.", enDesc: "Wield Anduril the Flame of the West to summon an army more deadly than any that walks this earth.", enRew: "Advance to the next Shard of Narsil. If unowned, you may buy it from the bank. If owned, roll the dice, and pay the owner that amount." },
    { id: 18, isSecret: false, esDesc: "Ella-Laraña te clava su aguijón y te quedas tan inerte como un pez sin espinas.", esRew: "Paga <span class='m-coin'>M</span>1.", enDesc: "Shelob jabs you with her stinger, and you go as limp as a boned fish.", enRew: "Pay <span class='m-coin'>M</span>1." },
    { id: 19, isSecret: false, esDesc: "Tras una épica persecución a caballo, Arwen desafía a los Espectros del Anillo en el vado del río para protegerte.", esRew: "Cobra <span class='m-coin'>M</span>1.", enDesc: "Following an epic chase on horseback, Arwen defies the Ringwraiths at the river to protect you.", enRew: "Collect <span class='m-coin'>M</span>1." },
    { id: 20, isSecret: false, esDesc: "¡Flaqueas con el Anillo sobre los fuegos del Monte del Destino y Gollum te arranca el dedo de un mordisco!", esRew: "Paga <span class='m-coin'>M</span>1.", enDesc: "You falter with the Ring above the fires of Mount Doom, and Gollum bites off your finger!", enRew: "Pay <span class='m-coin'>M</span>1." },
    { id: 21, isSecret: false, esDesc: "Bárbol aplasta a tu sanguinario perseguidor y luego te lleva a encontrarte con un viejo amigo.", esRew: "Cobra <span class='m-coin'>M</span>1.", enDesc: "Treebeard stomps on your bloodthirsty pursuer, then carries you off to meet an old friend.", enRew: "Collect <span class='m-coin'>M</span>1." },
    { id: 22, isSecret: false, esDesc: "Un ataque sorpresa de los Ents destruye la presa y arrasa con la Horda de Saruman.", esRew: "Avanza a Isengard. Si pasas por la Salida, cobra <span class='m-coin'>M</span>2.", enDesc: "A surprise attack by the Ents destroys the dam and washes the Horde of Saruman away.", enRew: "Advance to Isengard. If you pass Go, Collect <span class='m-coin'>M</span>2." },
    { id: 23, isSecret: false, esDesc: "Siegas a un grupo de Uruk-hai con tu hacha de batalla durante una escaramuza en Amon Hen.", esRew: "Cobra <span class='m-coin'>M</span>1.", enDesc: "You scythe through a group of Uruk-hai with your battle-axe during a skirmish at Amon Hen.", enRew: "Collect <span class='m-coin'>M</span>1." },
    { id: 24, isSecret: false, esDesc: "Una Gran Águila te atrapa entre sus garras y te aleja de los flujos de lava del Monte del Destino.", esRew: "Avanza a la Salida. Cobra <span class='m-coin'>M</span>2.", enDesc: "A great Eagle sweeps you up in its talons and flies you away from the lava flow on Mount Doom", enRew: "Advance to go. Collect M2" },
    { id: 25, isSecret: true, esDesc: "Mantén esta carta en secreto. Juégala en cualquier momento. Saruman envenena la mente del rey de Rohan y reclama el señorío sobre sus tierras.", esRew: "Roba un conjunto completo de propiedades a cualquier jugador, incluyendo cualquier edificio.", enDesc: "Keep this card secret. Play at any times. Saruman poisons the mind of the king of Rohan and claims lordship over his lands", enRew: "Steal a complete set of properties from any player. including any buildings." },
    { id: 26, isSecret: false, esDesc: "Un ejército de arqueros Élficos marcha hacia el Abismo de Helm para luchar a tu lado contra los Uruk-hai.", esRew: "Coloca una fortaleza en cualquier ubicación de un conjunto de propiedades completo que poseas.", enDesc: "An army of Elven archers marches into Helm's Deep to fight alongside you against the Uruk-hai.", enRew: "Place one fortress on any location in any complete property set you own" },
    { id: 27, isSecret: false, esDesc: "Una luz blanca de tu vara ahuyenta a los Nazgûl mientras los soldados de Gondor se retiran hacia Minas Tirith.", esRew: "Avanza a la siguiente Arma. Si no tiene dueño, puedes comprarla al Banco. Si tiene dueño, paga el doble del alquiler correspondiente.", enDesc: "A white light from your staff wards off the Nazgul as Gondor's soldiers retreat to Minas Tirith", enRew: "Advance to the next weapon. If unowned, you may buy it from the Bank. If owned, pay the owner twice the rent to which they are otherwise entitled." },
    { id: 28, isSecret: false, esDesc: "¡Blande una antorcha y ataca con tu espada para defenderte de la oscura amenaza del Rey Brujo de Angmar!", esRew: "Avanza a la Hoja de Morgul. Si pasas por la Salida, cobra <span class='m-coin'>M</span>2.", enDesc: "Brandish a torch and strike with your sword to fight off the shrouded menace of the Witch King of Angmar!", enRew: "Advance to Morgul Blade. If you pass Go. Collect M2" },
    { id: 29, isSecret: false, esDesc: "\"El Anillo ha despertado. Ha escuchado la llamada de su amo.\"", esRew: "Avanza a Barad-Dûr.", enDesc: "\"The Ring has awoken. It's heard its master's call.\"", enRew: "Advance to Barad-Dur." },
    { id: 30, isSecret: true, esDesc: "Mantén esta carta en secreto. Juégala en cualquier momento. \"Siempre hay esperanza.\"", esRew: "Sal de la cárcel gratis. Esta carta puede conservarse, intercambiarse o venderse.", enDesc: "\"There is always hope.\"", enRew: "Get out of jail Free. This card may be kept until needed, traded, or sold" },
    { id: 31, isSecret: true, esDesc: "Mantén esta carta en secreto. Juégala en cualquier momento. \"Aún la persona más pequeña puede cambiar el curso del futuro.\"", esRew: "Intercambia cualquiera de tus propiedades por la de otro jugador. No puedes intercambiar propiedades que formen parte de un conjunto completo.", enDesc: "Keep this card secret. Play at any times. \"Even the smallest person can change the course of the future.\"", enRew: "Swap any one of your properties with any one of another player's properties. You may not trade properties that are part of a complete set." },
    { id: 32, isSecret: false, esDesc: "\"Quedas desterrado de inmediato del reino de Rohan, bajo pena de muerte.\"", esRew: "Ve directamente a la Cárcel. No pases por la Salida. No cobres <span class='m-coin'>M</span>2.", enDesc: "\"You are banished forthwith from the kingdom of Rohan, under pain of death.\"", enRew: "Go to Jail. Go directly to Jail. Do not pass Go. Do not M2" }
];

let state = { players: [], deck: [], discardPile: [], showEnglish: false, showLegend: true, autoLogout: true };

let selectedLoginPlayerId = null;
let currentPlayerId = null;
let tradeSession = { myCardIndex: null, targetPlayerId: null };
let cardToSellIndex = null;

// --- VARIABLES DEL TEMPORIZADOR ---
let inactivityTimer = null;
const INACTIVITY_LIMIT = 60000; // 60 segundos (60,000 milisegundos)

// Las 9 Fichas (Tokens) Oficiales rediseñadas
const availableTokens = ["Frodo.png", "Sam.png", "Gandalf.png", "Aragorn.png", "Legolas.png","Gimli.png","Boromir.png", "Merry.png", "Pippin.png"];

function init() {
    const savedState = localStorage.getItem('lotrMonopolyState');
    if (savedState) {
        state = JSON.parse(savedState);
        if (state.showLegend === undefined) state.showLegend = true;
        // Compatibilidad con partidas antiguas
        if (state.autoLogout === undefined) state.autoLogout = true; 
        showView('loginView');
        populateLoginSelect();
    } else {
        showView('setupView');
        renderPlayerInputs();
    }
    applySettings();
    setupInactivityListeners(); // Iniciar control de inactividad
}

function saveState() {
    localStorage.setItem('lotrMonopolyState', JSON.stringify(state));
}

function showView(viewId) {
    document.querySelectorAll('.container').forEach(el => el.classList.remove('active-view'));
    document.getElementById(viewId).classList.add('active-view');
    applySettings(); 
}

function renderPlayerInputs() {
    const count = document.getElementById('playerCount').value;
    const container = document.getElementById('playerInputsContainer');
    container.innerHTML = '';
    
    for (let i = 1; i <= count; i++) {
        // AÑADIDO: Agregamos data-token="${token}" para que el código sepa qué ficha es
        let tokensHtml = availableTokens.map(token => 
            `<div class="icon-option" data-token="${token}" onclick="selectToken(${i}, '${token}', this)"><img src="images/${token}" alt="Ficha"></div>`
        ).join('');

        container.innerHTML += `
            <div style="margin: 15px auto; border: 2px solid var(--iron); padding: 15px; border-radius: 5px; background: rgba(0,0,0,0.4); width: 85%;">
                <h4 style="margin-top:0; color: var(--gold-old);">Viajero ${i}</h4>
                <input type="text" id="p${i}Name" placeholder="Nombre (ej. Aragorn)" required style="width: 90%;">
                <input type="password" id="p${i}Pass" placeholder="Palabra Secreta" required style="width: 90%;">
                
                <p style="font-size: 0.9rem; color: #aaa; margin-bottom: 5px;">Selecciona tu ficha:</p>
                <div class="icon-picker" id="p${i}Picker">
                    ${tokensHtml}
                </div>
                <input type="hidden" id="p${i}Token" value="">
            </div>
        `;
    }
    // Revisamos si hay que bloquear alguna ficha al cargar
    updateAvailableTokens();
}

function selectToken(playerIndex, token, element) {
    // Registramos la ficha seleccionada en el input oculto del jugador
    document.getElementById(`p${playerIndex}Token`).value = token;
    
    const picker = document.getElementById(`p${playerIndex}Picker`);
    // Quitamos la selección anterior de este jugador
    picker.querySelectorAll('.icon-option').forEach(el => el.classList.remove('selected'));
    // Marcamos la nueva como seleccionada
    element.classList.add('selected');

    // ¡La magia!: Llamamos a la función que bloquea la ficha para los demás
    updateAvailableTokens();
}

// NUEVA FUNCIÓN: Se encarga de bloquear y desbloquear las fichas
function updateAvailableTokens() {
    const count = document.getElementById('playerCount').value;
    const selectedTokens = {}; 

    // 1. Averiguamos qué fichas ya han sido elegidas y por quién
    for (let i = 1; i <= count; i++) {
        const tokenInput = document.getElementById(`p${i}Token`);
        if (tokenInput && tokenInput.value) {
            selectedTokens[tokenInput.value] = i; // Guardamos { "Aragorn.png": 1 }
        }
    }

    // 2. Apagamos esas fichas en los paneles de los DEMÁS jugadores
    for (let i = 1; i <= count; i++) {
        const picker = document.getElementById(`p${i}Picker`);
        if (!picker) continue;

        picker.querySelectorAll('.icon-option').forEach(el => {
            const token = el.getAttribute('data-token');
            
            // Si la ficha está seleccionada, y el que la seleccionó NO es el jugador actual (i)
            if (selectedTokens[token] && selectedTokens[token] !== i) {
                el.classList.add('disabled-token'); // Bloquear
            } else {
                el.classList.remove('disabled-token'); // Desbloquear (por si alguien cambia de opinión)
            }
        });
    }
}

function startGameSetup() {
    const count = document.getElementById('playerCount').value;
    state.players = [];
    
    for (let i = 1; i <= count; i++) {
        const name = document.getElementById(`p${i}Name`).value;
        const pass = document.getElementById(`p${i}Pass`).value;
        const token = document.getElementById(`p${i}Token`).value;
        
        if(!name || !pass) return alert("Todos los viajeros deben tener nombre y palabra secreta.");
        if(!token) return alert(`El Viajero ${i} debe elegir una ficha.`);
        
        state.players.push({ id: i, name, pass, token, inventory: [] });
    }
    
    state.deck = shuffleArray([...masterDeck]);
    state.discardPile = [];
    saveState();
    showView('loginView');
    populateLoginSelect();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function populateLoginSelect() {
    const grid = document.getElementById('loginPlayerGrid');
    grid.innerHTML = '';
    selectedLoginPlayerId = null;

    state.players.forEach(p => {
        const avatar = document.createElement('div');
        avatar.className = 'player-avatar';
        avatar.onclick = () => selectPlayerForLogin(p.id, avatar);
        
        // Si no tiene token (partida antigua), le damos a Frodo por defecto
        const displayToken = p.token || "Frodo.png"; 
        
        avatar.innerHTML = `
            <div class="player-avatar-icon"><img src="images/${displayToken}" alt="Ficha"></div>
            <div class="player-avatar-name">${p.name}</div>
        `;
        grid.appendChild(avatar);
    });
}

function selectPlayerForLogin(id, element) {
    selectedLoginPlayerId = id;
    document.querySelectorAll('.player-avatar').forEach(el => el.classList.remove('selected'));
    element.classList.add('selected');
}

function login() {
    if (!selectedLoginPlayerId) {
        return alert("Debes seleccionar el icono de tu personaje primero.");
    }

    const pass = document.getElementById('loginPassword').value;
    const player = state.players.find(p => p.id === selectedLoginPlayerId);

    if (player.pass === pass) {
        currentPlayerId = selectedLoginPlayerId;
        document.getElementById('loginPassword').value = '';
        document.getElementById('btnLogout').style.display = 'inline-block';
        document.getElementById('playerNameDisplay').innerHTML = `<img src="images/${player.token}" style="width: 24px; height: 24px; border-radius: 50%; vertical-align: middle; margin-right: 8px; border: 1px solid var(--gold-bright);"> Viajero: ${player.name}`;
        document.getElementById('playerNameDisplay').style.color = "var(--gold-bright)";
        
        updateDeckCount();
        hideCard(); 
        showView('gameView');
	resetInactivityTimer();
    } else {
        alert("La palabra secreta es incorrecta. Las sombras te acechan...");
    }
}

function logout() {
    clearTimeout(inactivityTimer);

    currentPlayerId = null;
    selectedLoginPlayerId = null;
    document.getElementById('btnLogout').style.display = 'none';
    document.getElementById('playerNameDisplay').innerText = 'Monopoly LOTR';
    document.getElementById('playerNameDisplay').style.color = "var(--gold-old)";
    
    populateLoginSelect();
    showView('loginView');
}

function updateDeckCount() {
    document.getElementById('deckCount').innerText = state.deck.length;
    document.getElementById('discardCount').innerText = state.discardPile.length;
}

function drawCard() {
    if (state.deck.length === 0) {
        if (state.discardPile.length > 0) {
            alert("¡Las historias vuelven a contarse! El mazo se ha barajado con las cartas descartadas.");
            state.deck = shuffleArray([...state.discardPile]);
            state.discardPile = [];
        } else {
            return alert("¡No quedan misiones en la Tierra Media! Todo está decidido.");
        }
    }

    const card = state.deck.pop();

    if (card.isSecret) {
        const player = state.players.find(p => p.id === currentPlayerId);
        player.inventory.push(card);
    } else {
        state.discardPile.push(card);
    }

    saveState();
    updateDeckCount();

    document.getElementById('cardContainer').classList.remove('card-back');
    document.getElementById('cardBackView').style.display = 'none';
    document.getElementById('cardFrontView').style.display = 'flex';

    document.getElementById('questEsDesc').innerHTML = card.esDesc;
    document.getElementById('questEsRew').innerHTML = card.esRew;
    document.getElementById('questEnDesc').innerHTML = card.enDesc;
    document.getElementById('questEnRew').innerHTML = card.enRew;

    document.getElementById('btnDrawGame').style.display = 'none';
    document.getElementById('btnHide').style.display = 'inline-block';
}

function hideCard() {
    document.getElementById('cardContainer').classList.add('card-back');
    document.getElementById('cardBackView').style.display = 'block';
    document.getElementById('cardFrontView').style.display = 'none';
    
    document.getElementById('btnDrawGame').style.display = 'inline-block';
    document.getElementById('btnHide').style.display = 'none';
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
    if(modalId === 'inventoryModal') renderInventory();
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function renderInventory() {
    const player = state.players.find(p => p.id === currentPlayerId);
    const list = document.getElementById('inventoryList');
    list.innerHTML = '';
    
    if(player.inventory.length === 0) {
        list.innerHTML = '<p style="color:#ccc; font-style:italic; margin-top:20px;">No posees secretos ni objetos guardados por ahora.</p>';
        return;
    }

    player.inventory.forEach((card, index) => {
        list.innerHTML += `
            <div class="inventory-item">
                <strong>${card.esDesc}</strong><br>
                <span style="color:var(--danger); font-weight: bold; margin-top:10px; display:block;">${card.esRew}</span>
                <hr>
                <div class="action-buttons">
                    <button class="btn" style="font-size: 0.85rem; padding: 8px 15px;" onclick="sellCard(${index})">Entregar a...</button>
                    <button class="btn" style="font-size: 0.85rem; padding: 8px 15px;" onclick="initTrade(${index})">Intercambiar</button>
                    <button class="btn btn-danger" style="font-size: 0.85rem; padding: 8px 15px;" onclick="useInventoryCard(${index})">Usar y Destruir</button>
                </div>
            </div>
        `;
    });
}

function useInventoryCard(cardIndex) {
    if(confirm("¿Estás seguro de usar este poder? Una vez invocado, el secreto se perderá para siempre en las sombras (no vuelve al mazo).")) {
        const player = state.players.find(p => p.id === currentPlayerId);
        player.inventory.splice(cardIndex, 1);
        saveState();
        updateDeckCount();
        renderInventory();
    }
}

function sellCard(cardIndex) {
    const otherPlayers = state.players.filter(p => p.id !== currentPlayerId);
    if (otherPlayers.length === 0) {
        alert("No hay otros viajeros en la comunidad para recibir esto.");
        return;
    }

    cardToSellIndex = cardIndex;
    const select = document.getElementById('sellTargetSelect');
    select.innerHTML = '';
    otherPlayers.forEach(p => {
        const displayToken = p.token || "👤";
        select.innerHTML += `<option value="${p.id}">${p.name}</option>`;
    });

    document.getElementById('sellTargetPass').value = '';
    closeModal('inventoryModal');
    openModal('sellModal');
}

function confirmSell() {
    const targetId = parseInt(document.getElementById('sellTargetSelect').value);
    const targetPass = document.getElementById('sellTargetPass').value;
    const targetPlayer = state.players.find(p => p.id === targetId);

    if (targetPass === targetPlayer.pass) {
        const player = state.players.find(p => p.id === currentPlayerId);
        const cardToGive = player.inventory.splice(cardToSellIndex, 1)[0];
        targetPlayer.inventory.push(cardToGive);
        
        saveState();
        alert(`¡Objeto entregado exitosamente a ${targetPlayer.name}! Tratado sellado.`);
        closeModal('sellModal');
        openModal('inventoryModal');
    } else {
        alert("La palabra secreta del receptor es incorrecta. La transacción ha fallado.");
    }
}

function initTrade(cardIndex) {
    const otherPlayersWithCards = state.players.filter(p => p.id !== currentPlayerId && p.inventory.length > 0);
    if (otherPlayersWithCards.length === 0) {
        alert("Ningún otro viajero posee secretos para realizar un intercambio equitativo.");
        return;
    }

    tradeSession.myCardIndex = cardIndex;
    const select = document.getElementById('tradeTargetSelect');
    select.innerHTML = '';
    otherPlayersWithCards.forEach(p => {
        const displayToken = p.token || "👤";
        select.innerHTML += `<option value="${p.id}">${p.name} (${p.inventory.length} secretos)</option>`;
    });

    document.getElementById('tradeTargetPass').value = '';
    document.getElementById('tradeStep1').style.display = 'block';
    document.getElementById('tradeStep2').style.display = 'none';

    closeModal('inventoryModal');
    openModal('tradeModal');
}

function tradeAuthenticate() {
    const targetId = parseInt(document.getElementById('tradeTargetSelect').value);
    const targetPass = document.getElementById('tradeTargetPass').value;
    const targetPlayer = state.players.find(p => p.id === targetId);

    if (targetPass === targetPlayer.pass) {
        tradeSession.targetPlayerId = targetId;
        
        const cardSelect = document.getElementById('tradeTargetCardSelect');
        cardSelect.innerHTML = '';
        targetPlayer.inventory.forEach((card, index) => {
            let cleanDesc = card.esDesc.replace(/<\/?[^>]+(>|$)/g, ""); 
            if(cleanDesc.length > 50) cleanDesc = cleanDesc.substring(0, 47) + "...";
            cardSelect.innerHTML += `<option value="${index}">${cleanDesc}</option>`;
        });

        document.getElementById('tradeStep1').style.display = 'none';
        document.getElementById('tradeStep2').style.display = 'block';
    } else {
        alert("Palabra secreta incorrecta. El consejo no confía en ti.");
    }
}

function confirmTrade() {
    const targetCardIndex = parseInt(document.getElementById('tradeTargetCardSelect').value);
    const player1 = state.players.find(p => p.id === currentPlayerId);
    const player2 = state.players.find(p => p.id === tradeSession.targetPlayerId);

    const cardFromP1 = player1.inventory.splice(tradeSession.myCardIndex, 1)[0];
    const cardFromP2 = player2.inventory.splice(targetCardIndex, 1)[0];

    player1.inventory.push(cardFromP2);
    player2.inventory.push(cardFromP1);

    saveState();
    alert("¡El antiguo tratado ha sido sellado! Las cartas han sido intercambiadas.");
    closeTradeModal();
}

function closeTradeModal() {
    closeModal('tradeModal');
    tradeSession = { myCardIndex: null, targetPlayerId: null };
    openModal('inventoryModal'); 
}

// --- LÓGICA DE AJUSTES (SLIDERS) ---

function handleToggleEnglish(checkbox) {
    state.showEnglish = checkbox.checked;
    saveState();
    applySettings();
}

function handleToggleLegend(checkbox) {
    state.showLegend = checkbox.checked;
    saveState();
    applySettings();
}

function toggleAutoLogout(checkbox) {
    state.autoLogout = checkbox.checked;
    saveState();
    resetInactivityTimer(); // Reiniciar el temporizador con la nueva configuración
}

// --- LÓGICA DE INACTIVIDAD ---
function setupInactivityListeners() {
    // Escuchar cualquier interacción en la página
    const events = ['mousemove', 'mousedown', 'keypress', 'touchstart', 'scroll', 'click'];
    events.forEach(event => {
        document.addEventListener(event, resetInactivityTimer, true);
    });
}

function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    
    // Solo iniciar la cuenta regresiva si hay un jugador logueado Y la opción está activada
    if (currentPlayerId !== null && state.autoLogout) {
        inactivityTimer = setTimeout(() => {
            alert("Las sombras te han ocultado por inactividad. Tu turno ha sido cerrado.");
            logout();
        }, INACTIVITY_LIMIT);
    }
}

// --- APLICAR CONFIGURACIÓN VISUAL ---
function applySettings() {
    // 1. Mostrar texto en inglés
    const englishDisplay = state.showEnglish ? 'block' : 'none';
    const containers = ['questEnContainer', 'questEnDesc', 'questEnRew'];
    containers.forEach(id => {
        const el = document.getElementById(id);
        if(el) el.style.display = englishDisplay;
    });

    // 2. Sincronizar botones visuales (Sliders)
    const englishToggle = document.getElementById('englishToggle');
    if (englishToggle) englishToggle.checked = state.showEnglish;

    const autoLogoutToggle = document.getElementById('autoLogoutToggle');
    if (autoLogoutToggle) autoLogoutToggle.checked = state.autoLogout;

    const legendToggle = document.getElementById('legendToggle');
    if (legendToggle) legendToggle.checked = state.showLegend;

    // 3. Mostrar/Ocultar el Panel lateral de Fichas
    const legendEl = document.getElementById('tokenLegend');
    if (legendEl) {
        const isSetupView = document.getElementById('setupView').classList.contains('active-view');
        // Solo muestra el panel si el slider está encendido y estamos en la pantalla inicial
        legendEl.style.display = (state.showLegend && isSetupView) ? 'block' : 'none';
    }
}

function hardReset() {
    if(confirm("¡ATENCIÓN! Esto invocará el fuego de la Montaña del Destino y consumirá todos los perfiles, misiones y secretos guardados. ¿Estás seguro de reiniciar totalmente la partida?")) {
        localStorage.removeItem('lotrMonopolyState');
        location.reload();
    }
}

window.onload = init;