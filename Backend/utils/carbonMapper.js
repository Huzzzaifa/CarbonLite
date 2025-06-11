// utils/carbonMapper.js
function getValueEquivalent(kg) {
  if (kg >= 4 && kg <= 6) return "That's the equivalent of burning 5.6 pounds of coal";
  if (kg > 6 && kg <= 8) return "Roughly equal to charging 400 smartphones";
  if (kg < 1) return "Enough to power a lightbulb for 8 hours";
  return "Carbon saved! Every bit counts.";
}

module.exports = getValueEquivalent;
