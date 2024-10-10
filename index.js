const messageConfig = {
  frontContent: "Happy Birthday, Odin One-Eye!",
  insideContent:
    "From Asgard to Nifelheim, you're the best all-father ever.\n\nLove,",
  closing: {
    Thor: "Admiration, respect, and love",
    Loki: "Your son",
  },
  signatories: ["Thor", "Loki"],
};
console.log("Debug Before forEach: " + this);
const printCard = function () {
  console.log(this.frontContent);
  console.log(this.insideContent);

  this.signatories.forEach(function (signatory) {
    const message = `${this.closing[signatory]}, ${signatory}`;
    console.log(message);
  }, this);
};

printCard.call(messageConfig);