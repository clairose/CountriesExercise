let countryInput = prompt("Type in a country. (Djibouti, Jamaica)");
console.log("Yes");

class Country {
    constructor(country, language, hello, color1, color2, color3, color4){
        this.country = country;
        this.language = language;
        this.hello = hello;
        this.color1 = color1;
        this.color2 = color2;
        this.color3 = color3;
        this.color4 = color4;
    }
    addInfo(){
        $("#CountryName").text(this.country);
        $("#OfficialLanguage").text(`The official language of ${this.country} is ${this.language}.`)
        $("#HelloWorld").text(this.hello);
    }
    changeColor() {
        $("#Color1").css("background-color", `${this.color1}`);
        $("#Color2").css("background-color", `${this.color2}`);
        $("#Color3").css("background-color", `${this.color3}`);
        $("body").css("color", `${this.color4}`);
    }
    addFlag() {
        $.get(`https://restcountries.eu/rest/v2/name/${this.country}`, (data)=>{
            console.log(data[0].flag);
            $("#HelloWorld").append(`<img src="${data[0].flag}">`);
    })
}
}

let djibouti = new Country("Djibouti", "French", "Bonjour le monde!", "lightblue", "green", "white", "red");
let jamaica = new Country("Jamaica", "English", "Hello World!", "green", "black", "gold", "black");
let stLucia = new Country("Saint Lucia", "English", "Hello World!", "lightblue", "yellow", "black", "white");
if (countryInput === "Djibouti") {
    djibouti.addInfo();
    djibouti.changeColor();
    djibouti.addFlag();
} else if (countryInput === "Jamaica") {
    jamaica.addInfo();
    jamaica.changeColor();
    jamaica.addFlag();
} else if (countryInput === "Saint Lucia") {
    stLucia.addInfo();
    stLucia.changeColor();
    stLucia.addFlag();
}