var t = 0,
people = ['ENCHANTMENT', 'THE NAVAJO', 'THE APACHE', 'THE COMANCHE', 'THE UTES', 'THE MOGOLLON', 'THE PUEBLO', 'EL NORTE'],
elements = ['OIL DRILLING', 'GREEN CHILI', 'TAX HAVENS', 'ACTOMIC BOMBS', 'ADOBE HOMES', 'THE BALLOON FESTIVAL', 'THE MANHATTAN PROJECT', 'MINERAL EXTRACTION', 'LUMBER MILLING', 'THE HIGH DESERT', 'BIG SKIES', 'THE WHITE SANDS MISSILE RANGE', 'URANIUM'],
settlers = ['THE SPANISH', 'PROTESTANTS', 'GOLD MINERS', 'SCIENTISTS', 'THE UNITED STATES AIR FORCE', 'RETIREES', 'CONORADO', 'MEXICAN IMMIGRANTS', 'ARTISTS', 'LATTER-DAY SAINTS'];

function rand_range(maximum) {
    "use strict";
    return Math.floor(Math.random() * (maximum + 1));
}
function choose(array) {
    "use strict";
    return array[rand_range(array.length - 1)];
}
function stanza() {
    "use strict";
    return 'THE LAND OF ' + choose(people) + '<br \>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WITH ' + choose(elements) + '<br \>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SETTLED BY ' + choose(settlers);
}
function litany() {
    "use strict";
    var last, text, main = document.getElementById('main');
    if (8 > t) {
        t += 1;
    } else {
        main.removeChild(document.getElementById('main').firstChild);
    }
    last = document.createElement('div');
    last.innerHTML = stanza();
    main.appendChild(last);
}
function produce_litany() {
    "use strict";
    litany();
    setInterval(litany, 5000);
}