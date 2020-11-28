    const europa08: number = 4965.7;
    const europa18: number = 4209.3;
    const northamerica08: number = 6600.4;
    const northamerica18: number = 6035.6;
    const southamerica08: number = 1132.6;
    const southamerica18: number = 1261.5;
    const africa08: number = 1028;
    const africa18: number = 1235.5;
    const asia08: number = 12954.7;
    const asia18: number = 16274.1;
    const australia08: number = 1993;
    const australia18: number = 2100.5;
    const WorldsEmissions18: number = (africa18 + southamerica18 + europa18 + northamerica18 + asia18 + australia18);
    const WorldsEmissions08: number = (africa08 + southamerica08 + europa08 + northamerica08 + asia08 + australia08);

    function Emissionsrechner(continent: string, emission18: number, emission08: number) {
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
    document.querySelector(".cloud1").addEventListener("click", function () {})

//# sourceMappingURL=a06emission.js.map
