$(document).ready(function() {

  const createResponse = (response) => {

    const $responseDiv = $('<div class="col-12 d-flex align-items-center"></div>');

    const $robot = $('<div class="robot"></div>');
    const $robotHead = $('<div class="robot-head"></div>');
    const $robotEyesLeft = $('<div class="robot-eyes left"></div>');
    const $robotEyesRight = $('<div class="robot-eyes right"></div>');
    const $robotNeck = $('<div class="robot-neck"></div>');
    const $robotBody = $('<div class="robot-body"></div>');
    const $robotArmsLeft = $('<div class="robot-hands left"></div>');
    const $robotArmsRight = $('<div class="robot-hands right"></div>');
    const $robotLegsLeft = $('<div class="robot-legs left"></div>');
    const $robotLegsRight = $('<div class="robot-legs right"></div>');

    const $quote = $('<div class="quote shp1">' + response + '</div>');

    $robotHead.append($robotEyesLeft);
    $robotHead.append($robotEyesRight);

    $robot.append($robotHead);
    $robot.append($robotNeck);
    $robot.append($robotBody);
    $robot.append($robotArmsLeft);
    $robot.append($robotArmsRight);
    $robot.append($robotLegsLeft);
    $robot.append($robotLegsRight);

    $responseDiv.append($robot);
    $responseDiv.append($quote);

    return $responseDiv;
  }

  $("#submit").on("click", function(event) {
    event.preventDefault();
    let prompt = document.getElementById("prompt-area").value;
    $.ajax({
      type: "POST",
      contentType: "application/json",
      url: "/generate",
      data: JSON.stringify({"prompt": prompt })
    })
    .success((response) => {
      console.log(response.result);
      $('#response-area').prepend(createResponse(response.result));
    })
  })
});