
function addOption(options, val, text, selected){
	var i = options.length++;
	options[i].value = val; options[i].text = text;
	if(selected) options[i].selected = true;
	return options.length;
}



function ClearElement(e){ while(e.childNodes.length>0) e.removeChild(e.childNodes[0]); }
function ce(tag, text, attrib){
	var e = document.createElement(tag);
	if(typeof text != 'undefined' &&  text !== null){
		if(typeof text == 'object' && typeof text.tagName != 'undefined') ac(text, e);
		else addText(e, text);
	}
	if(typeof attrib == 'object') for(var a in attrib) e[a] = attrib[a];
	return e;
}

function ge(tag){ return document.getElementById(tag); }
function ac(e, parent){ if(typeof parent == 'undefined') document.body.appendChild(e); else parent.appendChild(e); }
function addText(e, text) { e.appendChild(document.createTextNode(text)); }
function replaceText(e, text) { ClearElement(e); e.appendChild(document.createTextNode(text)); }
function createTable(attrib){
	var table = {};
	table.table = ce('TABLE', null, attrib);
	table.tbody = ce('TBODY')
	ac(table.tbody, table.table);
	return table;
}

