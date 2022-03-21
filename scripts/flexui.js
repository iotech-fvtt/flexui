Hooks.on('init', () => {
	
	game.settings.register('flexui', 'disableStyles', {
		name: game.i18n.localize('UI.SETTINGS.DISABLE_STYLES'),
		hint: game.i18n.localize('UI.SETTINGS.DISABLE_STYLES_HINT'),
		scope: "client",
		type: Boolean,
		default: false,
		config: true,
		onChange: () => {
			location.reload();
		}
   });
	game.settings.register("flexui", "theme", {
		name: game.i18n.localize('UI.SETTINGS.THEME'),
		hint: game.i18n.localize('UI.SETTINGS.THEME_HINT'),
		scope: "client",     
		config: true,        
		type: String,
		choices: {           
		"f": "Fantasy",
		"s": "SciFi",
		"st": "Stone"
		},
		default: "f",        
		onChange: value => { 
			location.reload();
		}
	});    
    	game.settings.register('flexui', 'smallUI', {
		name: game.i18n.localize('UI.SETTINGS.SMALLUI'),
		hint: game.i18n.localize('UI.SETTINGS.SMALLUI_HINT'),
		scope: "client",
		type: Boolean,
		default: false,
		config: true,
		onChange: () => {
			location.reload();
		}        
    });
    game.settings.register("flexui", "fontSize", {
        name: game.i18n.localize('UI.SETTINGS.FONTSIZE'),
        hint: game.i18n.localize('UI.SETTINGS.FONTSIZE_HINT'),
        scope: "client",     
        config: true,        
        type: String,
        choices: {           
        "s": "Small",
        "m": "Medium",
        "l": "Large"
        },
        default: "m",        
        onChange: value => { 
            location.reload();
        }
    });



if ((!game.settings.get('flexui', 'disableStyles')) && (game.settings.get('flexui', 'theme') == "f")) { 
    fantasyUIAddMainCss("f"); 
    if (!game.settings.get('flexui', 'smallUI')) { fantasyUIAddLargeCss("f") } else {fantasyUIAddSmallCss("f")}
    if (game.settings.get('flexui', 'fontSize') == "s") { fantasyUIAddSmallFont("f") }
    if (game.settings.get('flexui', 'fontSize') == "m") { fantasyUIAddMediumFont("f") }
    if (game.settings.get('flexui', 'fontSize') == "l") { fantasyUIAddLargeFont("f") }
} else if ((!game.settings.get('flexui', 'disableStyles')) && (game.settings.get('flexui', 'theme') == "s")) { 
    fantasyUIAddMainCss("s") 
    if (!game.settings.get('flexui', 'smallUI')) { fantasyUIAddLargeCss("s") } else {fantasyUIAddSmallCss("s")}
    if (game.settings.get('flexui', 'fontSize') == "s") { fantasyUIAddSmallFont("s") }
    if (game.settings.get('flexui', 'fontSize') == "m") { fantasyUIAddMediumFont("s") }
    if (game.settings.get('flexui', 'fontSize') == "l") { fantasyUIAddLargeFont("s") }
} else if ((!game.settings.get('flexui', 'disableStyles')) && (game.settings.get('flexui', 'theme') == "st")) { 
    fantasyUIAddMainCss("st") 
    if (!game.settings.get('flexui', 'smallUI')) { fantasyUIAddLargeCss("st") } else {fantasyUIAddSmallCss("st")}
    if (game.settings.get('flexui', 'fontSize') == "s") { fantasyUIAddSmallFont("st") }
    if (game.settings.get('flexui', 'fontSize') == "m") { fantasyUIAddMediumFont("st") }
    if (game.settings.get('flexui', 'fontSize') == "l") { fantasyUIAddLargeFont("st") }
} else {
    preventDisaster("f");
}

});

function preventDisaster(theme) {
    fantasyUIAddSmallCss(theme);
}


function fantasyUIAddSmallCss(theme) {
	const head = document.getElementsByTagName("head")[0];
	const mainCss = document.createElement("link");
	mainCss.setAttribute("rel", "stylesheet")
	mainCss.setAttribute("type", "text/css")
	if (theme == "f") {
		mainCss.setAttribute("href", "modules/flexui/css/fantasy/small.css")
	} else if (theme == "s"){
		mainCss.setAttribute("href", "modules/flexui/css/scifi/small.css")
	} else if (theme == "st"){
		mainCss.setAttribute("href", "modules/flexui/css/stone/small.css")
	}
	mainCss.setAttribute("media", "all")
	head.insertBefore(mainCss, head.lastChild);
}

