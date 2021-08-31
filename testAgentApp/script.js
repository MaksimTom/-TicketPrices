const button = document.forms.form1;
const tableAeroflot = document.querySelector('.tableAeroflot');
const tableRzd = document.querySelector('.tableRzd');
button.addEventListener('submit', function(e){
    e.preventDefault();
    
    cleanTable(tableAeroflot);
    cleanTable(tableRzd);

    let priceAirEconom = new AirEconom (button.elements.km.value, button.elements.age.value, button.elements.mass.value);
    let priceAirAdvenced = new AirAdvenced (button.elements.km.value, button.elements.age.value, button.elements.mass.value);
    let priceAirLux = new AirLux (button.elements.km.value, button.elements.age.value, button.elements.mass.value);
    let priceRzdEconom = new RzdEconom (button.elements.km.value, button.elements.age.value, button.elements.mass.value);
    let priceRzdAdvenced = new RzdAdvenced (button.elements.km.value, button.elements.age.value, button.elements.mass.value);
    let priceRzdLux = new RzdLux (button.elements.km.value, button.elements.age.value, button.elements.mass.value);
    priceAirEconom.price();
    priceAirAdvenced.price();
    priceAirLux.price();
    priceRzdEconom.price();
    priceRzdAdvenced.price();
    priceRzdLux.price();

    
})

class AirEconom {
    constructor(km, age, mass){
        this.km = km;
        this.age = age;
        this.mass = mass;
    }
    price(){  
        let priceKm = this.km * 4; 

        if (this.mass < 5){
            trTable(priceKm, tableAeroflot, 'Эконом'); 
        } else if (this.mass > 20) {
            return console.log('максимальный вес багажа 20 кг');
        }  else {
            priceKm += 4000;
            trTable(priceKm, tableAeroflot, 'Эконом');
        }  
    }
}

class AirAdvenced {
    constructor(km, age, mass){
        this.km = km;
        this.age = age;
        this.mass = mass;
    }
    price(){ 
        let priceKm;
        if (this.age < 7){
            priceKm = this.km * 5.6;
        } else { priceKm = this.km * 8; 
        }

        if (this.mass < 20){
            trTable(priceKm, tableAeroflot, 'Продвинутый');
        } else if (this.mass > 50) {
            return console.log('максимальный вес багажа 50 кг');
        }  else {
            priceKm += 5000;
            trTable(priceKm, tableAeroflot, 'Продвинутый');
        }  
    }
}
class AirLux {
    constructor(km, age, mass){
        this.km = km;
        this.age = age;
        this.mass = mass;
    }
    price(){ 
        let priceKm;
        if (this.age < 16){
             priceKm = this.km * 10.5;
        } else { priceKm = this.km * 15; 
        }
         if (this.mass > 50) {
            return console.log('максимальный вес багажа 50 кг');
        }  else {
            trTable(priceKm, tableAeroflot, 'Люкс');
        }  
    }
}

class RzdEconom {
    constructor(km, age, mass){
        this.km = km;
        this.age = age;
        this.mass = mass;
    }
    price(){ 
        let priceKm;
        if (this.age < 5){
             priceKm = this.km * 0.25;
        } else { priceKm = this.km * 0.5; 
        }

        if (this.mass < 15){
            trTable(priceKm, tableRzd, 'Эконом');
        } else if (this.mass > 50) {
            return console.log('максимальный вес багажа 50 кг');
        }  else {
            priceKm += this.mass * 50;
            trTable(priceKm, tableRzd, 'Эконом');
        }  
    }
}

class RzdAdvenced {
    constructor(km, age, mass){
        this.km = km;
        this.age = age;
        this.mass = mass;
    }
    price(){ 
        let priceKm;
        if (this.age < 8){
             priceKm = this.km * 1.4;
        } else { priceKm = this.km * 2; 
        }

        if (this.mass < 20){
            trTable(priceKm, tableRzd, 'Продвинутый');
        } else if (this.mass > 60) {
            return console.log('максимальный вес багажа 60 кг');
        }  else {
            priceKm += this.mass * 50;
            trTable(priceKm, tableRzd, 'Продвинутый');
        }  
    }
}

class RzdLux {
    constructor(km, age, mass){
        this.km = km;
        this.age = age;
        this.mass = mass;
    }
    price(){ 
        let priceKm;
        if (this.age < 16){
            priceKm = this.km * 3.2;
        } else { priceKm = this.km * 4; 
        }

         if (this.mass > 60) {
            return console.log('максимальный вес багажа 60 кг');
        }  else {
            trTable(priceKm, tableRzd, 'Люкс');
        }  
    }
}

function trTable(price, table, nameClass){
    
    let tr = document.createElement('tr'); 
    let td = document.createElement('td'); 
    td.innerHTML = nameClass + ': ' + price;
    tr.appendChild(td); 
    
    table.appendChild(tr); 
    
}

function cleanTable (table){
    let tr = table.getElementsByTagName('tr');
        if(tr.length > 1){ 
            while(table.rows.length > 1){
            table.deleteRow(1);
            }
        }
}
