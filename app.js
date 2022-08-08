const roll = () => {
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