let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

// https?  ==> maybe end with s or maybe not
//   :\/\/  ==>  escaping the slash symbol
//  (?:[-\w]+\.)?  ==> maybe return word characters capital or small or numbers 0 to 9 and _-  or maybe not
// ([-\w]+)  ==> return word characters capital or small or numbers 0 to 9 and _-
//  \.  ==> return any characters Except Newline Or Other Line Terminators
// \/?  ==> escaping slash - maybe return slash character or not
//  . ==> dot  - return any characters iIcluding spacing
