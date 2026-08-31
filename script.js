const cssStyles = `
  * {
    box-sizing: border-box !important;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    user-select: none !important;
    -webkit-user-select: none !important;
  }

  html, body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #0f172a;
    touch-action: none;
  }

  .setup-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(15, 23, 42, 0.95);
    z-index: 999999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
  }

  .setup-card {
    background: #1e293b;
    border: 1px solid #38bdf8;
    border-radius: 16px;
    padding: 24px;
    width: 100%;
    max-width: 420px;
    max-height: 90vh;
    overflow-y: auto;
    color: #ffffff;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8);
  }

  .setup-card h2 {
    color: #f59e0b;
    font-size: 1.4rem;
    margin-bottom: 16px;
    text-align: center;
  }

  .mode-selection-box {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 10px;
  }

  .btn-mode-select {
    width: 100%;
    padding: 16px;
    background: #334155;
    border: 2px solid #38bdf8;
    border-radius: 12px;
    color: #ffffff;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
    transition: background 0.2s;
  }

  .btn-mode-select:active {
    background: #38bdf8;
    color: #0f172a;
  }

  .form-group {
    margin-bottom: 14px;
  }

  .form-group label {
    display: block;
    font-size: 0.9rem;
    color: #94a3b8;
    margin-bottom: 6px;
  }

  .form-group select, .form-group input {
    width: 100%;
    padding: 10px 12px;
    border-radius: 8px;
    background: #0f172a;
    border: 1px solid #334155;
    color: #ffffff;
    font-size: 0.9rem;
  }

  .btn-start-sim {
    width: 100%;
    padding: 12px;
    background: #10b981;
    border: none;
    border-radius: 8px;
    color: #ffffff;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 10px;
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
  }

  .btn-back-menu {
    width: 100%;
    padding: 10px;
    background: #64748b;
    border: none;
    border-radius: 8px;
    color: #ffffff;
    font-weight: bold;
    font-size: 0.85rem;
    cursor: pointer;
    margin-top: 8px;
  }

  #map {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: auto !important;
    z-index: 1;
  }

  .map-instruction-banner {
    position: absolute !important;
    top: 15px !important;
    left: 50% !important;
    transform: translateX(-50%) !important;
    z-index: 9999999 !important;
    background: rgba(245, 158, 11, 0.98) !important;
    color: #0f172a !important;
    padding: 10px 18px !important;
    border-radius: 20px !important;
    font-weight: bold !important;
    font-size: 0.85rem !important;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6) !important;
    border: 2px solid #ffffff !important;
    text-align: center !important;
    pointer-events: auto !important;
    white-space: normal !important;
    max-width: 90vw !important;
  }

  /* HUD Transparente */
  .hud {
    position: absolute !important;
    top: 15px !important;
    left: 15px !important;
    z-index: 999999 !important;
    background: rgba(15, 23, 42, 0.55) !important;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    color: #ffffff !important;
    padding: 12px !important;
    border-radius: 12px !important;
    border: 1px solid rgba(255, 255, 255, 0.25) !important;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5) !important;
    width: 240px;
    max-width: calc(100vw - 30px);
    pointer-events: auto !important;
  }

  .hud h2 {
    font-size: 0.95rem;
    margin-bottom: 6px;
    text-align: center;
    color: #f59e0b;
    text-shadow: 0 1px 3px rgba(0,0,0,0.8);
  }

  .line-badge {
    background: rgba(30, 41, 59, 0.7);
    border: 1px solid #38bdf8;
    color: #38bdf8;
    padding: 6px 10px;
    border-radius: 6px;
    font-weight: bold;
    font-size: 0.8rem;
    text-align: center;
    margin-bottom: 10px;
  }

  .trip-info-box {
    padding: 8px 10px;
    background: rgba(15, 23, 42, 0.6);
    border: 1px solid rgba(51, 65, 85, 0.8);
    border-radius: 8px;
    font-size: 0.8rem;
    margin-bottom: 10px;
  }

  .trip-km-row {
    display: flex;
    justify-content: space-between;
    color: #cbd5e1;
  }

  .trip-km-val {
    font-weight: bold;
    color: #38bdf8;
  }

  .pax-control-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(30, 41, 59, 0.7);
    padding: 8px 10px;
    border-radius: 8px;
    margin-bottom: 10px;
    font-size: 0.85rem;
  }

  .btn-pax {
    width: 36px;
    height: 36px;
    background: #3b82f6;
    border: none;
    color: white;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1.1rem;
    touch-action: manipulation;
  }

  .trip-status-badge {
    width: 100%;
    padding: 8px;
    border-radius: 8px;
    font-weight: bold;
    font-size: 0.85rem;
    text-align: center;
  }

  .trip-status-badge.running {
    background: rgba(16, 185, 129, 0.85);
    color: #ffffff;
  }

  .trip-status-badge.stopped {
    background: rgba(239, 68, 68, 0.85);
    color: #ffffff;
  }

  .zoom-controls {
    display: flex;
    gap: 8px;
    margin-top: 10px;
  }

  .btn-zoom {
    flex: 1;
    padding: 6px;
    font-size: 0.75rem;
    font-weight: bold;
    color: #ffffff;
    background: rgba(59, 130, 246, 0.8);
    border: 1px solid #60a5fa;
    border-radius: 6px;
    cursor: pointer;
    touch-action: manipulation;
  }

  .btn-zoom.active {
    background: #f59e0b !important;
    border-color: #fbbf24 !important;
    color: #0f172a;
  }

  .btn-exit-game {
    width: 100%;
    padding: 8px;
    margin-top: 10px;
    background: rgba(220, 38, 38, 0.85);
    border: 1px solid #f87171;
    border-radius: 6px;
    color: #ffffff;
    font-weight: bold;
    font-size: 0.8rem;
    cursor: pointer;
    text-align: center;
  }

  /* Velocímetro */
  .speedometer-container {
    position: absolute !important;
    bottom: 20px !important;
    left: 50% !important;
    transform: translateX(-50%) !important;
    z-index: 999999 !important;
    background: rgba(10, 15, 25, 0.75) !important;
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    color: #38bdf8 !important;
    padding: 10px 20px !important;
    border-radius: 25px !important;
    font-size: 1.6rem !important;
    font-weight: 800 !important;
    border: 3px solid #38bdf8 !important;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: baseline;
    gap: 6px;
    pointer-events: auto !important;
    letter-spacing: -1px;
  }

  .speed-unit {
    font-size: 0.85rem;
    font-weight: 600;
    color: #94a3b8;
    letter-spacing: 0;
  }

  /* Controles On-Screen Esquerda */
  .mobile-controls-left {
    position: absolute !important;
    bottom: 20px !important;
    left: 15px !important;
    z-index: 999999 !important;
    display: flex;
    gap: 10px;
    pointer-events: auto !important;
  }

  /* Controles On-Screen Direita */
  .mobile-controls-right {
    position: absolute !important;
    bottom: 20px !important;
    right: 15px !important;
    z-index: 999999 !important;
    display: flex;
    flex-direction: column;
    gap: 10px;
    pointer-events: auto !important;
  }

  .btn-drive-touch {
    width: 58px;
    height: 58px;
    background: rgba(15, 23, 42, 0.75);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    border: 2px solid #38bdf8;
    border-radius: 50%;
    color: #ffffff;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
    touch-action: manipulation;
    cursor: pointer;
  }

  .btn-drive-touch:active {
    background: rgba(56, 189, 248, 0.5);
    transform: scale(0.95);
  }

  .btn-drive-touch.btn-accel {
    border-color: #10b981;
    background: rgba(16, 185, 129, 0.35);
  }

  .btn-drive-touch.btn-accel:active {
    background: rgba(16, 185, 129, 0.7);
  }

  .btn-drive-touch.btn-brake {
    border-color: #ef4444;
    background: rgba(239, 68, 68, 0.35);
  }

  .btn-drive-touch.btn-brake:active {
    background: rgba(239, 68, 68, 0.7);
  }

  .alert-toast {
    position: fixed;
    top: 70px;
    left: 50%;
    transform: translateX(-50%);
    background: #ef4444;
    color: #ffffff;
    padding: 12px 20px;
    border-radius: 8px;
    font-weight: bold;
    font-size: 0.9rem;
    z-index: 10000000;
    box-shadow: 0 5px 20px rgba(0,0,0,0.6);
    text-align: center;
    display: none;
  }

  .maplibregl-marker {
    z-index: 9999999 !important;
    pointer-events: none !important;
  }

  .bus-marker-img {
    width: 36px !important;
    height: 78px !important;
    display: block !important;
    filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.95));
  }
`;

