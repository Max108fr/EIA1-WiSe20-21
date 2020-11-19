console.log('Daten zu Emissionswerten');
var europa08: number = 4965.7;
var europa18: number = 4209.3;
var northamerica08: number = 6600.4;
var northamerica18: number = 6035.6;
var southamerica08: number = 1132.6;
var southamerica18: number = 1261.5;
var africa08: number = 1028;
var africa18: number = 1235.5;
var asia08: number = 12954.7;
var asia18: number = 16274.1;
var australia08: number = 1993;
var australia18: number = 2100.5;
var WorldsEmissions18: number = (africa18 + southamerica18 + europa18 + northamerica18 + asia18 + australia18);
var Percent: number = 100;

console.log('Die Emission von Europa ist: ' + europa18 + 'kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Europa damit ' + (Percent / (WorldsEmissions18 / europa18)).toFixed(2) + '%.');
console.log('Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um ' + (Percent / (europa18 / europa08)).toFixed(2) + '% verändert.');
console.log('2018 im Vergleich zu 2008 sind das ' + (europa18 - europa08).toFixed(2) + 'kg CO2');

console.log('Die Emission von Nordamerika ist: ' + northamerica18 + 'kg CO2.');
console.log('Relativ zur Gesamtemission der Welt verursacht Nordamerika damit ' + (Percent / (WorldsEmissions18 / northamerica08)).toFixed(2) + '%.');
console.log('Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um ' + (Percent / (northamerica18 / northamerica08)).toFixed(2) + '% verändert.');
console.log('2018 im Vergleich zu 2008 sind das ' + (northamerica18 - northamerica08).toFixed(2) + 'kg CO2');

console.log('Die Emission von Suedamerika ist: ' + southamerica18 + 'kg CO2.');
console.log('Relativ zur Gesamtemission der Welt verursacht Suedamerika damit ' + (Percent / (WorldsEmissions18 / southamerica18)).toFixed(2) + '%.');
console.log('Für Suedamerika hat sich 2018 im Vergleich zu 2008 die Emission um ' + (Percent / (southamerica18 / southamerica08)).toFixed(2) + '% verändert.');
console.log('2018 im Vergleich zu 2008 sind das ' + (southamerica18 - southamerica08).toFixed(2) + 'kg CO2');

console.log('Die Emission von Africa ist: ' + africa18 + 'kg CO2.');
console.log('Relativ zur Gesamtemission der Welt verursacht Afrika damit ' + (Percent / (WorldsEmissions18 / africa18)).toFixed(2) + '%.');
console.log('Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um ' + (Percent / (africa18 / africa08)).toFixed(2) + '% verändert.');
console.log('2018 im Vergleich zu 2008 sind das ' + (africa18 - africa08).toFixed(2) + 'kg CO2');

console.log('Die Emission von Asien ist: ' + asia18 + 'kg CO2.');
console.log('Relativ zur Gesamtemission der Welt verursacht Asien damit ' + (Percent / (WorldsEmissions18 / asia18)).toFixed(2) + '%.');
console.log('Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um ' + (Percent / (asia18 / asia08)).toFixed(2) + '% verändert.');
console.log('2018 im Vergleich zu 2008 sind das ' + (asia18 - asia08).toFixed(2) + 'kg CO2');

console.log('Die Emission von Australien ist: ' + australia18 + 'kg CO2.');
console.log('Relativ zur Gesamtemission der Welt verursacht Australien damit ' + (Percent / (WorldsEmissions18 / australia18)).toFixed(2) + '%.');
console.log('Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um ' + (Percent / (australia18 / australia08)).toFixed(2) + '% verändert.');
console.log('2018 im Vergleich zu 2008 sind das ' + (australia18 - australia08).toFixed(2) + 'kg CO2');
