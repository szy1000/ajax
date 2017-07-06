function ajax(option) {
	var type = option.type;
	var async = option.async;
	var url = option.url;
	var success = option.success;

	xmlhttp = new XMLHttpRequest();
	xmlhttp.open(type,url,async);
	xmlhttp.send();

	xmlhttp.onreadystatechange = function () {
		if(xmlhttp.readyState == 4){
			if(xmlhttp.status == 200){
				success && success(JSON.parse(xmlhttp.responseText));
			}else{
				alert('Error:'+ xmlhttp.status);
			}
		}
	}
}