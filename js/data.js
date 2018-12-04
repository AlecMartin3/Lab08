let teamStandings = {
    "Standings":[
        {"Edmonton": "10"},
        {"Montreal": "9"},
        {"Winnipeg": "8"},
        {"Toronto": "7"},
        {"Ottawa": "5"},
        {"Vancouver": "4"},
        {"Colorado": "3"},
        {"Boston": "2"},
        {"Columbus": "1"}
    ]
}

let teamScores = "<ul><li>Edmonton: 5 <br> Montreal:0 </li><li>Vancouver:0 <br>Toronto: 3</li><li>Edmonton: 5 <br> Montreal:0 </li><li>Vancouver:0 <br>Toronto: 3</li><li>Edmonton: 5 <br> Montreal:0 </li><li>Vancouver:0 <br>Toronto: 3</li><li>Edmonton: 5 <br> Montreal:0 </li><li>Vancouver:0 <br>Toronto: 3</li><li>Edmonton: 5 <br> Montreal:0 </li><li>Vancouver:0 <br>Toronto: 3</li><li>Edmonton: 5 <br> Montreal:0 </li><li>Vancouver:0 <br>Toronto: 3</li></ul>"

module.exports = {
  getHTML: function () {
      console.log("called: getHTML");

      return teamStandings;
  },
  getJSON: function () {
      console.log("called: getJSON");

      return teamScores;
  }
};