const styleElement = document.createElement('style');
styleElement.innerHTML = cssStyles;
document.head.appendChild(styleElement);

const alertToast = document.createElement('div');
alertToast.className = 'alert-toast';
document.body.appendChild(alertToast);

function showAlert(message) {
  alertToast.textContent = message;
  alertToast.style.display = 'block';
  setTimeout(() => {
    alertToast.style.display = 'none';
  }, 4000);
}

const COORDS = {
  IBIRITE: [-44.06613054917195, -20.0174636532536],
  SARZEDO: [-44.13656568163484, -20.03452014074093],
  CONCEICAO_ITAGUA: [-44.23648860787897, -20.14999656639113]
};

const LINES_DATA = {
  '301C': { name: '301 C - Terminal Ibirité x BH - Via Amazonas', type: 'urbano', startCoords: COORDS.IBIRITE },
  '302H': { name: '302 H - Terminal Ibirité x Hospitais', type: 'urbano', startCoords: COORDS.IBIRITE },
  '303M': { name: '303 M - Terminal Ibirité x Estação Eldorado', type: 'urbano', startCoords: COORDS.IBIRITE },
  '304M': { name: '304 M - Terminal Ibirité x Estação Eldorado via Lago Azul', type: 'urbano', startCoords: COORDS.IBIRITE },
  '306R': { name: '306 R - Terminal Ibirité x BH Shopping', type: 'urbano', startCoords: COORDS.IBIRITE },
  '313M': { name: '313 M - Terminal Sarzedo x Estação Eldorado', type: 'urbano', startCoords: COORDS.SARZEDO },
  '314M': { name: '314 M - Terminal Sarzedo x Estação Eldorado via Renato Azeredo', type: 'urbano', startCoords: COORDS.SARZEDO },
  '833R': { name: '833R - Terminal Sarzedo x Carrefour', type: 'urbano', startCoords: COORDS.SARZEDO },
  '3787': { name: '3787 - Conceição de Itaguá x Belo Horizonte', type: 'rodoviario', startCoords: COORDS.CONCEICAO_ITAGUA },
  '3785': { name: '3785 - Brumadinho x Terminal Sarzedo', type: 'rodoviario', startCoords: COORDS.CONCEICAO_ITAGUA },
  '310C': { name: '310 C - Terminal Sarzedo x Hospitais', type: 'urbano', startCoords: COORDS.SARZEDO }
};

