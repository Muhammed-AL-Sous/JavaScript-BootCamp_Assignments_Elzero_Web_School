let one = document.querySelector(".one");
let two = document.querySelector(".two");

let attone = one.getAttribute("title");
console.log(attone);

let attTwo = two.getAttribute("title");
console.log(attTwo);

one.setAttribute("title", attTwo);
two.setAttribute("title", attone);

let oneText = two.textContent;
let twoText = one.textContent;

one.textContent = oneText;
two.textContent = `${twoText} ${one.ATTRIBUTE_NODE}`;

// ===================================== //

// NodeTypes - الثوابت المسماة

// للحصول على رقم واحد نختار
// 1 	 ELEMENT_NODE
// للحصول على رقم 2 نختار
// 2 	 ATTRIBUTE_NODE
// 3 	 TEXT_NODE
// 4 	 CDATA_SECTION_NODE
// 5 	 ENTITY_REFERENCE_NODE
// 6 	 ENTITY_NODE
// 7 	 PROCESSING_INSTRUCTION_NODE
// 8 	 COMMENT_NODE
// 9 	 DOCUMENT_NODE
// 1 	 DOCUMENT_TYPE_NODE
// 11 	 DOCUMENT_FRAGMENT_NODE
// 12 	 NOTATION_NODE

// ===================================== //

// Method 2 :

// let div1 = document.querySelector(".one")
// let div2 = document.querySelector(".two")

// div1.title = div1.className
// div2.title = div2.className

// let text1 = div1.textContent
// let text2 = div2.textContent

// div1.textContent = text2
// div2.textContent = `${text1} ${div1.ATTRIBUTE_NODE}`

// ===================================== //
