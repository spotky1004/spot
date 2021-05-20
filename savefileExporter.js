const toExport = {
    CalculatorEvolution2: "Calculator Evolution",
    IncrementalBlocks: "Incremental Blocks",
    alphabetTree: "Alphabet Tree",
    ordinalDimSave: "Ordinal Dimensions",
    saveFile: "Universe Farm",
    blockHoleShrinker: "Block Hole Shrinker (this game doesn't have export button, but here's your save)"
};

let saveString = "";
const mainDiv = document.getElementById("main");
for (const name in toExport) {
    if (localStorage[name]) {
        let saveData = btoa(localStorage[name]);
        try {
            atob(localStorage[name]);
            saveData = localStorage[name];
        } catch (e) {}

        let namespace = document.createElement("div");
        namespace.innerText = toExport[name];
        mainDiv.append(namespace);
        let exportBox = document.createElement("textarea");
        exportBox.value = saveData;
        mainDiv.append(exportBox);
        
        saveString += `localStorage.${name} = "${btoa(localStorage[name])}";`
    }
}

let namespace = document.createElement("div");
namespace.innerHTML = "Copy this and paste at the Console(F12) of my new domain (<a href=\"https://spotky1004.com\">https://spotky1004.com</a>) to migrate";
mainDiv.append(namespace);
let exportBox = document.createElement("textarea");
exportBox.value = saveString;
mainDiv.append(exportBox);