const COLOR_PRESETS = {
  'vermelho': { name: 'Vermelho', bodyColor: '#dc2626', stripeColor: '#ffffff' },
  'azul': { name: 'Azul', bodyColor: '#2563eb', stripeColor: '#ffffff' },
  'laranja': { name: 'Laranja', bodyColor: '#ea580c', stripeColor: '#ffffff' },
  'amarelo': { name: 'Amarelo', bodyColor: '#eab308', stripeColor: '#ffffff' },
  'verde': { name: 'Verde', bodyColor: '#16a34a', stripeColor: '#ffffff' },
  'branco': { name: 'Branco', bodyColor: '#f8fafc', stripeColor: '#94a3b8' },
  'roxo_branco': { name: 'Roxo e Branco', bodyColor: '#7c3aed', stripeColor: '#ffffff' },
  'verde_preto': { name: 'Verde e Preto', bodyColor: '#15803d', stripeColor: '#0f172a' },
  'cinza_azul': { name: 'Cinza com Azul', bodyColor: '#64748b', stripeColor: '#0284c7' }
};

const setupModal = document.createElement('div');
setupModal.className = 'setup-modal-overlay';

let lineOptionsHtml = '';
for (const key in LINES_DATA) {
  lineOptionsHtml += `<option value="${key}">${LINES_DATA[key].name}</option>`;
}

let colorOptionsHtml = '';
for (const key in COLOR_PRESETS) {
  colorOptionsHtml += `<option value="${key}">${COLOR_PRESETS[key].name}</option>`;
}

