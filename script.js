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

  .hud {
    position: absolute !important;
    top: 15px !important;
    left: 15px !important;
    z-index: 999999 !important;
    background: rgba(15, 23, 42, 0.95) !important;
    color: #ffffff !important;
    padding: 12px !important;
    border-radius: 12px !important;
    border: 1px solid rgba(255, 255, 255, 0.2) !important;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.8) !important;
    width: 260px;
    max-width: calc(100vw - 30px);
    pointer-events: auto !important;
  }

  .hud h2 {
    font-size: 1rem;
    margin-bottom: 6px;
    text-align: center;
    color: #f59e0b;
  }

  .line-badge {
    background: #1e293b;
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
    background: #0f172a;
    border: 1px solid #334155;
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
    background: #1e293b;
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
    background: #10b981;
    color: #ffffff;
  }

  .trip-status-badge.stopped {
    background: #ef4444;
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
    font-size: 0.8rem;
    font-weight: bold;
    color: #ffffff;
    background: #3b82f6;
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

  .speedometer-container {
    position: absolute !important;
    bottom: 20px !important;
    left: 20px !important;
    z-index: 999999 !important;
    background: rgba(10, 15, 25, 0.98) !important;
    color: #38bdf8 !important;
    padding: 15px 30px !important;
    border-radius: 30px !important;
    font-size: 2.2rem !important;
    font-weight: 800 !important;
    border: 3px solid #38bdf8 !important;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: baseline;
    gap: 6px;
    pointer-events: auto !important;
    letter-spacing: -1px;
  }

  .speed-unit {
    font-size: 0.9rem;
    font-weight: 600;
    color: #94a3b8;
    letter-spacing: 0;
  }

  .mobile-controls-left {
    position: absolute !important;
    bottom: 25px !important;
    left: 15px !important;
    z-index: 9999999 !important;
    display: flex !important;
    gap: 15px !important;
    pointer-events: auto !important;
  }

  .mobile-controls-right {
    position: absolute !important;
    bottom: 25px !important;
    right: 15px !important;
    z-index: 9999999 !important;
    display: flex !important;
    flex-direction: column !important;
    gap: 12px !important;
    pointer-events: auto !important;
  }

  .btn-ctrl {
    width: 60px;
    height: 60px;
    background: rgba(255, 255, 255, 0.95) !important;
    border: 3px solid #38bdf8 !important;
    border-radius: 50% !important;
    font-size: 1.5rem;
    font-weight: bold;
    color: #0f172a;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 5px 15px rgba(0,0,0,0.7);
    -webkit-tap-highlight-color: transparent;
    touch-action: none;
    pointer-events: auto !important;
  }

  .btn-ctrl.active-ctrl {
    background: #38bdf8 !important;
    color: #ffffff !important;
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
    z-index: 999999 !important;
    pointer-events: none !important;
  }

  .bus-marker-img {
    width: 44px !important;
    height: 88px !important;
    display: block !important;
    filter: drop-shadow(0px 8px 12px rgba(0, 0, 0, 0.9));
  }

  @media (max-width: 1024px) {
    .map-instruction-banner {
      top: 10px !important;
      font-size: 0.8rem !important;
      padding: 8px 14px !important;
      width: 90% !important;
    }

    .speedometer-container {
      bottom: auto !important;
      top: 15px !important;
      right: 15px !important;
      left: auto !important;
      transform: none !important;
      font-size: 1.5rem !important;
      padding: 6px 16px !important;
      border-width: 2px !important;
      border-radius: 20px !important;
    }

    .hud {
      width: 220px;
    }

    .btn-ctrl {
      width: 55px;
      height: 55px;
    }
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
  'vermelho': { name: 'Vermelho', bodyColor: '#dc2626', stripeColor: '#e2e8f0' },
  'azul': { name: 'Azul', bodyColor: '#2563eb', stripeColor: '#e2e8f0' },
  'laranja': { name: 'Laranja', bodyColor: '#ea580c', stripeColor: '#e2e8f0' },
  'amarelo': { name: 'Amarelo', bodyColor: '#eab308', stripeColor: '#e2e8f0' },
  'verde': { name: 'Verde', bodyColor: '#16a34a', stripeColor: '#e2e8f0' },
  'branco': { name: 'Branco', bodyColor: '#f8fafc', stripeColor: '#cbd5e1' },
  'roxo_branco': { name: 'Roxo e Branco', bodyColor: '#7c3aed', stripeColor: '#f8fafc' },
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
  <div class="setup-card">
    <h2>🚍 Configurador de Viagem</h2>
    <div class="form-group">
      <label>Linha de Operação:</label>
      <select id="selectLine">${lineOptionsHtml}</select>
    </div>
    <div class="form-group">
      <label>Cor do Ônibus:</label>
      <select id="selectColor">${colorOptionsHtml}</select>
    </div>
    <button class="btn-start-sim" id="btnConfirmSetup">Iniciar Viagem</button>
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
    <button id="btnZoomNear" class="btn-zoom active">🔍 Perto (Panorâmico)</button>
    <button id="btnZoomFar" class="btn-zoom">🌐 Longe (Encaixado)</button>
  </div>
`;

let controlsLeft = document.createElement('div');
controlsLeft.className = 'mobile-controls-left';
document.body.appendChild(controlsLeft);
controlsLeft.innerHTML = `
  <button id="btnLeft" class="btn-ctrl">◀</button>
  <button id="btnRight" class="btn-ctrl">▶</button>
`;

let controlsRight = document.createElement('div');
controlsRight.className = 'mobile-controls-right';
document.body.appendChild(controlsRight);
controlsRight.innerHTML = `
  <button id="btnUp" class="btn-ctrl">▲</button>
  <button id="btnDown" class="btn-ctrl">▼</button>
`;

let speedBox = document.createElement('div');
speedBox.className = 'speedometer-container';
speedBox.style.display = 'none';
speedBox.innerHTML = '<span id="speedValue">0</span><span class="speed-unit">km/h</span>';
document.body.appendChild(speedBox);

let map = null;
let busMarker = null;

const CAMERA_SETTINGS = {
  NEAR: { zoom: 19.0, pitch: 0 }, 
  FAR: { zoom: 16.5, pitch: 0 }
};

let currentZoom = CAMERA_SETTINGS.NEAR.zoom;
let currentPitch = CAMERA_SETTINGS.NEAR.pitch;

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

document.getElementById('btnConfirmSetup').addEventListener('click', () => {
  selectedLineKey = document.getElementById('selectLine').value;
  activePresetKey = document.getElementById('selectColor').value || 'vermelho';
  const lineData = LINES_DATA[selectedLineKey] || LINES_DATA['301C'];

  maxPassengers = lineData.type === 'rodoviario' ? 46 : 80;
  document.getElementById('maxPaxDisplay').textContent = maxPassengers;

  setupModal.style.display = 'none';
  hudContainer.style.display = 'block';
  speedBox.style.display = 'flex';
  mapBanner.style.display = 'block';

  document.getElementById('lineBadgeDisplay').textContent = lineData.name;

  const startCoords = lineData.startCoords;
  busLng = startCoords[0];
  busLat = startCoords[1];

  initMap(startCoords);
});

function getBusSvgDataUrl(bodyColor, stripeColor) {
  const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 200" width="100" height="200">
    <rect x="5" y="5" width="90" height="190" rx="20" fill="#1e293b" stroke="#ffffff" stroke-width="6"/>
    <path d="M 5,25 C 5,12 12,5 25,5 L 75,5 C 88,5 95,12 95,25 L 95,140 L 5,140 Z" fill="${bodyColor}" />
    <path d="M 5,140 L 95,140 L 95,175 C 95,188 88,195 75,195 L 25,195 C 12,195 5,188 5,175 Z" fill="${stripeColor}" />
    <rect x="2" y="30" width="6" height="20" rx="2" fill="#000000"/>
    <rect x="92" y="30" width="6" height="20" rx="2" fill="#000000"/>
    <path d="M 10,18 Q 50,10 90,18 L 90,50 Q 50,45 10,50 Z" fill="#0f172a"/>
    <path d="M 14,21 Q 50,15 86,21 L 86,45 Q 50,40 14,45 Z" fill="#38bdf8"/>
    <rect x="25" y="12" width="50" height="6" rx="2" fill="#f59e0b"/>
    <rect x="20" y="80" width="60" height="40" rx="6" fill="#334155"/>
  </svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svgString);
}

function initMap(startCoords) {
  map = new maplibregl.Map({
    container: 'map',
    interactive: false,
    style: {
      version: 8,
      sources: {
        'google-hybrid': {
          type: 'raster',
          tiles: ['https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'],
          tileSize: 256
        }
      },
      layers: [{
        id: 'hybrid-layer',
        type: 'raster',
        source: 'google-hybrid',
        minzoom: 0,
        maxzoom: 22
      }]
    },
    center: startCoords,
    zoom: currentZoom,
    pitch: currentPitch,
    bearing: 0
  });

  const preset = COLOR_PRESETS[activePresetKey] || COLOR_PRESETS['vermelho'];
  const busImg = document.createElement('img');
  busImg.className = 'bus-marker-img';
  busImg.src = getBusSvgDataUrl(preset.bodyColor, preset.stripeColor);

  busMarker = new maplibregl.Marker({ 
    element: busImg, 
    anchor: 'center' 
  })
    .setLngLat(startCoords)
    .addTo(map);

  map.on('load', () => {
    requestAnimationFrame(updatePhysics);
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

  requestAnimationFrame(updatePhysics);
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

function bindControl(btnId, keyName) {
  const btn = document.getElementById(btnId);
  if (!btn) return;

  const start = (e) => {
    e.stopPropagation();
    if (e.cancelable) e.preventDefault();
    keysPressed[keyName] = true;
    btn.classList.add('active-ctrl');
    if (keyName === 'Up') {
      handleAccelerate();
    }
  };

  const end = (e) => {
    e.stopPropagation();
    if (e.cancelable) e.preventDefault();
    keysPressed[keyName] = false;
    btn.classList.remove('active-ctrl');
  };

  btn.addEventListener('touchstart', start, { passive: false });
  btn.addEventListener('touchend', end, { passive: false });
  btn.addEventListener('touchcancel', end, { passive: false });
  btn.addEventListener('pointerdown', start);
  btn.addEventListener('pointerup', end);
  btn.addEventListener('pointercancel', end);
  btn.addEventListener('pointerleave', end);
}

bindControl('btnUp', 'Up');
bindControl('btnDown', 'Down');
bindControl('btnLeft', 'Left');
bindControl('btnRight', 'Right');

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

