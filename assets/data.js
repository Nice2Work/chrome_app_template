var structs = {
  initialTip: "",
  initialCode: "",
  counter: 0,
  data: {
    title: "VueJS Tips",
    tips: [
      {
        tip: "Starting a VueJs app with the Vue-cli",
        code: "vue init  webpack projectName"
      }
    ],
    Tip: { tip: this.initialTip, code: this.initialCode },
    twitter: "@larry_sigo",
    tipsLeft: 5
  },
  getRandomNumber: function() {
    var tipsCount = this.data.tips.length;
    var randomNumber = Math.floor(Math.random() * (tipsCount - 1) + 1);
    console.log(randomNumber);
    return randomNumber;
  },
  getRandomTip: function() {
    var rand = this.getRandomNumber();
    var genTip = this.data.tips[rand];
    console.log(genTip);
    this.data.Tip.tip = genTip.tip;
    this.data.Tip.code = genTip.code;
    return;
  },
  btnClick: function() {
    if (this.counter === 5) {
      this.data.tipsLeft = 0;
      document.querySelector(".tip-button").classList.add("disabled");
    } else {
      this.counter++;
      this.data.tipsLeft--;
      this.getRandomTip();
      console.log(this.counter);
    }
  }
};

structs.getRandomTip();
