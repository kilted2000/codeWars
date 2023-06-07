// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// my solution


function bmi(weight, height) {
    let size = weight / (height * height);
    let category;
  
    switch (true) {
      case size <= 18.5:
        category = "Underweight";
        break;
      case size <= 25.0:
        category = "Normal";
        break;
      case size <= 30.0:
        category = "Overweight";
        break;
      case size > 30.0:
        category = "Obese";
        break;
      default:
        category = "You broke the scales!";
    }
  
    return category;
  }
  