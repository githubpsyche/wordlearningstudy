/**
 * jspsych-word-referent
 * a jspsych plugin for word-referent pair trails.
 *
 * Jordan Gunn
 *
 * partial documentation: docs.jspsych.org
 *
 */

jsPsych.plugins['word-referent'] = (function(){

  var plugin = {};

  plugin.trial = function(display_element, trial){
    // allow variables as functions
    trial = jsPsych.pluginAPI.evaluateFunctionParameters(trial);

    // set default values for the parameters; no default value for images
    trial.word = trial.word || "";
    var timing_response = 100;
    trial.is_test = trial.is_test || false;
    trial.response_ends_trial = (typeof trial.response_ends_trial == 'undefined') ? true : trial.response_ends_trial;
    
    // default data
    var trialdata = {
      choice: '0',
      condition: trial.condition,
      block: trial.block,
      options: trial.stimuli,
      primary: trial.primary,
      secondary: trial.secondary,
      word: trial.word
    };

    
    // display prompt and word if there is one
    if (trial.word !== "") {
      display_element.append('<b><p style="text-align:center;">Oh look! A ' + trial.word + "!</p></b>");
    }
  
  // now two rows of three images
  if (trial.is_test) {
    display_element.append('<p style="text-align: center"><img border="5" id="1" src="' + trial.stimuli[0] + '" style="width: 130;  margin-right: 1%; height: 130;"><img border="5" id="2" src="' + trial.stimuli[1] + '" style="width: 130;  margin-right: 1%; height: 130;"></p>'); // <img border="5" id="3" src="' + trial.stimuli[2] + '" style="width: 130;  margin-right: 1%; height: 130;">
    display_element.append('<p style="text-align: center"><img border="5" id="3" src="' + trial.stimuli[2] + '" style="width: 130;  margin-right: 1%; height: 130;"><img border="5" id="4" src="' + trial.stimuli[3] + '" style="width: 130;  margin-right: 1%; height: 130;"></p>'); // <img border="5" id="6" src="' + trial.stimuli[5] + '" style="width: 130;  margin-right: 1%; height: 130;">
  } else {
    display_element.append('<p style="text-align: center"><img border="5" src="' + trial.stimuli[0] + '" style="width: 130;  margin-right: 1%; height: 130;"><img border="5" src="' + trial.stimuli[1] + '" style="width: 130;  margin-right: 1%; height: 130;"></p>'); // <img border="5" src="' + trial.stimuli[2] + '" style="width: 130;  margin-right: 1%; height: 130;">
    display_element.append('<p style="text-align: center"><img border="5" src="' + trial.stimuli[2] + '" style="width: 130;  margin-right: 1%; height: 130;"><img border="5" src="' + trial.stimuli[3] + '" style="width: 130;  margin-right: 1%; height: 130;"></p>'); // <img border="5" src="' + trial.stimuli[5] + '" style="width: 130;  margin-right: 1%; height: 130;">
  }

  // end trial at time limit if one is set
  if (!trial.is_test) {
    var t1 = setTimeout(function() {
      display_element.html(''); // clear the display
      
      // end
      jsPsych.finishTrial(trialdata);
    }, timing_response);
  }
  
  // image hover
  $("#1").hover(function(){
    $(this).css("borderColor", "yellow");
    }, function(){
    $(this).css("borderColor", "black");
  });
  $("#2").hover(function(){
    $(this).css("borderColor", "yellow");
    }, function(){
    $(this).css("borderColor", "black");
  });
  $("#3").hover(function(){
    $(this).css("borderColor", "yellow");
    }, function(){
    $(this).css("borderColor", "black");
  });
  $("#4").hover(function(){
    $(this).css("borderColor", "yellow");
    }, function(){
    $(this).css("borderColor", "black");
  });
  $("#5").hover(function(){
    $(this).css("borderColor", "yellow");
    }, function(){
    $(this).css("borderColor", "black");
  });
  $("#6").hover(function(){
    $(this).css("borderColor", "yellow");
    }, function(){
    $(this).css("borderColor", "black");
  });
  
  // response storage
  $("#1").click(function() {
      display_element.html(''); // clear the display
      
      // data saving
      var trialdata = {
        choice: '1',
        condition: trial.condition,
        block: trial.block,
        options: trial.stimuli,
        primary: trial.primary,
        secondary: trial.secondary,
        word: trial.word
      };
      
      jsPsych.finishTrial(trialdata);
    });
  $("#2").click(function() {
      display_element.html(''); // clear the display
      
      // data saving
      var trialdata = {
        choice: '2',
        condition: trial.condition,
        block: trial.block,
        options: trial.stimuli,
        primary: trial.primary,
        secondary: trial.secondary,
        word: trial.word
      };
      
      jsPsych.finishTrial(trialdata);
    });
  $("#3").click(function() {
      display_element.html(''); // clear the display
      
      // data saving
      var trialdata = {
        choice: '3',
        condition: trial.condition,
        block: trial.block,
        options: trial.stimuli,
        primary: trial.primary,
        secondary: trial.secondary,
        word: trial.word
      };
      
      jsPsych.finishTrial(trialdata);
    });
  $("#4").click(function() {
      display_element.html(''); // clear the display
      
      // data saving
      var trialdata = {
        choice: '4',
        condition: trial.condition,
        block: trial.block,
        options: trial.stimuli,
        primary: trial.primary,
        secondary: trial.secondary,
        word: trial.word
      };
      
      jsPsych.finishTrial(trialdata);
    });
  $("#5").click(function() {
      display_element.html(''); // clear the display
      
      // data saving
      var trialdata = {
        choice: '5',
        condition: trial.condition,
        block: trial.block,
        options: trial.stimuli,
        primary: trial.primary,
        secondary: trial.secondary,
        word: trial.word
      };
      
      jsPsych.finishTrial(trialdata);
    });
  $("#6").click(function() {
      display_element.html(''); // clear the display
      
      // data saving
      var trialdata = {
        choice: '6',
        condition: trial.condition,
        block: trial.block,
        options: trial.stimuli,
        primary: trial.primary,
        secondary: trial.secondary,
        word: trial.word
      };
      
      jsPsych.finishTrial(trialdata);
    });
    };
  
  return plugin;

})();