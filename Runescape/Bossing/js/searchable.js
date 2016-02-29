var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substringRegex;

    // an array that will be populated with substring matches
    matches = [];

    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, "i");

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        matches.push(str);
      }
    });

    cb(matches);
  };
};

var states = ["Abyssal Demons", "Abyss: Mage", "Abyss: Melee", "Abyss: Ranged", "Airuts",
  "Araxxor", "Araxxor: Low Enrage", "Automatons", "Beastmaster: Base", "Beastmaster: DPS", "Beastmaster: Pets",
  "Cadarn Elves", "Celestial Dragons", "Commander Zilyana", "Corporal Beast", "Dagannoth Kings", "Dark Beasts", "Fight Kiln",
  "Ganodermic Beasts", "Gargoyles", "General Graador", "Glacors", "Jadinkos",
  "Kal'gerion Demons", "Kree'arra", "Kril Tsutsaroth", "Legios", "Muspah", "Nex: Duo",
  "Nex: Solo", "Nihils", "Queen Black Dragon", "Queen Black Dragon: Off Task", "Rise of the Six: Mage",
  "Rise of the Six: Ranged", "Rune Dragons", "Saradomin Camp", "Vorago: Base", "Vorago: Bomb",
  "Vorago: DPS", "Waterfiends"
];

$(".typeahead.monsters").typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: "states",
  source: substringMatcher(states)
});
