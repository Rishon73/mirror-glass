

$(document).ready(function(){
	// Event listeners
	$("#start").click(function(){doAPI();});
/*
	$("#nextenterproductdata").click(function(){checkAddPerson();});
	$("#selectpriceoption").click(function(){checkAddPerson();});
	$("#lastname").change(function(){checkGetPerson();checkRating();});
	$("#firstname").change(function(){checkGetPerson();checkRating();});
	$("#birthdate").change(function(){checkRating();});
	$("#engineperformance").change(function(){checkRating();});
	$("#sendemail").attr("id","sendemailCHANGED"); // this disables the PDF-send.
	$("#sendemailCHANGED").click(function(){checkSendQuote();});
	$("#contactAgent").click(function(){checkContactAgentForm();});
	$("#resetForm").click(function(){resetContactForm();});

	$("div.fullwidth-block .container").append("<div id='soaplog_div'><b>LOG:</b><hr/><div id='soaplog'></div></div>");
	$(".main-content .breadcrumbs .container").prepend("<button id='toggle-log' name='Toggle Log'><i class='fa fa-toggle-off' /> Log</button>");
	$("#numberofseatsmotorcycle").empty();
	$("#numberofseats").empty();
*/
});

 function doAPI() {
	try {
		//const response = await axios.get('http://localhost:90/Rest/ToscaCommander/GetWorkspaces');
		//console.log(response);
		var url = "http://a7e8df33060e.ngrok.io/Rest/ToscaCommander/GetWorkspaces";

		const response =  fetch(url, {
			method: 'GET',
			mode: 'no-cors',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		 })
			.then(validateResponse)
			.then(readResponseAsJSON);
			/*
			.then(logResult)
			.catch(logError);
			*/

	} catch (error) {
		console.error(error);
	}
}

function validateResponse(response) {
	console.log("response.ok = "+response.ok)
  // if (!response.ok) {
  //   throw Error(response.statusText);
  // }
  return response;
}

function readResponseAsJSON(response) {
	//console.log.arguments(response);
	console.log(response);
	console.log(response.headers);
	//console.log(response.__proto__.json.arguments);

	//return response.json();
}

function logResult(result) {
  console.log(result);
}

function logError(error) {
  console.log('Looks like there was a problem: \n', error);
}
