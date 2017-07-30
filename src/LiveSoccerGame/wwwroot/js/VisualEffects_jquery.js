/*PreierLegaueIcon effects*/
$('#PreierLegaueIcon').hover(makeBigger, returnToOriginalSize);

function makeBigger() {
    $(this).css({ "width": '+=4px' });
    $('.Container_Override').css({ "text-shadow": "1px 1px white", "margin-left": "+=30px" });
}

function returnToOriginalSize() {
    $(this).css({ width: "" });
    $('.Container_Override').css({ "text-shadow": "", "margin-left": "-=30px" });
}
/*PreierLegaueIcon effects*/

/*Top menu bar text effects*/
$('.TextEffects').hover(TextEffectsHover, TextEffectsUnHover);

function TextEffectsHover() {
    $(this).css({ "text-shadow": "1.1px 1.1px rgb(128, 170, 255)", "font-size": "+=1px" });
}

function TextEffectsUnHover() {
    $(this).css({ "text-shadow": "", "font-size": "" });
}
/*Top menu bar text effects*/
