let timeDict = {
  "00": "twelve",
  "01": "one",
  "02": "two",
  "03": "three",
  "04": "four",
  "05": "five",
  "06": "six",
  "07": "seven",
  "08": "eight",
  "09": "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eitghteen",
  19: "nineteen",
  20: "twenty",
  30: "thirty",
  40: "fourty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety",
};

function convertTime(time) {
  let result = [];
  let suffix = "a.m.";

  let first = time[0] + time[1];
  let second = time[3] + time[4];

  // check special case of noon and midnight
  if (time == "00-00") {
    return "midnight";
  } else if (time == "12-00") {
    return "noon";
  }

  //check if am or pm, convert 24hr time to 12hr
  if (first == 12) {
    result.push(timeDict[12]);
    suffix = "p.m.";
  } else if (first > 12) {
    let hour = parseInt(first) - 12;
    result.push(timeDict[`0${hour}`]);
    suffix = "p.m.";
  } else {
    result.push(timeDict[first]);
  }

  if (time[3] == "0") {
    result.push("o'");
    result.push(timeDict[second]);
  } else if (time[4] == 0) {
    result.push(timeDict[second]);
  } else if (time[3] == 1) {
    result.push(timeDict[time[3] + time[4]]);
  } else {
    result.push(timeDict[time[3] + 0] + timeDict[`0${time[4]}`]);
  }

  result.push(suffix);
  result = result.join(" ");
  return result;
}

module.exports = convertTime;