function fantasyUIAddLargeCss(theme) {
	const head = document.getElementsByTagName("head")[0];
	const mainCss = document.createElement("link");
	mainCss.setAttribute("rel", "stylesheet")
	mainCss.setAttribute("type", "text/css")
	if (theme == "f") {
		mainCss.setAttribute("href", "modules/flexui/css/fantasy/large.css")
	} else if (theme == "s"){
		mainCss.setAttribute("href", "modules/flexui/css/scifi/large.css")
	} else if (theme == "st"){
		mainCss.setAttribute("href", "modules/flexui/css/stone/large.css")
	}
	mainCss.setAttribute("media", "all")
	head.insertBefore(mainCss, head.lastChild);
}

function fantasyUIAddLargeFont(theme) {
	const head = document.getElementsByTagName("head")[0];
	const mainCss = document.createElement("link");
	mainCss.setAttribute("rel", "stylesheet")
	mainCss.setAttribute("type", "text/css")
	if (theme == "f") {
		mainCss.setAttribute("href", "modules/flexui/css/fantasy/fontLarge.css")
	} else if (theme == "s"){
		mainCss.setAttribute("href", "modules/flexui/css/scifi/fontLarge.css")
	} else if (theme == "st"){
		mainCss.setAttribute("href", "modules/flexui/css/stone/fontLarge.css")
	}
	mainCss.setAttribute("media", "all")
	head.insertBefore(mainCss, head.lastChild);
}

function fantasyUIAddMediumFont(theme) {
	const head = document.getElementsByTagName("head")[0];
	const mainCss = document.createElement("link");
	mainCss.setAttribute("rel", "stylesheet")
	mainCss.setAttribute("type", "text/css")
	if (theme == "f") {
		mainCss.setAttribute("href", "modules/flexui/css/fantasy/fontMedium.css")
	} else if (theme == "s"){
		mainCss.setAttribute("href", "modules/flexui/css/scifi/fontMedium.css")
	} else if (theme == "st"){
		mainCss.setAttribute("href", "modules/flexui/css/stone/fontMedium.css")
	}
	mainCss.setAttribute("media", "all")
	head.insertBefore(mainCss, head.lastChild);
}

function fantasyUIAddSmallFont(theme) {
	const head = document.getElementsByTagName("head")[0];
	const mainCss = document.createElement("link");
	mainCss.setAttribute("rel", "stylesheet")
	mainCss.setAttribute("type", "text/css")
	if (theme == "f") {
		mainCss.setAttribute("href", "modules/flexui/css/fantasy/fontSmall.css")
	} else if (theme == "s"){
		mainCss.setAttribute("href", "modules/flexui/css/scifi/fontSmall.css")
	} else if (theme == "st"){
		mainCss.setAttribute("href", "modules/flexui/css/stone/fontSmall.css")
	}
	mainCss.setAttribute("media", "all")
	head.insertBefore(mainCss, head.lastChild);
}


function addClassByQuerySelector(className, selector) {
	let navigation = document.querySelector(selector);
	navigation.classList.add(className)
}

function fantasyUIAddMainCss(theme) {
	const head = document.getElementsByTagName("head")[0];
	const mainCss = document.createElement("link");
	mainCss.setAttribute("rel", "stylesheet")
	mainCss.setAttribute("type", "text/css")
	if (theme == "f") {
		console.log("Adding fantasy");
		mainCss.setAttribute("href", "modules/flexui/css/fantasy/fantasyui.css")
	} else if (theme == "s"){
		console.log("Adding scifi");
		mainCss.setAttribute("href", "modules/flexui/css/scifi/scifiui.css")
	} else if (theme == "st"){
		console.log("Adding horror");
		mainCss.setAttribute("href", "modules/flexui/css/stone/stoneui.css")
	}
	mainCss.setAttribute("media", "all")
	head.insertBefore(mainCss, head.lastChild);
}

Hooks.on('renderSidebarTab', async (object, html) => {
	if (object instanceof Settings) {
	  const details = html.find('#game-details')
	  const list = document.createElement('ul')
	  list.innerHTML = await renderTemplate('modules/flexui/templates/settings-info.hbs')
	  details.append(list.firstChild)
	}
})
