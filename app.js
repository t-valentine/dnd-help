/**
 * Allows user to learn which skill the ability is related to
 * @returns which skill the ability uses
 */
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
      result.append("Use Intelligence");
      break;
    case "animal":
    case "insight":
    case "medicine":
    case "perception":
    case "survival":
      result.append("Use Wisdom");
      break;
    case "decept":
    case "intim":
    case "perform":
    case "persuade":
      result.append("Use Charisma");
      break;
    case "athletics":
      result.append("Use Strength");
      break;
    default:
      result.append("Use ...");
  }
}

/**
 * Allows the user to ask which dice they should roll for a set of specific scenarios
 * @returns what dice the user should roll
 */
const rollHelp = () => {
  var selection = document.getElementById('rolls').value;
  var result = document.getElementById('roll-p');
  result.innerHTML = "";
  if (selection == 'damage') {
    result.append("Check your weapon/spell's damage die.");
  }
  else if (selection == 'cast') {
    result.append("If the spell mentions a save, the target rolls against your spell save. ");
    result.append("If no save is mentioned, roll a d20.");
  }
  else {
    result.append("Roll a d20");
  }
}

/**
 * Takes user input and runs the correct Helper function for the character's class.
 * Also calculates the character's proficiency bonus
 */
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
      monkHelper(result, prof, level, 3);
      break;
    case "clyde":
      spellcasterHelper(result, prof, level, 0, 'cleric');
      break;
    case "izzy":
      barbarianHelper(result, level);
      break;
    case "karrde":
      spellcasterHelper(result, prof, level, 5, 'reaper');
      break;
    case "worm":
      spellcasterHelper(result, prof, level, 3, 'artificer');
      break;
  }
}

/**
 * Calculates and displays spell information for the Monk class
 * @param {*} div where the information will return on the webpage
 * @param {*} level character's current level
 * @param {*} modifier character's Dexterity modifier 
 * @param {*} proficiency character's proficiency bonus as calculated in characterHelp()
 * @returns Martial Arts Di, Total Ki Points, and Ki Save DC
 */
const monkHelper = (div, level, modifier, proficiency) => {
  // Calculates Martial Arts Di
  var dice = "1d4";
  if (level > 4 && level < 11) {
    dice = "1d6"; 
  } else if (level > 10 && level < 16) {
    dice = "1d8"; 
  }
  else if (level >= 16) {
    dice = "1d10"; 
  }
  
  var div1 = div.appendChild(document.createElement('div'));
  var martialTitle = div1.appendChild(document.createElement('p'));
  martialTitle.classList.add("bolder");
  martialTitle.append("Martial Arts Die:");
  var martialTxt = div1.appendChild(document.createElement('p'));
  martialTxt.append(dice);
  
  // Calculates Ki Points
  var div2 = div.appendChild(document.createElement('div'));
  var kiPointsTitle = div2.appendChild(document.createElement('p'));
  kiPointsTitle.classList.add("bolder");
  kiPointsTitle.append("Total Ki Points:");
  var kiPointsTxt = div2.appendChild(document.createElement('p'));
  kiPointsTxt.append(`${level}`);
  
  // Calculates Ki Save DC
  var div3 = div.appendChild(document.createElement('div'));
  var kiSaveTitle = div3.appendChild(document.createElement('p'));
  kiSaveTitle.classList.add("bolder");
  kiSaveTitle.append("Ki Save DC:");
  var kiSaveTxt = div3.appendChild(document.createElement('p'));
  kiSaveTxt.append(`${8 + proficiency} + Wisdom modifier  (+${modifier}) = ${8 + proficiency + modifier}`);
        
}

/**
 * Calculates and displays spell information for the Barbarian class
 * @param {*} div where the information will return on the webpage
 * @param {*} level character's current level
 * @returns # of Rages and Rage damage bonus
 */
