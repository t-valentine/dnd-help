const skillsHelp = () => {
  var selection = document.getElementById('skills').value;
  var result = document.getElementById('skill-p');
  result.innerHTML = "";
  switch (selection) {
    case "acrobatics":
    case "sleight":
    case "stealth":
      result.append("Use Dexterity");
      break;
    case "arcana":
    case "history":
    case "invest":
    case "nature":
    case "religion":
      break;
    case "animal" || "insight" || "medicine" || "perception" || "survival":
      break;
    case "decept" || "intim" || "perform" || "persuade":
      result.append("Use Charisma");
      break;
    case "athletics":
      result.append("Use Strength");
      break;
    default:
      result.append("Use ...");
  }
}


const rollHelp = () => {
  var selection = document.getElementById('rolls').value;
  var result = document.getElementById('roll-p');
  result.innerHTML = "";
  if (selection == 'damage') {
    result.append("Check your weapon/spell's damage die.");
  }
  else if (selection == 'cast') {
    result.append("If the spell mentions a save, the target rolls against your spell save.");
    result.append("If no save is mentioned, roll a d20.");
  }
  else {
    result.append("Roll a d20");
  }
}

const characterHelp = () => {
  var character = document.getElementById('character').value;
  var level = document.getElementById('level').value;
  var result = document.getElementById('unique-info');
  result.innerHTML = "";

  // get proficiency bonus by level
  var prof = 2;
  if (level > 4 && level < 9) {
    prof = 3;
  }
  else if (level > 8 && level < 13) {
    prof = 4; 
  }
  else if (level > 12 && level < 17) {
    prof = 5;
  }

  // provide character info
  switch (character) {
    case "amy":
      break;
    case "clyde":
      spellcasterHelp(result, prof, level, 'cleric');
      break;
    case "izzy":
      break;
    case "karrde":
      spellcasterHelp(result, prof, level, 'reaper');
      break;
    case "worm":
      spellcasterHelp(result, prof, level, 'artificer');
      break;
  }
}

const spellcasterHelp = (div, modifier, level, _class) => {
  // Sets spellcasting ability and spellsave
  if (_class == 'cleric') {
    var ability = "Wisdom";
    var spellsave = `${ability} modifier + ${level}`;
  }
  else if (_class == 'reaper') {
    var ability = "WHAT";
    var spellsave = `${ability} modifier + ${level}`;
  }
  else if (_class == 'artificer') {
    var ability = "Intelligence";
    var spellsave = `${ability} modifier + ${Math.floor(level/2)}`;
  }

  // Spell Ability
  var abilitytitle = div.appendChild(document.createElement('h4'));
  abilitytitle.append("Spell Ability");
  var abilitytxt = div.appendChild(document.createElement('p'));
  abilitytxt.append(`${ability}`);

  // Spell Modifier
  var modifiertitle = div.appendChild(document.createElement('h4'));
  modifiertitle.append("Spell Modifier");
  var modifiertxt = div.appendChild(document.createElement('p'));
  modifiertxt.append(`${ability} modifier + ` + modifier);

  // Spell Save
  var spellSaveTitle = div.appendChild(document.createElement('h4'));
  spellSaveTitle.append("Spell Save");
  var spellSaveTxt = div.appendChild(document.createElement('p'));
  spellSaveTxt.append(`${ability} modifier + ` + (modifier + 8));

  // Spells Known
  var spellSaveTitle = div.appendChild(document.createElement('h4'));
  spellSaveTitle.append("Spells Known");

  var spellSaveTxt = div.appendChild(document.createElement('p'));
  spellSaveTxt.append(spellsave);
} 