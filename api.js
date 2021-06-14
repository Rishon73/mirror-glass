

$(document).ready(function(){

	const TOSCA_SERVER_PROTOCOL = 'http://';
	const TOSCA_SERVER = 'localhost';
	const TOSCA_SERVER_PORT = ':90'; //":90"
	const ENDPOINT = '/Rest/ToscaCommander';
	var TOSCA_ENDPOINT = TOSCA_SERVER_PROTOCOL + TOSCA_SERVER + TOSCA_SERVER_PORT + ENDPOINT;

	// Event listeners
	$("#start").click(function(){doAPI(TOSCA_ENDPOINT + "/GetWorkspaces", "/GetWorkspaces", "", "");});


/*
	$("#lastname").change(function(){checkGetPerson();checkRating();});
	$("#sendemail").attr("id","sendemailCHANGED"); // this disables the PDF-send.

	$("div.fullwidth-block .container").append("<div id='soaplog_div'><b>LOG:</b><hr/><div id='soaplog'></div></div>");
	$(".main-content .breadcrumbs .container").prepend("<button id='toggle-log' name='Toggle Log'><i class='fa fa-toggle-off' /> Log</button>");
	$("#numberofseatsmotorcycle").empty();
	$("#numberofseats").empty();
*/

	async function doAPI(url, task, user, pass) {
		try {
			console.log("url: " + url +
			"\ntask: " + task +
			"\nuser: " + user +
			"\npass: " + pass
		);

		var conf = null;
		if ((user != "") && pass != "") {
			conf = {
				auth: {
					username: 'Tosca',
					password: 'tosca'
				}
			};
		}

		const serverResponse = await axios.get(url, conf)
			.then((response) => {
			validateResponse(response);
			//writeResults(response, task);
		});
console.log(serverResponse)
} catch (error) {;
			console.error(error);
		}
	}

	function validateResponse(response) {
		console.log("response.status = " + response.status)
	   if (response.status != 200) {
	     throw Error(response.statusText);
	   }
	  return response;
	}

	function writeResults(result, uri) {
		console.log(result.data);
		switch (uri) {
			case "/GetWorkspaces":
				writeWorkspaces(result.data);
				break;
			case "\projectid":
				return "sss;";
				break;
			default:

		}
	}

	function writeWorkspaces(list) {
		$("#canvas").text("");
		var out = "";
    var i;
    for(i = 0; i < list.length; i++) {
			getProgectID(encodeURI(TOSCA_ENDPOINT + list[i] + "\\projectid"))
			//$("#canvas").append("<LI>" + TOSCA_ENDPOINT + list[i] + "\\projectid");
			//$("#canvas").append('<a href="' + list[i] + '">' + list[i] + '</a><br>');
    }
	}

	function getProgectID(url) {
		doAPI(url, "\projectid", "Tosca", "tosca")
	}

	function logError(error) {
	  console.log('Looks like there was a problem: \n', error);
	}

}); // end of $(document).ready(function()
