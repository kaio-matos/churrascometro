function calcular(){
    let people = parseInt(document.getElementById('people').value);
    let children = parseInt(document.getElementById('children').value);
    let duration = parseInt(document.getElementById('duration').value);

    let meat = ((people + children) * duration) / 5;
    let drink = ((people * children) + duration) / 4;
    let chicken = ((people + children) * duration) / 4;
    
    if (Number.isNaN(people) || Number.isNaN(children) || Number.isNaN(duration)){
        window.alert("Por favor insira os dados!")

    } else {
        let lista = document.getElementById('lista');
        lista.style.display = "block";

        let liMeat = document.getElementById('meatResult');
        liMeat.innerHTML = "Carne: " + meat.toFixed(2) + " Kg";

        let liDrink = document.getElementById('chickenResult');
        liDrink.innerHTML = "Bebida: " + drink.toFixed(2) + " L";

        let liChicken = document.getElementById('drinkResult');
        liChicken.innerHTML = "Frango: " + chicken.toFixed(2) + " Kg";
    }
}
