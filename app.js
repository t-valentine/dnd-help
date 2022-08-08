const skillsHelp = () => {
  var selection = document.getElementById('skills').value;
  var result = document.getElementById('skill-p');
  result.innerHTML = "";
  switch (selection) {
    case "acrobatics" || "sleight" || "stealth":
      result.append("Use Dexterity");
      break;
    case "arcana" || "history" || "invest" || "nature" || "religion":
      result.append("Use Intelligence");
      break;
    case "animal" || "insight" || "medicine" || "perception" || "survival":
      result.append("Use Wisdom");
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