let jsonData = [
        {Team: "City"},
        {Team: "1 Montreal"},
        {Team: "2 Winnipeg"},
        {Team: "3 Toronto"},
        {Team: "4 Ottawa"}, 
        {Team: "5 Vancouver"},
        {Team: "6 Colorado"},
        {Team: "7 Boston"},
        {Team: "8 Columbus"}
    ]

let htmlData = "<ul><li>Edmonton: 5 <br> Montreal:0 </li><li>Vancouver:0 <br>Toronto: 3</li><li>Edmonton: 5 <br> Montreal:0 </li><li>Vancouver:0 <br>Toronto: 3</li><li>Edmonton: 5 <br> Montreal:0 </li><li>Vancouver:0 <br>Toronto: 3</li><li>Edmonton: 5 <br> Montreal:0 </li><li>Vancouver:0 <br>Toronto: 3</li><li>Edmonton: 5 <br> Montreal:0 </li><li>Vancouver:0 <br>Toronto: 3</li><li>Edmonton: 5 <br> Montreal:0 </li><li>Vancouver:0 <br>Toronto: 3</li></ul>"

module.exports = {
  getHTML: function () {
      console.log("called: getHTML");

      return htmlData;
  },
  getJSON: function () {
      console.log("called: getJSON");

      return jsonData;
  }
};