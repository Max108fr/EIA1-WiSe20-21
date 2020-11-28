var europa08 = 4965.7;
var europa18 = 4209.3;
var northamerica08 = 6600.4;
var northamerica18 = 6035.6;
var southamerica08 = 1132.6;
var southamerica18 = 1261.5;
var africa08 = 1028;
var africa18 = 1235.5;
var asia08 = 12954.7;
var asia18 = 16274.1;
var australia08 = 1993;
var australia18 = 2100.5;
var WorldsEmissions18 = (africa18 + southamerica18 + europa18 + northamerica18 + asia18 + australia18);
var WorldsEmissions08 = (africa08 + southamerica08 + europa08 + northamerica08 + asia08 + australia08);
function Emissionsrechner(continent, emission18, emission08) {
    document.querySelector("#titleRegion").innerHTML = continent;
    document.querySelector("#titleRegion1").innerHTML = continent;
    document.querySelector("#absoluteEmission").innerHTML = emission18.toFixed(2) + "kg CO2";
    document.querySelector("#relativeEmission").innerHTML = (100 / (WorldsEmissions18 / emission18)).toFixed(1) + "%";
    document.querySelector("#growthEmission").innerHTML = (((emission18 / emission08) - 1) * 100).toFixed(1) + "%";
    document.querySelector("#growthEmissionAbs").innerHTML = (emission18 - emission08).toFixed(1) + "kg CO2";
    document.querySelector(".chart").setAttribute("style", "height:" + (100 / (WorldsEmissions18 / emission18)) + "%");
}
document.querySelector(".world").addEventListener("click", function () {
    Emissionsrechner("the World", WorldsEmissions18, WorldsEmissions08);
});
document.querySelector(".europe").addEventListener("click", function () {
    Emissionsrechner("Europe", europa18, europa08);
});
document.querySelector(".northamerica").addEventListener("click", function () {
    Emissionsrechner("North America", northamerica18, northamerica08);
});
document.querySelector(".southamerica").addEventListener("click", function () {
    Emissionsrechner("South America", southamerica18, southamerica08);
});
document.querySelector(".africa").addEventListener("click", function () {
    Emissionsrechner("Africa", africa18, africa08);
});
document.querySelector(".asia").addEventListener("click", function () {
    Emissionsrechner("Asia", asia18, asia08);
});
document.querySelector(".australia").addEventListener("click", function () {
    Emissionsrechner("Australia", australia18, australia08);
});
document.querySelector(".cloud1").addEventListener("click", function () { });
//# sourceMappingURL=a06emission.js.map
//# sourceMappingURL=a06emission.js.map