// Function Declaration for saturdayFun
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Function Expression for mondayWork
  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  
  // Function to create a wrapAdjective function
  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
  // Example calls
  console.log(saturdayFun()); // "This Saturday, I want to roller-skate!"
  console.log(saturdayFun("go hiking")); // "This Saturday, I want to go hiking!"
  
  console.log(mondayWork()); // "This Monday, I will go to the office."
  console.log(mondayWork("work from home")); // "This Monday, I will work from home."
  
  const encouragingPromptFunction = wrapAdjective("!!!");
  console.log(encouragingPromptFunction("a dedicated programmer")); // "You are !!!a dedicated programmer!!!"
  console.log(wrapAdjective("%")("a dedicated programmer")); // "You are %a dedicated programmer%!"
  