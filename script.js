    var animal = {
      "playful": "sometimes",
      "annoying": "all day",
      "texture": "fluffy",
      "legs": 4,
      "eyes": 2,
      "sound": "muffled snort",
      "vertical": 6.5,
      "horizontal": 2,
      "weight": 60,
      Fly: function() {
        return "This animal can't fly.";
      },
      Walk: function() {
        return "This animal walks.";
      },
      Run: function() {
        return "This animal runs slowly.";
      },
      Fight: function() {
        return "This animal is feisty!";
      },
      Eat: function() {
        return "This animal eats fufu berries.";
      },
      Sleep: function() {
        return "This animal sleeps during the day.";
      },
      Mood: function() {
        return "This animal has a sunny disposition.";
      }
    };
  console.log("Playful: " + animal.playful);
  console.log("Annoying: " + animal.annoying);
  console.log("Texture: " + animal.texture);
  console.log("Legs: " + animal.legs);
  console.log("Eyes: " + animal.eyes);
  console.log("Sound: " + animal.sound);
  console.log("Vertical: " + animal.vertical);
  console.log("Horizontal: " + animal.horizontal);
  console.log("Weight: " + animal.weight);
  console.log(animal.Fly());
  console.log(animal.Walk());
  console.log(animal.Run());
  console.log(animal.Fight());
  console.log(animal.Eat());
  console.log(animal.Sleep());
  console.log(animal.Mood());