setupModal.innerHTML = `
  <div class="setup-card" id="cardMainMenu">
    <h2>🚍 Simulator - Menu Principal</h2>
    <div class="mode-selection-box">
      <button class="btn-mode-select" id="btnSelectLineMode">📍 Modo Linha</button>
      <button class="btn-mode-select" id="btnSelectFreeMode">🗺️ Modo Livre</button>
    </div>
  </div>

  <div class="setup-card" id="cardLineMode" style="display: none;">
    <h2>🚍 Modo Linha</h2>
    <div class="form-group">
      <label>Linha de Operação:</label>
      <select id="selectLine">${lineOptionsHtml}</select>
    </div>
    <div class="form-group">
      <label>Número do Carro / Prefixo:</label>
      <input type="text" id="inputBusNumber" placeholder="Ex: 20450" value="29435" />
    </div>
    <div class="form-group">
      <label>Cor do Ônibus:</label>
      <select id="selectColorLine">${colorOptionsHtml}</select>
    </div>
    <button class="btn-start-sim" id="btnStartLineMode">Iniciar Viagem</button>
    <button class="btn-back-menu" id="btnBackLine">Voltar</button>
  </div>

  <div class="setup-card" id="cardFreeMode" style="display: none;">
    <h2>🗺️ Modo Livre</h2>
    <div class="form-group">
      <label>Nome da Empresa:</label>
      <input type="text" id="inputCompanyName" placeholder="Ex: Viação Gontijo" value="MARCOPOLO" />
    </div>
    <div class="form-group">
      <label>Cor do Ônibus:</label>
      <select id="selectColorFree">${colorOptionsHtml}</select>
    </div>
    <div class="form-group">
      <label>Pesquisar Local / Cidade / Rua:</label>
      <input type="text" id="inputFreeLocation" placeholder="Ex: Praça Sete, Belo Horizonte" value="Ibirité, MG" />
    </div>
    <button class="btn-start-sim" id="btnStartFreeMode">Carregar Mapa e Dirigir</button>
    <button class="btn-back-menu" id="btnBackFree">Voltar</button>
  </div>
`;
document.body.appendChild(setupModal);

const mapBanner = document.createElement('div');
mapBanner.className = 'map-instruction-banner';
mapBanner.id = 'mapInstructionBanner';
mapBanner.innerHTML = '⚠️ Para iniciar a viagem, adicione pelo menos 1 passageiro no painel (+)!';
mapBanner.style.display = 'none';
document.body.appendChild(mapBanner);

let hudContainer = document.createElement('div');
hudContainer.className = 'hud';
hudContainer.style.display = 'none';
document.body.appendChild(hudContainer);

hudContainer.innerHTML = `
  <h2>🚍 Operação de Linha</h2>
  <div class="line-badge" id="lineBadgeDisplay">---</div>

  <div class="pax-control-box">
    <span>👥 Pax: <strong id="paxCountDisplay">0</strong> / <span id="maxPaxDisplay">80</span></span>
    <div>
      <button class="btn-pax" id="btnPaxSub">-</button>
      <button class="btn-pax" id="btnPaxAdd">+</button>
    </div>
  </div>

  <div class="trip-info-box">
    <div class="trip-km-row">
      <span>Percorrido:</span>
      <span class="trip-km-val" id="kmCoveredDisplay">0.00 km</span>
    </div>
  </div>

  <div class="trip-status-badge stopped" id="tripStatusBadge">Aguardando Passageiro</div>

  <div class="zoom-controls">
    <button id="btnZoomNear" class="btn-zoom active">🔍 Perto</button>
    <button id="btnZoomFar" class="btn-zoom">🌐 Longe</button>
  </div>

  <button class="btn-exit-game" id="btnExitGame">🚪 Sair do Jogo</button>
`;

let speedBox = document.createElement('div');
speedBox.className = 'speedometer-container';
speedBox.style.display = 'none';
speedBox.innerHTML = '<span id="speedValue">0</span><span class="speed-unit">km/h</span>';
document.body.appendChild(speedBox);

let leftControlsContainer = document.createElement('div');
leftControlsContainer.className = 'mobile-controls-left';
leftControlsContainer.style.display = 'none';
leftControlsContainer.innerHTML = `
  <button class="btn-drive-touch" id="btnTouchLeft">⬅️</button>
  <button class="btn-drive-touch" id="btnTouchRight">➡️</button>
`;
document.body.appendChild(leftControlsContainer);

let rightControlsContainer = document.createElement('div');
rightControlsContainer.className = 'mobile-controls-right';
rightControlsContainer.style.display = 'none';
rightControlsContainer.innerHTML = `
  <button class="btn-drive-touch btn-accel" id="btnTouchUp">⬆️</button>
  <button class="btn-drive-touch btn-brake" id="btnTouchDown">⬇️</button>
`;
document.body.appendChild(rightControlsContainer);

