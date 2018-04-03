"use strict";

/**
 * Funcion does its funcionality which is populating everything.
 *
 * @param {Object} e event object
 */
let addElement = (e)=>
{
    /*let input = document.createElement("input");
    input.type = "text";
    let main = document.getElementsByTagName("main");
    main[0].appendChild(input);*/

    let arr = [
                "images/boty1.jpg",
                "images/boty2.jpg",
                "images/boty3.jpg",
                "images/boty4.jpg",
                "images/boty5.jpg",
                "images/boty6.jpg",
                "images/boty7.jpg",
                "images/boty8.jpg"];

    let labels =[
                  ["Originals", "99,99€"],
                  ["Tubular Shadows", " 69,96€"],
                  ["Gazelle Super", " 76,96€"],
                  [" Campus", "99,99€"],
                  ["Superstar", "79,95€"],
                  ["Pureboost X TR ", "139,95€"],
                  ["CrazyTrain Pro", "69,99€"],
                  ["Ultra Boost ", "125,96€"]
                ]


  /*OTRAVA*/
  let x=5;
  let y=4;
  let z=x;
  x=y;
  y=z;


  let len = arr.length;
  let rows = parseInt(len /4, 10);
  let index = 0;
  let init = 0;
  let divs = [];
  let main = document.getElementsByTagName("main")[0];
  for (let i = 0; i < rows; i++)
  {
    divs[i]= document.createElement("div");
    divs[i].className = "row text-center imigi";
    index += 4;
    let cols = [];
    let images = [];
    for (let j = init; j < index; j++)
    {
      let ind = j % 4;
      images[ind] = document.createElement("img");
      images[ind].className = "special";
      images[ind].src = arr[j];

      let text1 = document.createElement("p");
      let text2 = document.createElement("p");
      text1.innerText = labels[j][0];
      text2.innerText = labels[j][1];

      cols[ind]= document.createElement("div");
      cols[ind].className = "column col-md-3";

      let referenc = document.createElement("a");
      referenc.className = "sortiment";

      referenc.appendChild(images[ind]);
      cols[ind].appendChild(referenc);
      cols[ind].appendChild(text1);
      cols[ind].appendChild(text2);
      divs[i].appendChild(cols[ind]);
    }

    init += 4;
    main.appendChild(divs[i]);
  }



}

window.addEventListener("load", addElement, "false");
