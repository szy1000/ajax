function ajax(option) {
	var method;
	var async;
	var url = option.url;
	var data = option.data;
	var success = option.success;
	var dataForm = option.dataForm;


	if(option.method === undefined){
		method = "get";
	}else{
		method = option.method;
	}
  console.log(method);

	if(option.async === undefined){
		async = true;
	}else{
		async = option.async;
	}
  console.log(async);

	var xmlhttp = null;

	if(window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();
	}else{
		xmlhttp = new ActiveXObject("Microsoft.XMLHttpRequest");
	}

	xmlhttp.open(method,url,async);

	if(method == "get"){
		xmlhttp.send();
	}else{
		if(dataForm === undefined){
			xmlhttp.setRequestHeader('content-type','application/x-www-form-urlencoded');
		}
		xmlhttp.setRequestHeader('content-type',dataForm);
		xmlhttp.send(data);
	}

	xmlhttp.onreadystatechange = function () {
		if(xmlhttp.readyState == 4){
			if(xmlhttp.status == 200){
				// success && success(xmlhttp.responseText);
				success(xmlhttp.responseText);

				// var content = document.getElementsByClassName("content")[0];
				// content.innerText = xmlhttp.responseText;
			}else{
				alert('Error:'+ xmlhttp.status);
			}
		}
	}
}