let map = null;
let busMarker = null;
let animationFrameId = null;

const CAMERA_SETTINGS = {
  NEAR: { zoom: 19.8, pitch: 0 }, 
  FAR: { zoom: 17.8, pitch: 0 }
};

let currentZoom = CAMERA_SETTINGS.NEAR.zoom;
let currentPitch = CAMERA_SETTINGS.NEAR.pitch;

let currentGameMode = 'line'; 
let busLabelText = '';
let selectedLineKey = '301C';
let passengerCount = 0;
let maxPassengers = 80;
let activePresetKey = 'vermelho';

let busLng = 0;
let busLat = 0;
let speed = 0;
let heading = 0;
let distanceCoveredKm = 0;
let reverseDelayCounter = 0;

const KMH_CONVERSION_FACTOR = 8.33; 
const CRUISE_SPEED_KMH = 8;
const CRUISE_SPEED_UNITS = CRUISE_SPEED_KMH / KMH_CONVERSION_FACTOR; 
const MAX_SPEED_KMH = 60;
const MAX_SPEED_UNITS = MAX_SPEED_KMH / KMH_CONVERSION_FACTOR; 
const MAX_REVERSE_KMH = 15;
const MAX_REVERSE_UNITS = -(MAX_REVERSE_KMH / KMH_CONVERSION_FACTOR);

const ACCELERATION = 0.003; 
const BRAKING_FORCE = 0.03; 
const ROTATION_SPEED = 0.8; 

const keysPressed = { Up: false, Down: false, Left: false, Right: false };

function bindTouchEvents(elementId, keyName) {
  const el = document.getElementById(elementId);
  if (!el) return;

  const startPress = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (keyName === 'Up' && !keysPressed.Up) {
      handleAccelerate();
    }
    keysPressed[keyName] = true;
  };

  const endPress = (e) => {
    e.preventDefault();
    e.stopPropagation();
    keysPressed[keyName] = false;
  };

  el.addEventListener('pointerdown', startPress);
  el.addEventListener('pointerup', endPress);
  el.addEventListener('pointercancel', endPress);
  el.addEventListener('pointerleave', endPress);
}

bindTouchEvents('btnTouchUp', 'Up');
bindTouchEvents('btnTouchDown', 'Down');
bindTouchEvents('btnTouchLeft', 'Left');
bindTouchEvents('btnTouchRight', 'Right');

/* Navegação da Tela Inicial */
document.getElementById('btnSelectLineMode').addEventListener('click', () => {
  document.getElementById('cardMainMenu').style.display = 'none';
  document.getElementById('cardLineMode').style.display = 'block';
});

document.getElementById('btnSelectFreeMode').addEventListener('click', () => {
  document.getElementById('cardMainMenu').style.display = 'none';
  document.getElementById('cardFreeMode').style.display = 'block';
});

document.getElementById('btnBackLine').addEventListener('click', () => {
  document.getElementById('cardLineMode').style.display = 'none';
  document.getElementById('cardMainMenu').style.display = 'block';
});

document.getElementById('btnBackFree').addEventListener('click', () => {
  document.getElementById('cardFreeMode').style.display = 'none';
  document.getElementById('cardMainMenu').style.display = 'block';
});

/* Confirmação do Modo Linha */
document.getElementById('btnStartLineMode').addEventListener('click', () => {
  currentGameMode = 'line';
  selectedLineKey = document.getElementById('selectLine').value;
  activePresetKey = document.getElementById('selectColorLine').value || 'vermelho';
  const busNumber = document.getElementById('inputBusNumber').value.trim() || '29435';
  
  busLabelText = busNumber;

  const lineData = LINES_DATA[selectedLineKey] || LINES_DATA['301C'];
  maxPassengers = lineData.type === 'rodoviario' ? 46 : 80;
  document.getElementById('maxPaxDisplay').textContent = maxPassengers;

  document.getElementById('lineBadgeDisplay').textContent = `${lineData.name} - Carro ${busNumber}`;
  
  const startCoords = lineData.startCoords;
  startSimulation(startCoords);
});

