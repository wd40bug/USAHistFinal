type ElementCol = HTMLCollectionOf<HTMLElement>
const SLIDE_NUM = 6;
let current_slide: number = 0;
let slide_to_elements: { [id: number]: ElementCol } = {};

enum SlideType{
  In_Left,
  In_Right,
  Out_Left,
  Out_Right,

}

let hide = function (elements:ElementCol) {
  for ( let i = 0; i < elements.length; i++){
    let element = elements.item(i);
    element.style.display = "none";
  }
}
let show = function (elements:ElementCol) {
  for ( let i = 0; i < elements.length; i++){
    let element = elements.item(i);
    element.style.display = "block";
  }
}

for (let i = 0; i < SLIDE_NUM; i++) {
  slide_to_elements[i] = document.getElementsByClassName(i.toString()) as ElementCol;
  if (i !== current_slide){
    hide(slide_to_elements[i])
  }
}

let arrow_right = document.getElementById("arrowright") as HTMLElement
let arrow_left = document.getElementById("arrowleft") as HTMLElement

let arrow_visibility = function(){
  arrow_right.style.visibility = "visible"
  arrow_left.style.visibility = "visible"
  if (current_slide === SLIDE_NUM - 1){
    arrow_right.style.visibility = "hidden"    
  }else if (current_slide === 0){
    arrow_left.style.visibility = "hidden"
  }

}

arrow_visibility()

let switch_slide = function (slide: number) {
  if (slide >= SLIDE_NUM || slide < 0){
    return
  }
  hide(slide_to_elements[current_slide]);
  show(slide_to_elements[slide]);
  current_slide = slide;
  arrow_visibility()
}


arrow_right.addEventListener("click", () => {
  switch_slide(current_slide + 1);
})

arrow_left.addEventListener("click", () => {
  switch_slide(current_slide - 1);
})