const barbarianHelper = (div, level) => {
  // Calculates # of Rages
  var rages = 2;
  if (level > 2 && level < 6) {
    rages = 3; 
  }
  else if (level > 5 && level < 12) {
    rages = 4; 
  }
  else if (level > 11 && level < 17) {
    rages = 5;
  }
  else if (level > 16 && level < 20) {
    rages = 6;
  }
  else {
    rages = "unlimited";
  }

  var div1 = div.appendChild(document.createElement('div'));
  var rageAmtTitle = div1.appendChild(document.createElement('p'));
  rageAmtTitle.classList.add("bolder");
  rageAmtTitle.append("Number of Rages:");
  var rageAmtTxt = div1.appendChild(document.createElement('p'));
  rageAmtTxt.append(`${rages}`);

  // Calculates Rage Damage
  var damage = "+2";
  if (level > 8 && level < 16) {
    damage = "+3";
  }
  else if (level >= 16) {
    damage = "+4";
  }
  var div2 = div.appendChild(document.createElement('div'));
  var rageDmgTitle = div2.appendChild(document.createElement('p'));
  rageDmgTitle.classList.add("bolder");
  rageDmgTitle.append("Rage Damage:");
  var rageDmgTxt = div2.appendChild(document.createElement('p'));
  rageDmgTxt.append(`${damage}`);
}

/**
 * Calculates and displays spell information for full spellcaster classes
 * @param {*} div where the information will return on the webpage
 * @param {*} proficiency character's proficiency bonus as calculated in characterHelp()
 * @param {*} level character's current level
 * @param {*} modifier character's spellcasting modifier 
 * @param {*} _class character's combat class
 * @returns Spellcasting ability, Spellcasting Modifier, Spell Save, and Spells Known
 */
const spellcasterHelper = (div, proficiency, level, modifier, _class) => {
  // Sets spellcasting ability and spellsave
  if (_class == 'cleric') {
    var ability = `Wisdom (+${modifier})`;
    var spellsave = `${ability} + ${level} = ${modifier + parseInt(level)}`;
  }
  else if (_class == 'reaper') {
    var ability = `WHAT (+${modifier})`;
    var spellsave = `${ability} + ${level} = ${modifier + parseInt(level)}`;
  }
  else if (_class == 'artificer') {
    var ability = `Intelligence (+${modifier})`;
    var spellsave = `${ability} + ${Math.floor(level/2)} = ${modifier + Math.floor(level/2)}`;
  }

  // Spell Ability
  var div1 = div.appendChild(document.createElement('div'));
  var abilitytitle = div1.appendChild(document.createElement('p'));
  abilitytitle.classList.add("bolder");
  abilitytitle.append("Spellcasting Ability: ");
  var abilitytxt = div1.appendChild(document.createElement('p'));
  abilitytxt.append(`${ability}`);

  // Spell Modifier
  var div2 = div.appendChild(document.createElement('div'));
  var modifiertitle = div2.appendChild(document.createElement('p'));
  modifiertitle.classList.add("bolder");
  modifiertitle.append("Spellcasting Modifier:");
  var modifiertxt = div2.appendChild(document.createElement('p'));
  modifiertxt.append(`${ability} + ${proficiency} = +${proficiency + modifier}`);

  // Spell Save
  var div3 = div.appendChild(document.createElement('div'));
  var spellSaveTitle = div3.appendChild(document.createElement('p'));
  spellSaveTitle.classList.add("bolder");
  spellSaveTitle.append("Spell Save:");
  var spellSaveTxt = div3.appendChild(document.createElement('p'));
  spellSaveTxt.append(`${ability} + ${proficiency + 8} = ${modifier + proficiency + 8}`);

  // Spells Known
  var div4 = div.appendChild(document.createElement('div'));
  var spellKnownTitle = div4.appendChild(document.createElement('p'));
  spellKnownTitle.classList.add("bolder");
  spellKnownTitle.append("Spells Known:");

  var spellKnownTxt = div4.appendChild(document.createElement('p'));
  spellKnownTxt.append(spellsave);
} 