/* Confirmação do Modo Livre */
document.getElementById('btnStartFreeMode').addEventListener('click', async () => {
  currentGameMode = 'free';
  const companyName = document.getElementById('inputCompanyName').value.trim() || 'MARCOPOLO';
  activePresetKey = document.getElementById('selectColorFree').value || 'vermelho';
  const locationQuery = document.getElementById('inputFreeLocation').value.trim();

  busLabelText = companyName;

  if (!locationQuery) {
    showAlert("Por favor, digite um local para pesquisar.");
    return;
  }

  maxPassengers = 80;
  document.getElementById('maxPaxDisplay').textContent = maxPassengers;
  document.getElementById('lineBadgeDisplay').textContent = `Modo Livre: ${companyName}`;

  try {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(locationQuery)}`);
    const data = await response.json();

    if (data && data.length > 0) {
      const startCoords = [parseFloat(data[0].lon), parseFloat(data[0].lat)];
      startSimulation(startCoords);
    } else {
      showAlert("Local não encontrado. Usando coordenadas padrão.");
      startSimulation(COORDS.IBIRITE);
    }
  } catch (err) {
    showAlert("Erro na busca de local. Usando coordenadas padrão.");
    startSimulation(COORDS.IBIRITE);
  }
});

function startSimulation(startCoords) {
  setupModal.style.display = 'none';
  hudContainer.style.display = 'block';
  speedBox.style.display = 'flex';
  leftControlsContainer.style.display = 'flex';
  rightControlsContainer.style.display = 'flex';
  mapBanner.style.display = 'block';

  busLng = startCoords[0];
  busLat = startCoords[1];

  initMap(startCoords);
}

function exitGame() {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }

  if (map) {
    map.remove();
    map = null;
  }

  busMarker = null;
  speed = 0;
  heading = 0;
  distanceCoveredKm = 0;
  passengerCount = 0;

  keysPressed.Up = false;
  keysPressed.Down = false;
  keysPressed.Left = false;
  keysPressed.Right = false;

  document.getElementById('kmCoveredDisplay').textContent = '0.00 km';
  document.getElementById('paxCountDisplay').textContent = '0';
  document.getElementById('speedValue').textContent = '0';

  hudContainer.style.display = 'none';
  speedBox.style.display = 'none';
  leftControlsContainer.style.display = 'none';
  rightControlsContainer.style.display = 'none';
  mapBanner.style.display = 'none';

  document.getElementById('cardLineMode').style.display = 'none';
  document.getElementById('cardFreeMode').style.display = 'none';
  document.getElementById('cardMainMenu').style.display = 'block';
  setupModal.style.display = 'flex';
}

document.getElementById('btnExitGame').addEventListener('click', exitGame);

/* Gerador de SVG do Ônibus por Modelo e Modo */
function getBusSvgDataUrl(bodyColor, stripeColor, isDoubleDecker, textOverlay) {
  let busSvg = '';

  if (isDoubleDecker) {
    /* Modelo Rodoviário Double Decker (Modo Livre - Imagem 3) */
    busSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 260" width="120" height="260">
      <rect x="6" y="6" width="108" height="248" rx="20" fill="#0b0f19" stroke="#1e293b" stroke-width="4"/>
      
      <path d="M 10,30 C 10,12 20,8 60,8 C 100,8 110,12 110,30 L 110,235 C 110,248 98,252 60,252 C 22,252 10,248 10,235 Z" fill="${bodyColor}" />
      
      <path d="M 12,90 L 108,90 L 108,180 L 12,210 Z" fill="${stripeColor}" opacity="0.25"/>
      <path d="M 10,160 Q 60,185 110,160 L 110,235 C 110,248 98,252 60,252 C 22,252 10,248 10,235 Z" fill="${stripeColor}" opacity="0.8"/>

      <path d="M 15,22 C 25,14 60,12 95,14 C 105,22 105,38 105,38 L 15,38 Z" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
      <path d="M 15,44 L 105,44 L 105,68 L 15,68 Z" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
      
      <path d="M 2,28 C -2,28 -2,42 8,46 L 14,42 Z" fill="#0f172a"/>
      <path d="M 118,28 C 122,28 122,42 112,46 L 106,42 Z" fill="#0f172a"/>

      <rect x="28" y="80" width="64" height="110" rx="8" fill="#1e293b" opacity="0.6" stroke="#ffffff" stroke-width="1"/>

      <text x="-135" y="65" transform="rotate(-90)" fill="#ffffff" font-size="12" font-weight="bold" font-family="Arial, sans-serif" letter-spacing="1" text-anchor="middle">${textOverlay}</text>
    </svg>`;
  } else {
    /* Modelo Urbano Apache Vip (Modo Linha - Imagem 4) */
    busSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 260" width="120" height="260">
      <rect x="6" y="6" width="108" height="248" rx="16" fill="#000000" stroke="#334155" stroke-width="4"/>
      
      <path d="M 10,25 C 10,12 25,8 60,8 C 95,8 110,12 110,25 L 110,235 C 110,248 95,252 60,252 C 25,252 10,248 10,235 Z" fill="${bodyColor}" />
      
      <path d="M 10,130 L 110,130 L 110,235 C 110,248 95,252 60,252 C 25,252 10,248 10,235 Z" fill="${stripeColor}" opacity="0.85"/>
      
      <path d="M 15,18 Q 60,12 105,18 L 105,52 Q 60,46 15,52 Z" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
      
      <rect x="35" y="70" width="50" height="30" rx="6" fill="#e2e8f0" stroke="#64748b" stroke-width="2"/>
      <rect x="40" y="180" width="40" height="20" rx="4" fill="#e2e8f0" stroke="#64748b" stroke-width="1.5"/>

      <rect x="0" y="24" width="9" height="20" rx="3" fill="#0f172a"/>
      <rect x="111" y="24" width="9" height="20" rx="3" fill="#0f172a"/>

      <text x="-135" y="65" transform="rotate(-90)" fill="#ffffff" font-size="13" font-weight="900" font-family="Arial, sans-serif" letter-spacing="2" text-anchor="middle">${textOverlay}</text>
    </svg>`;
  }

  return 'data:image/svg+xml;utf8,' + encodeURIComponent(busSvg);
}

function initMap(startCoords) {
  map = new maplibregl.Map({
    container: 'map',
    interactive: false,
    style: {
      version: 8,
      sources: {
        'google-hybrid-source': {
          type: 'raster',
          tiles: [
            'https://mt0.google.com/vt/lyrs=y&x={x}&y={y}&z={z}',
            'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}',
            'https://mt2.google.com/vt/lyrs=y&x={x}&y={y}&z={z}',
            'https://mt3.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
          ],
          tileSize: 256,
          maxzoom: 22
        }
      },
      layers: [
        {
          id: 'google-hybrid-layer',
          type: 'raster',
          source: 'google-hybrid-source',
          minzoom: 0,
          maxzoom: 22
        }
      ]
    },
    center: startCoords,
    zoom: currentZoom,
    pitch: currentPitch,
    maxZoom: 22,
    bearing: 0
  });

  const preset = COLOR_PRESETS[activePresetKey] || COLOR_PRESETS['vermelho'];
  const isDD = (currentGameMode === 'free');

  const busImg = document.createElement('img');
  busImg.className = 'bus-marker-img';
  busImg.src = getBusSvgDataUrl(preset.bodyColor, preset.stripeColor, isDD, busLabelText);

  busMarker = new maplibregl.Marker({ 
    element: busImg, 
    anchor: 'center' 
  })
    .setLngLat(startCoords)
    .addTo(map);

  map.on('load', () => {
    animationFrameId = requestAnimationFrame(updatePhysics);
  });
}

function updatePaxStatus() {
  document.getElementById('paxCountDisplay').textContent = passengerCount;
  const badge = document.getElementById('tripStatusBadge');

  if (passengerCount >= 1) {
    badge.className = 'trip-status-badge running';
    badge.textContent = 'Em Viagem';
    mapBanner.style.display = 'none';
  } else {
    badge.className = 'trip-status-badge stopped';
    badge.textContent = 'Aguardando Pax';
    mapBanner.style.display = 'block';
    speed = 0;
  }
}

document.getElementById('btnPaxAdd').addEventListener('pointerdown', (e) => {
  e.stopPropagation();
  if (passengerCount < maxPassengers) {
    passengerCount++;
    updatePaxStatus();
  } else {
    showAlert(`Lotação máxima atingida! (${maxPassengers} passageiros)`);
  }
});

document.getElementById('btnPaxSub').addEventListener('pointerdown', (e) => {
  e.stopPropagation();
  if (passengerCount > 0) {
    passengerCount--;
    updatePaxStatus();
  }
});

function getMetersBetween(coord1, coord2) {
  const [lon1, lat1] = coord1;
  const [lon2, lat2] = coord2;
  const R = 6371e3;
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function handleAccelerate() {
  if (passengerCount < 1) {
    showAlert("⚠️ Adicione pelo menos 1 passageiro no painel para rodar!");
    return;
  }

  if (speed < 0) {
    speed = Math.min(speed + BRAKING_FORCE, 0);
  } else if (speed < CRUISE_SPEED_UNITS) {
    speed = CRUISE_SPEED_UNITS;
  } else {
    speed = Math.min(speed + ACCELERATION, MAX_SPEED_UNITS);
  }
}

function updatePhysics() {
  if (!map) return;

  if (passengerCount >= 1) {
    if (keysPressed.Up) {
      handleAccelerate();
      reverseDelayCounter = 0;
    } else if (keysPressed.Down) {
      if (speed > 0) {
        speed = Math.max(speed - BRAKING_FORCE, 0);
        reverseDelayCounter = 0;
      } else {
        reverseDelayCounter++;
        if (reverseDelayCounter > 30) {
          speed = Math.max(speed - ACCELERATION, MAX_REVERSE_UNITS);
        }
      }
    } else {
      reverseDelayCounter = 0;
    }

    if (Math.abs(speed) > 0.05) {
      const turnDir = speed < 0 ? -1 : 1;
      if (keysPressed.Left) heading = (heading - turnDir * ROTATION_SPEED + 360) % 360;
      if (keysPressed.Right) heading = (heading + turnDir * ROTATION_SPEED) % 360;
    }

    const rad = (heading * Math.PI) / 180;
    const deltaLng = (speed * 0.000003) * Math.sin(rad);
    const deltaLat = (speed * 0.000003) * Math.cos(rad);

    const prevCoords = [busLng, busLat];
    busLng += deltaLng;
    busLat += deltaLat;

    distanceCoveredKm += getMetersBetween(prevCoords, [busLng, busLat]) / 1000;
    document.getElementById('kmCoveredDisplay').textContent = `${distanceCoveredKm.toFixed(2)} km`;
  } else {
    speed = 0;
    reverseDelayCounter = 0;
  }

  const kmhDisplay = Math.round(Math.abs(speed) * KMH_CONVERSION_FACTOR);
  document.getElementById('speedValue').textContent = kmhDisplay;

  const currentCoords = [busLng, busLat];
  if (busMarker) busMarker.setLngLat(currentCoords);

  if (map) {
    map.jumpTo({
      center: currentCoords,
      zoom: currentZoom,
      pitch: currentPitch,
      bearing: heading
    });
  }

  animationFrameId = requestAnimationFrame(updatePhysics);
}

document.getElementById('btnZoomNear').addEventListener('pointerdown', (e) => {
  e.stopPropagation();
  currentZoom = CAMERA_SETTINGS.NEAR.zoom;
  currentPitch = CAMERA_SETTINGS.NEAR.pitch;
  document.getElementById('btnZoomNear').classList.add('active');
  document.getElementById('btnZoomFar').classList.remove('active');
});

document.getElementById('btnZoomFar').addEventListener('pointerdown', (e) => {
  e.stopPropagation();
  currentZoom = CAMERA_SETTINGS.FAR.zoom;
  currentPitch = CAMERA_SETTINGS.FAR.pitch;
  document.getElementById('btnZoomFar').classList.add('active');
  document.getElementById('btnZoomNear').classList.remove('active');
});

window.addEventListener('keydown', (e) => {
  if (['ArrowUp', 'KeyW'].includes(e.code)) {
    if (!keysPressed.Up) {
      handleAccelerate();
    }
    keysPressed.Up = true;
  }
  if (['ArrowDown', 'KeyS'].includes(e.code)) keysPressed.Down = true;
  if (['ArrowLeft', 'KeyA'].includes(e.code)) keysPressed.Left = true;
  if (['ArrowRight', 'KeyD'].includes(e.code)) keysPressed.Right = true;
});

window.addEventListener('keyup', (e) => {
  if (['ArrowUp', 'KeyW'].includes(e.code)) keysPressed.Up = false;
  if (['ArrowDown', 'KeyS'].includes(e.code)) keysPressed.Down = false;
  if (['ArrowLeft', 'KeyA'].includes(e.code)) keysPressed.Left = false;
  if (['ArrowRight', 'KeyD'].includes(e.code)) keysPressed.Right = false;
});
