//	HYPE.documents["AnakkuMedia digital Brochure"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "AnakkuMedia%20digital%20Brochure.hyperesources";
	var documentName = "AnakkuMedia digital Brochure";
	var documentLoaderFilename = "anakkumediadigitalbrochure_hype_generated_script.js";
	var mainContainerID = "anakkumediadigitalbrochure_hype_container";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_158 == "undefined") {
		if(typeof window.HYPE_158_DocumentsToLoad == "undefined") {
			window.HYPE_158_DocumentsToLoad = new Array();
			window.HYPE_158_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=158';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_158_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	// handle attempting to load multiple times
	if(HYPE.documents[documentName] != null) {
		var index = 1;
		var originalDocumentName = documentName;
		do {
			documentName = "" + originalDocumentName + "-" + (index++);
		} while(HYPE.documents[documentName] != null);
		
		var allDivs = document.getElementsByTagName("div");
		var foundEligibleContainer = false;
		for(var i = 0; i < allDivs.length; i++) {
			if(allDivs[i].id == mainContainerID && allDivs[i].getAttribute("HYPE_documentName") == null) {
				var index = 1;
				var originalMainContainerID = mainContainerID;
				do {
					mainContainerID = "" + originalMainContainerID + "-" + (index++);
				} while(document.getElementById(mainContainerID) != null);
				
				allDivs[i].id = mainContainerID;
				foundEligibleContainer = true;
				break;
			}
		}
		
		if(foundEligibleContainer == false) {
			return;
		}
	}
	
	var hypeDoc = new HYPE_158();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",N:"i",f:"d",aT:"i",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",bG:"f",aW:"f",S:"i",aI:"i",bH:"d",l:"d",aX:"i",T:"i",m:"c",bI:"f",aJ:"i",n:"c",aK:"i",bJ:"f",aZ:"i",X:"i",A:"c",bK:"f",Y:"bM",B:"c",aL:"i",C:"c",bL:"f",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};
	
	var resources = {"10":{n:"Amagz%20nutrisi-susu.jpg",p:1},"2":{n:"Anakku%202012-04.tiff",p:1},"15":{n:"kaleidoskop%202012_40.jpg",p:1},"3":{n:"AMagz%202012-04.tiff",p:1},"11":{n:"amagz%20vaksin.jpg",p:1},"4":{n:"AMagz%202012-03.tiff",p:1},"16":{n:"kaleidoskop%202012_90.jpg",p:1},"5":{n:"Background%203%20detik%203.mov"},"12":{n:"kaleidoskop%202012_13.jpg",p:1},"17":{n:"Anakku%20Expo.jpg",p:1},"6":{n:"Pages%20from%20Amagz_%236_web.jpg",p:1},"13":{n:"kaleidoskop%202012_16.jpg",p:1},"7":{n:"Animasi%20Flapping%20cepat.m4v"},"0":{n:"Anakku%202012-05.tiff",p:1},"8":{n:"Animasi%20Putar%20roda%20cepat.m4v"},"14":{n:"kaleidoskop%202012_22.jpg",p:1},"1":{n:"Anakku%202012-01.tiff",p:1},"9":{n:"Anakku%20Animation%208%20sec%202.mov"}};
	
	var scenes = [{x:0,p:"600px",c:"#000000",onSceneTimelineCompleteActions:[{type:1,transition:2,sceneSymbol:1}],v:{"3":{aU:8,G:"#FFFFFF",c:426,aV:8,r:"inline",d:75,e:"1.000000",s:"AppleGothic,sans-serif",t:64,Z:"break-word",v:"bold",w:"AnakkuMedia",j:"absolute",x:"visible",k:"div",y:"preserve",z:"3",aS:8,aT:8,a:519,b:376},"30":{aR:"0",x:"visible",bE:[{filename:"5"}],a:-9,b:0,j:"absolute",c:1282,z:"2",aO:"1",d:721,k:"video",aQ:"0",aH:"1"}},n:"Home",T:{kTimelineDefaultIdentifier:{d:3,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{t:0,p:1,i:"Video Track",d:3,o:"30",f:"2"}],f:30}},o:"1"},{x:1,p:"600px",c:"#000000",onSceneTimelineCompleteActions:[{type:1,transition:3,sceneSymbol:1}],v:{"17":{aU:8,G:"#FFFFFF",c:363,aV:8,r:"inline",d:92,e:"1.000000",s:"AppleGothic,sans-serif",X:-1,t:48,Y:"45px",Z:"break-word",v:"bold",w:"Majalah Anakku<div><font size=\"5\">Dari ahli yang peduli buah hati</font></div>",j:"absolute",x:"visible",k:"div",y:"preserve",z:"3",aS:8,E:1,aT:8,a:558,b:566},"21":{o:"content-box",h:"2",x:"visible",a:765,q:"100% 100%",b:38,j:"absolute",r:"inline",c:196,k:"div",z:"6",d:255},"19":{o:"content-box",h:"0",x:"visible",a:329,q:"100% 100%",b:38,j:"absolute",r:"inline",c:196,k:"div",z:"4",d:255},"20":{o:"content-box",h:"1",x:"visible",a:549,q:"100% 100%",b:38,j:"absolute",r:"inline",c:196,k:"div",z:"5",d:256},"31":{aR:"0",x:"visible",bE:[{filename:"5"}],a:-9,b:0,j:"absolute",c:1282,z:"2",aO:"1",d:721,k:"video",aQ:"0",aH:"1"}},n:"Majalah",T:{kTimelineDefaultIdentifier:{d:3,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:3,i:"a",e:55,r:1,s:329,o:"19"},{f:"2",t:0,d:3,i:"c",e:470,r:1,s:196,o:"19"},{f:"2",t:0,d:3,i:"d",e:612,r:1,s:255,o:"19"},{t:0,p:1,i:"Video Track",d:3,o:"31",f:"2"}],f:30}},o:"18"},{x:2,p:"600px",c:"#000000",onSceneTimelineCompleteActions:[{type:1,transition:5,sceneSymbol:1}],v:{"29":{o:"content-box",h:"4",x:"visible",a:538,q:"100% 100%",b:105,j:"absolute",r:"inline",c:210,k:"div",z:"5",d:265},"22":{aU:8,G:"#FFFFFF",c:363,aV:8,r:"inline",d:92,e:"1.000000",s:"AppleGothic,sans-serif",X:-1,t:48,Y:"45px",Z:"break-word",v:"bold",w:"A Magazine<div><font size=\"5\">Untuk ahli yang peduli buah hati</font></div>",j:"absolute",x:"visible",k:"div",y:"preserve",z:"3",aS:8,E:1,aT:8,a:558,b:566},"33":{o:"content-box",h:"6",x:"visible",a:772,q:"100% 100%",b:104,j:"absolute",r:"inline",c:210,k:"div",z:"6",d:266},"28":{o:"content-box",h:"3",x:"visible",a:45,q:"100% 100%",b:105,j:"absolute",r:"inline",c:424,k:"div",z:"4",d:539},"32":{aR:"0",x:"visible",bE:[{filename:"5"}],a:-9,b:0,j:"absolute",c:1282,z:"2",aO:"1",d:721,k:"video",aQ:"0",aH:"1"}},n:"AMagz",T:{kTimelineDefaultIdentifier:{d:3,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{t:0,p:1,i:"Video Track",d:3,o:"32",f:"2"}],f:30}},o:"27"},{x:3,p:"600px",c:"#000000",onSceneTimelineCompleteActions:[{type:1,transition:3,sceneSymbol:1}],v:{"34":{aU:8,G:"#FFFFFF",c:363,aV:8,r:"inline",d:92,e:"1.000000",s:"AppleGothic,sans-serif",X:-1,t:48,Y:"45px",Z:"break-word",v:"bold",w:"<div style=\"text-align: right;\"><span style=\"color: rgb(255, 255, 255); font-family: AppleGothic, sans-serif; font-size: 48px; font-weight: bold; letter-spacing: -1px; line-height: 45px; word-spacing: 1px; background-color: rgb(0, 0, 0); \">Event</span></div>",j:"absolute",x:"visible",k:"div",y:"preserve",z:"3",aS:8,E:1,aT:8,a:558,b:566},"73":{o:"content-box",h:"16",x:"visible",a:-621,q:"100% 100%",b:243,j:"absolute",r:"inline",c:567,k:"div",z:"8",d:425},"71":{o:"content-box",h:"14",x:"visible",a:-619,q:"100% 100%",b:-57,j:"absolute",r:"inline",c:575,k:"div",z:"6",d:431},"74":{o:"content-box",h:"17",x:"visible",a:-680,q:"100% 100%",b:-20,j:"absolute",r:"inline",c:680,k:"div",z:"9",d:481},"69":{o:"content-box",h:"12",x:"visible",a:-621,q:"100% 100%",b:-44,j:"absolute",r:"inline",c:574,k:"div",z:"4",d:431},"38":{aR:"0",x:"visible",bE:[{filename:"5"}],a:-9,b:0,j:"absolute",c:1282,z:"2",aO:"1",d:721,k:"video",aQ:"0",aH:"1"},"72":{o:"content-box",h:"15",x:"visible",a:-621,q:"100% 100%",b:-41,j:"absolute",r:"inline",c:567,k:"div",z:"7",d:425},"70":{o:"content-box",h:"13",x:"visible",a:-617,q:"100% 100%",b:-51,j:"absolute",r:"inline",c:567,k:"div",z:"5",d:425}},n:"Event",T:{kTimelineDefaultIdentifier:{d:13.01,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{t:0,p:1,i:"Video Track",d:3,o:"38",f:"2"},{f:"2",t:0,d:2.29,i:"a",e:331,r:1,s:-621,o:"69"},{f:"2",t:0,d:2.29,i:"b",e:50,r:1,s:-44,o:"69"},{f:"2",t:0,d:2.29,i:"c",e:644,r:1,s:574,o:"69"},{f:"2",t:0,d:2.29,i:"d",e:483,r:1,s:431,o:"69"},{f:"2",t:2,d:3,i:"c",e:628,r:1,s:567,o:"70"},{f:"2",t:2,d:3,i:"b",e:56,r:1,s:-51,o:"70"},{f:"2",t:2,d:3,i:"a",e:339,r:1,s:-617,o:"70"},{f:"2",t:2,d:3,i:"d",e:471,r:1,s:425,o:"70"},{f:"2",t:4.05,d:3.03,i:"c",e:622,r:1,s:575,o:"71"},{f:"2",t:4.05,d:3.03,i:"b",e:57,r:1,s:-57,o:"71"},{f:"2",t:4.05,d:3.03,i:"a",e:339,r:1,s:-619,o:"71"},{f:"2",t:4.05,d:3.03,i:"d",e:467,r:1,s:431,o:"71"},{f:"2",t:6.01,d:2.28,i:"d",e:461,r:1,s:425,o:"72"},{f:"2",t:6.01,d:2.28,i:"a",e:333,r:1,s:-621,o:"72"},{f:"2",t:6.01,d:2.28,i:"b",e:52,r:1,s:-41,o:"72"},{f:"2",t:6.01,d:2.28,i:"c",e:615,r:1,s:567,o:"72"},{f:"2",t:8.04,d:2.29,i:"c",e:615,r:1,s:567,o:"73"},{f:"2",t:8.04,d:2.29,i:"b",e:52,r:1,s:243,o:"73"},{f:"2",t:8.04,d:2.29,i:"a",e:331,r:1,s:-621,o:"73"},{f:"2",t:8.04,d:2.29,i:"d",e:461,r:1,s:425,o:"73"},{f:"2",t:10.01,d:3,i:"a",e:323,r:1,s:-680,o:"74"},{f:"2",t:10.01,d:3,i:"b",e:52,r:1,s:-20,o:"74"}],f:30}},o:"39"},{x:4,p:"600px",c:"#000000",onSceneTimelineCompleteActions:[{type:1,transition:2,sceneSymbol:1}],v:{"44":{aR:"0",x:"visible",bE:[{filename:"5"}],a:-9,b:0,j:"absolute",c:1282,z:"2",aO:"1",d:721,k:"video",aQ:"0",aH:"1"},"43":{aU:8,G:"#FFFFFF",c:427,aV:8,r:"inline",d:92,e:"1.000000",s:"AppleGothic,sans-serif",X:-1,t:48,Y:"45px",Z:"break-word",v:"bold",w:"<span style=\"color: rgb(255, 255, 255); font-family: AppleGothic, sans-serif; font-size: 48px; font-weight: bold; letter-spacing: -1px; line-height: 45px; word-spacing: 1px; background-color: rgb(0, 0, 0); \">Symposium Video</span><div><span style=\"font-size: 36px;\">See anywhere, anytime</span></div>",j:"absolute",x:"visible",k:"div",y:"preserve",z:"3",aS:8,E:1,aT:8,a:558,F:"left",b:566}},n:"Simposium",T:{kTimelineDefaultIdentifier:{d:3,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{t:0,p:1,i:"Video Track",d:3,o:"44",f:"2"}],f:30}},o:"45"},{x:5,p:"600px",c:"#000000",onSceneTimelineCompleteActions:[{type:1,transition:2,sceneSymbol:1}],v:{"47":{aU:8,G:"#FFFFFF",c:568,aV:8,r:"inline",d:92,e:"1.000000",s:"AppleGothic,sans-serif",X:-1,t:48,Y:"45px",Z:"break-word",v:"bold",w:"Accredited Online Training<br><div><span style=\"font-size: 36px;\">Learn anywhere, anytime</span></div>",j:"absolute",x:"visible",k:"div",y:"preserve",z:"3",aS:8,E:1,aT:8,a:417,F:"left",b:566},"46":{aR:"0",x:"visible",bE:[{filename:"5"}],a:-9,b:0,j:"absolute",c:1282,z:"2",aO:"1",d:721,k:"video",aQ:"0",aH:"1"}},n:"Training",T:{kTimelineDefaultIdentifier:{d:3,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{t:0,p:1,i:"Video Track",d:3,o:"46",f:"2"}],f:30}},o:"48"},{x:6,p:"600px",c:"#000000",onSceneTimelineCompleteActions:[{type:1,transition:3,sceneSymbol:1}],v:{"49":{aU:8,G:"#FFFFFF",c:432,aV:8,r:"inline",d:92,e:"1.000000",s:"AppleGothic,sans-serif",X:-1,t:48,Y:"45px",Z:"break-word",v:"bold",w:"Digital / PrintAds<br><div><span style=\"font-size: 36px;\">Beautifully created</span></div>",j:"absolute",x:"visible",k:"div",y:"preserve",z:"3",aS:8,E:1,aT:8,a:553,F:"left",b:566},"50":{aR:"0",x:"visible",bE:[{filename:"5"}],a:-9,b:0,j:"absolute",c:1282,z:"2",aO:"1",d:721,k:"video",aQ:"0",aH:"1"},"68":{o:"content-box",h:"11",x:"visible",a:347,q:"100% 100%",b:61,j:"absolute",r:"inline",c:285,z:"5",k:"div",d:366,e:"0.000000"},"67":{o:"content-box",h:"10",x:"visible",a:670,q:"100% 100%",b:61,j:"absolute",r:"inline",c:289,z:"4",k:"div",d:366,e:"0.000000"}},n:"Digital ads",T:{kTimelineDefaultIdentifier:{d:3.13,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{t:0,p:1,i:"Video Track",d:3,o:"50",f:"2"},{f:"2",t:0,d:2,i:"e",e:"1.000000",r:1,s:"0.000000",o:"68"},{f:"2",t:1.15,d:1.28,i:"e",e:"1.000000",r:1,s:"0.000000",o:"67"}],f:30}},o:"51"},{x:7,p:"600px",c:"#000000",onSceneTimelineCompleteActions:[{type:1,transition:5,sceneSymbol:1}],v:{"53":{aU:8,G:"#FFFFFF",c:568,aV:8,r:"inline",d:92,e:"1.000000",s:"AppleGothic,sans-serif",X:-1,t:48,Y:"45px",Z:"break-word",v:"bold",w:"Trailers<br><div><span style=\"font-size: 36px;\">Seconds of key message</span></div>",j:"absolute",x:"visible",k:"div",y:"preserve",z:"3",aS:8,E:1,aT:8,a:405,F:"left",b:556},"52":{aR:"0",x:"visible",bE:[{filename:"5"}],a:-9,b:0,j:"absolute",c:1282,z:"2",aO:"1",d:721,k:"video",aQ:"0",aH:"1"},"66":{aR:"0",x:"visible",bE:[{filename:"9"}],a:233,b:74,j:"absolute",c:740,z:"4",aO:"1",d:416,k:"video",aQ:"0",aH:"1"}},n:"Trailers",T:{kTimelineDefaultIdentifier:{d:8.11,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{t:0,p:1,i:"Video Track",d:3,o:"52",f:"2"},{t:0,p:1,i:"Video Track",d:8.11,o:"66",f:"2"}],f:30}},o:"54"},{x:8,p:"600px",c:"#000000",v:{"58":{aR:"0",x:"visible",bE:[{filename:"5"}],a:-9,b:0,j:"absolute",c:1282,z:"2",aO:"1",d:721,k:"video",aQ:"0",aH:"1"},"57":{aU:8,G:"#FFFFFF",c:568,aV:8,r:"inline",d:92,e:"1.000000",s:"AppleGothic,sans-serif",X:-1,t:48,Y:"45px",Z:"break-word",v:"bold",w:"Animation",j:"absolute",x:"visible",k:"div",y:"preserve",z:"3",aS:8,E:1,aT:8,a:641,F:"left",b:566},"62":{aR:"0",x:"visible",bE:[{filename:"8"}],a:61,b:361,j:"absolute",c:466,z:"5",aO:"1",d:262,k:"video",aQ:"0",aH:"1"},"61":{aR:"0",x:"visible",bE:[{filename:"7"}],a:61,b:54,j:"absolute",c:466,z:"4",aO:"1",d:262,k:"video",aQ:"0",aH:"1"}},n:"Animasi",T:{kTimelineDefaultIdentifier:{d:4.02,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{t:0,p:1,i:"Video Track",d:3,o:"58",f:"2"},{t:0,p:1,i:"Video Track",d:2.02,o:"61",f:"2"},{t:0,p:1,i:"Video Track",d:4.02,o:"62",f:"2"}],f:30}},o:"60"}];
	
	var javascripts = [];
	
	var functions = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("functions." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			functions[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setResources(resources);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.functions = functions;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID(mainContainerID);
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setGraphicsAcceleration(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;
	document.getElementById(mainContainerID).setAttribute("HYPE_documentName", documentName);

	hypeDoc.documentLoad(this.body);
}());

