// ===========================================
//              Lev1_1
// ===========================================
console.log("%c –––––––Lev1_1––––––-", "color: lightblue; font-size: 12px;");

let person = {
    vorname: "Anton",
    nachname: "Fish",
    fullName: function() {
        return this.vorname + " " + this.nachname;
    }
};

console.log(person.fullName());

// ===========================================
//              lev1_2
// ===========================================
console.log("%c –––––––lev1_2––––––-", "color: lightblue; font-size: 12px;");


let person2 = {
    vorname: 'Anton',
    nachname: 'Fish',
    alter: 34,
    familienstand: 'ledig',
    groesse: '178cm',
    profil: function() {
        return `<p>Name: ${this.vorname} ${this.nachname}</p><p> Alter: ${this.alter}</p><p>Körpergröße: ${this.groesse}</p><p>Familienstand: ${this.familienstand}</p>`;
    }
};
document.getElementById("person2").innerHTML = person2.profil();


// ===========================================
//              lev1_3
// ===========================================
console.log("%c –––––––lev1_3––––––-", "color: lightblue; font-size: 12px;");

let person3Objekt = {
    vorname: "Anton",
    nachname: "Nüssler"
};

let person3Function = {
    fullName: function () {
        return this.vorname + " " + this.nachname;
    }
};


let anzeigeImHTMLDokument = `<p>${person3Function.fullName.call(person3Objekt)}</p>`;
document.getElementById("person3").innerHTML = anzeigeImHTMLDokument;

// ===========================================
//              lev1_4
// ===========================================
console.log("%c –––––––lev1_4––––––-", "color: lightblue; font-size: 12px;");

function fahrrad() {
    console.log(this.name);
}

let name = "Canyon";
let obj1 = { name: "Merida", fahrrad: fahrrad };
let obj2 = { name: "Scott", fahrrad: fahrrad };

fahrrad();
obj1.fahrrad();
obj2.fahrrad();
