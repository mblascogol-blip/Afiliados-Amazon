const fs = require('fs');
const path = require('path');

const items = [
  { file: 'ebike-mtb', label: 'E-MTB', icon: 'mtb' },
  { file: 'ebike-road', label: 'E-ROAD', icon: 'road' },
  { file: 'ebike-city', label: 'E-CITY', icon: 'city' },
  { file: 'mtb-classic', label: 'MTB', icon: 'mtb' },
  { file: 'road-classic', label: 'ROAD', icon: 'road' },
  { file: 'city-classic', label: 'CITY', icon: 'city' },
  { file: 'scooter-1', label: 'SCOOTER', icon: 'scooter' },
  { file: 'scooter-2', label: 'SCOOTER', icon: 'scooter' },
  { file: 'scooter-3', label: 'SCOOTER', icon: 'scooter' },
];

const icons = {
  mtb: `<circle cx="90" cy="200" r="44" fill="none" stroke="#C8F31D" stroke-width="6"/><circle cx="310" cy="200" r="44" fill="none" stroke="#C8F31D" stroke-width="6"/><path d="M90 200 L170 110 L230 110 L310 200 M170 110 L150 200 M230 110 L210 60 L150 60" fill="none" stroke="#C8F31D" stroke-width="6" stroke-linecap="round"/>`,
  road: `<circle cx="90" cy="200" r="40" fill="none" stroke="#C8F31D" stroke-width="5"/><circle cx="310" cy="200" r="40" fill="none" stroke="#C8F31D" stroke-width="5"/><path d="M90 200 L180 120 L240 120 L310 200 M180 120 L160 200 M240 120 L220 70 L170 70" fill="none" stroke="#C8F31D" stroke-width="5" stroke-linecap="round"/>`,
  city: `<circle cx="100" cy="210" r="42" fill="none" stroke="#C8F31D" stroke-width="6"/><circle cx="300" cy="210" r="42" fill="none" stroke="#C8F31D" stroke-width="6"/><path d="M100 210 L160 130 L230 130 L300 210 M160 130 L150 210 M230 130 L240 90 L180 90 L180 70" fill="none" stroke="#C8F31D" stroke-width="6" stroke-linecap="round"/>`,
  scooter: `<circle cx="110" cy="230" r="28" fill="none" stroke="#C8F31D" stroke-width="6"/><circle cx="300" cy="230" r="28" fill="none" stroke="#C8F31D" stroke-width="6"/><path d="M110 230 L290 230 L300 230 M280 230 L280 100 L320 100 M280 130 L230 130" fill="none" stroke="#C8F31D" stroke-width="6" stroke-linecap="round"/>`,
};

for (const item of items) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
  <rect width="400" height="300" fill="#16181B"/>
  <g opacity="0.9">${icons[item.icon]}</g>
  <text x="200" y="270" font-family="monospace" font-size="14" fill="#6B6B6E" text-anchor="middle" letter-spacing="2">${item.label}</text>
</svg>`;
  fs.writeFileSync(path.join(__dirname, '..', 'public', 'products', item.file + '.svg'), svg);
}
console.log('done');
