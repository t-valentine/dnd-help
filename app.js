/**
 * Allows user to learn which skill the ability is related to
 * @returns which skill the ability uses
 */
const skillsHelp = () => {
  let selection = document.getElementById('skills').value;
  let result = document.getElementById('skill-p');
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
  let selection = document.getElementById('rolls').value;
  let result = document.getElementById('roll-p');
  result.innerHTML = "";
  if (selection == 'damage') {
    result.append("Check your weapon/spell's damage die.");
  }
  else if (selection == 'cast') {
    result.append("If the spell mentions a save, the target rolls against your spell save. ");
    result.append("If no save is mentioned, roll a d20 and add your spellcasting modifier to the roll.");
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
  let character = document.getElementById('character').value;
  let level = document.getElementById('level').value;
  let result = document.getElementById('unique-info');
  result.innerHTML = "";

  // get proficiency bonus by level
  let prof = 2;
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
  let dice = "1d4";
  if (level > 4 && level < 11) {
    dice = "1d6"; 
  } else if (level > 10 && level < 16) {
    dice = "1d8"; 
  }
  else if (level >= 16) {
    dice = "1d10"; 
  }
  
  let div1 = div.appendChild(document.createElement('div'));
  let martialTitle = div1.appendChild(document.createElement('p'));
  martialTitle.classList.add("bolder");
  martialTitle.append("Martial Arts Die:");
  let martialTxt = div1.appendChild(document.createElement('p'));
  martialTxt.append(dice);
  
  // Calculates Ki Points
  let div2 = div.appendChild(document.createElement('div'));
  let kiPointsTitle = div2.appendChild(document.createElement('p'));
  kiPointsTitle.classList.add("bolder");
  kiPointsTitle.append("Total Ki Points:");
  let kiPointsTxt = div2.appendChild(document.createElement('p'));
  kiPointsTxt.append(`${level}`);
  
  // Calculates Ki Save DC
  let div3 = div.appendChild(document.createElement('div'));
  let kiSaveTitle = div3.appendChild(document.createElement('p'));
  kiSaveTitle.classList.add("bolder");
  kiSaveTitle.append("Ki Save DC:");
  let kiSaveTxt = div3.appendChild(document.createElement('p'));
  kiSaveTxt.append(`${8 + proficiency} + Wisdom modifier  (+${modifier}) = ${8 + proficiency + modifier}`);
        
}

/**
 * Calculates and displays spell information for the Barbarian class
 * @param {*} div where the information will return on the webpage
 * @param {*} level character's current level
 * @returns # of Rages, Rage damage bonus, and Wild Magic Surge Effect
 */
const barbarianHelper = (div, level) => {
  // Calculates # of Rages
  let rages = 2;
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

  let div1 = div.appendChild(document.createElement('div'));
  let rageAmtTitle = div1.appendChild(document.createElement('p'));
  rageAmtTitle.classList.add("bolder");
  rageAmtTitle.append("Number of Rages:");
  let rageAmtTxt = div1.appendChild(document.createElement('p'));
  rageAmtTxt.append(`${rages}`);

  // Calculates Rage Damage
  let damage = "+2";
  if (level > 8 && level < 16) {
    damage = "+3";
  }
  else if (level >= 16) {
    damage = "+4";
  }
  let div2 = div.appendChild(document.createElement('div'));
  let rageDmgTitle = div2.appendChild(document.createElement('p'));
  rageDmgTitle.classList.add("bolder");
  rageDmgTitle.append("Rage Damage:");
  let rageDmgTxt = div2.appendChild(document.createElement('p'));
  rageDmgTxt.append(`${damage}`);

  // The following is only applicable for Path of Wild Magic Barbarians
  // Calculates Wild Magic Surge Effect
  let diroll = Math.floor(Math.random() * 7);
  let surgeEffect;
  switch (diroll) {
    case 0:
      surgeEffect = "	Each creature of your choice that you can see within 30 feet of you must succeed on a Constitution saving throw or take 1d12 necrotic damage. You also gain temporary hit points equal to 1d12 plus your barbarian level.";
      break;
    case 1:
      surgeEffect = "You teleport up to 30 feet to an unoccupied space you can see. Until your rage ends, you can use this effect again on each of your turns as a bonus action.";
      break;
    case 2:
      surgeEffect = "	An intangible spirit, which looks like a flumph or a pixie (your choice), appears within 5 feet of one creature of your choice that you can see within 30 feet of you. At the end of the current turn, the spirit explodes, and each creature within 5 feet of it must succeed on a Dexterity saving throw or take 1d6 force damage. Until your rage ends, you can use this effect again, summoning another spirit, on each of your turns as a bonus action.";
      break;
    case 3:
      surgeEffect = "Magic infuses one weapon of your choice that you are holding. Until your rage ends, the weapon's damage type changes to force, and it gains the light and thrown properties, with a normal range of 20 feet and a long range of 60 feet. If the weapon leaves your hand, the weapon reappears in your hand at the end of the current turn.";
      break;
    case 4:
      surgeEffect = "Whenever a creature hits you with an attack roll before your rage ends, that creature takes 1d6 force damage, as magic lashes out in retribution.";
      break;
    case 5:
      surgeEffect = "Until your rage ends, you are surrounded by multicolored, protective lights; you gain a +1 bonus to AC, and while within 10 feet of you, your allies gain the same bonus.";
      break;
    case 6:
      surgeEffect = "Flowers and vines temporarily grow around you; until your rage ends, the ground within 15 feet of you is difficult terrain for your enemies.";
      break;
    case 7:
      surgeEffect = " bolt of light shoots from your chest. Another creature of your choice that you can see within 30 feet of you must succeed on a Constitution saving throw or take 1d6 radiant damage and be blinded until the start of your next turn. Until your rage ends, you can use this effect again on each of your turns as a bonus action.";
      break;
  }
  
  //let div3 = div.appendChild(document.createElement('div'));
  let wildMagicTitle = div.appendChild(document.createElement('p'));
  wildMagicTitle.classList.add("bolder");
  wildMagicTitle.append("Wild Surge Effect:");
  let wildMagicTxt = div.appendChild(document.createElement('p'));
  wildMagicTxt.append(`${surgeEffect}`);
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
  let ability, spellsave;
  // Sets spellcasting ability and spellsave
  if (_class == 'cleric') {
    ability = `Wisdom (+${modifier})`;
    spellsave = `${ability} + ${level} = ${modifier + parseInt(level)}`;
  }
  else if (_class == 'reaper') {
    ability = `WHAT (+${modifier})`;
    spellsave = `${ability} + ${level} = ${modifier + parseInt(level)}`;
  }
  else if (_class == 'artificer') {
    ability = `Intelligence (+${modifier})`;
    spellsave = `${ability} + ${Math.floor(level/2)} = ${modifier + Math.floor(level/2)}`;
  }

  // Spell Ability
  let div1 = div.appendChild(document.createElement('div'));
  let abilitytitle = div1.appendChild(document.createElement('p'));
  abilitytitle.classList.add("bolder");
  abilitytitle.append("Spellcasting Ability: ");
  let abilitytxt = div1.appendChild(document.createElement('p'));
  abilitytxt.append(`${ability}`);

  // Spell Modifier
  let div2 = div.appendChild(document.createElement('div'));
  let modifiertitle = div2.appendChild(document.createElement('p'));
  modifiertitle.classList.add("bolder");
  modifiertitle.append("Spellcasting Modifier:");
  let modifiertxt = div2.appendChild(document.createElement('p'));
  modifiertxt.append(`${ability} + ${proficiency} = +${proficiency + modifier}`);

  // Spell Save
  let div3 = div.appendChild(document.createElement('div'));
  let spellSaveTitle = div3.appendChild(document.createElement('p'));
  spellSaveTitle.classList.add("bolder");
  spellSaveTitle.append("Spell Save:");
  let spellSaveTxt = div3.appendChild(document.createElement('p'));
  spellSaveTxt.append(`${ability} + ${proficiency + 8} = ${modifier + proficiency + 8}`);

  // Spells Known
  let div4 = div.appendChild(document.createElement('div'));
  let spellKnownTitle = div4.appendChild(document.createElement('p'));
  spellKnownTitle.classList.add("bolder");
  spellKnownTitle.append("Spells Known:");

  let spellKnownTxt = div4.appendChild(document.createElement('p'));
  spellKnownTxt.append(spellsave);
} 