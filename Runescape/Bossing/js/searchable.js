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

var states = ["Abyss: Mage", "Abyss: Melee", "Abyss: Ranged", "Abyssal Demons: Mage", "Abyssal Demons: Melee", "Abyssal Demons: Ranged", "Abyssal Demons", "Airuts",
  "Araxxor: Melee", "Araxxor: Ranged", "Automatons", "Beastmaster: Base", "Beastmaster: DPS", "Beastmaster: Pets", "Boss Perks",
  "Boss Perks Alt", "Cadarn Elves", "Celestial Dragons", "Chaos Elemental", "Commander Zilyana", "Corporal Beast", "Dagannoth Kings",
  "Dark Beasts", "Edimmu", "Exiled Kalphite King", "Fight Kiln", "Ganodermic Beasts", "Gargoyles", "General Graador",
  "Glacors", "Gregorovic", "Helwyr", "Jadinkos", "Kal'gerion Demons", "Kalphite King", "KBD", "Kree'arra", "Kril Tsutsaroth",
  "Legios", "Muspah", "Nex: Duo", "Nex: Solo", "Nihils", "Queen Black Dragon", "Rise of the Six: Mage", "Rise of the Six: Ranged",
  "Rune Dragons", "Saradomin Camp", "Slayer Perks", "Slayer Perks Alt", "Telos", "Twin Furies", "Vindicta",
  "Vorago: Base", "Vorago: Bomb", "Vorago: DPS", "Waterfiends", "Yaka: Mage DPS", "Yaka: Ranged DPS"
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
