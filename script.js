var SLIDE_NUM = 6;
var current_slide = 0;
var slide_to_elements = {};
var SlideType;
(function (SlideType) {
    SlideType[SlideType["In_Left"] = 0] = "In_Left";
    SlideType[SlideType["In_Right"] = 1] = "In_Right";
    SlideType[SlideType["Out_Left"] = 2] = "Out_Left";
    SlideType[SlideType["Out_Right"] = 3] = "Out_Right";
})(SlideType || (SlideType = {}));
var hide = function (elements) {
    for (var i = 0; i < elements.length; i++) {
        var element = elements.item(i);
        element.style.display = "none";
    }
};
var show = function (elements) {
    for (var i = 0; i < elements.length; i++) {
        var element = elements.item(i);
        element.style.display = "block";
    }
};
for (var i = 0; i < SLIDE_NUM; i++) {
    slide_to_elements[i] = document.getElementsByClassName(i.toString());
    if (i !== current_slide) {
        hide(slide_to_elements[i]);
    }
}
var arrow_right = document.getElementById("arrowright");
var arrow_left = document.getElementById("arrowleft");
var arrow_visibility = function () {
    arrow_right.style.visibility = "visible";
    arrow_left.style.visibility = "visible";
    if (current_slide === SLIDE_NUM - 1) {
        arrow_right.style.visibility = "hidden";
    }
    else if (current_slide === 0) {
        arrow_left.style.visibility = "hidden";
    }
};
arrow_visibility();
var switch_slide = function (slide) {
    if (slide >= SLIDE_NUM || slide < 0) {
        return;
    }
    hide(slide_to_elements[current_slide]);
    show(slide_to_elements[slide]);
    current_slide = slide;
    arrow_visibility();
};
arrow_right.addEventListener("click", function () {
    switch_slide(current_slide + 1);
});
arrow_left.addEventListener("click", function () {
    switch_slide(current_slide - 1);
});
