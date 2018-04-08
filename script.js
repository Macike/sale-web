"use strict";

/**
 * Funcion does its funcionality which is populating everything.
 *
 * @param {Object} e event object
 */
let addElement = (e)=>
{
    let arr = [
                ["images/boty1.jpg",
                "images/boty2.jpg",
                "images/boty3.jpg",
                "images/boty4.jpg",
                "images/boty5.jpg",
                "images/boty6.jpg",
                "images/boty7.jpg",
                "images/boty8.jpg"],

                ["images/topanky1.jpg",
                "images/topanky2.jpg",
                "images/topanky3.jpg",
                "images/topanky4.jpg",
                "images/topanky5.jpg",
                "images/topanky6.jpg",
                "images/topanky7.jpg",
                "images/topanky8.jpg"],

                ["images/boticky1.jpg",
                "images/boticky2.jpg",
                "images/boticky3.jpg",
                "images/boticky4.jpg",
                "images/boticky5.jpg",
                "images/boticky6.jpg",
                "images/boticky7.jpg",
                "images/boticky8.jpg"]
              ];

    let labels =[

                  [["Originals", "99,99€"],
                  ["Tubular Shadows", " 69,96€"],
                  ["Gazelle Super", " 76,96€"],
                  ["Campus", "99,99€"],
                  ["Superstar", "79,95€"],
                  ["Pureboost X TR ", "139,95€"],
                  ["CrazyTrain Pro", "69,99€"],
                  ["Ultra Boost ", "125,96€"]],

                  [["Originals", "99,99€"],
                  ["Tubular Shadows", " 69,96€"],
                  ["Gazelle Super", " 76,96€"],
                  ["Campus", "99,99€"],
                  ["Superstar", "79,95€"],
                  ["Pureboost X TR ", "139,95€"],
                  ["Train Pro", "69,99€"],
                  ["Ultra Speed ", "125,96€"]],

                  [["Originals", "99,99€"],
                  ["Tubular Shadows", " 69,96€"],
                  ["Gazelle Super", " 76,96€"],
                  ["Originals", "99,99€"],
                  ["Superstar", "79,95€"],
                  ["Pureboost X TR ", "139,95€"],
                  ["CrazyTrain Pro", "69,99€"],
                  ["Ultra Boost ", "125,96€"]]
                ];

  let names=[
              "Dámske",
              "Pánske",
              "Detské"
            ];

   let len = names.length;

   let main = document.getElementsByTagName("main")[0];
   for(let i = 0; i < len ; i++)
   {

     let div = document.createElement("div");
     div.className ="row text-center titles";

     let child_div = document.createElement("div");
     child_div.className = "col-12";

     let h1 = document.createElement("h1");
     h1.className = "title";
     h1.innerText = names[i];

     child_div.appendChild(h1);
     div.appendChild(child_div);
     main.appendChild(div);

     let row_len = arr[i].length;
     let rows = Math.ceil(row_len / 4);
     let start = 0;
     let end = 0;
     for (let j = 0; j < rows; j++)
     {
       let row = document.createElement("div");
       row.className = "row text-center imigi";
       end += 4;

       for (let k = start; k < end && k < row_len; k++)
       {
           let col = document.createElement("div");
           col.className ="column col-md-3";
           let a = document.createElement("a");
           a.className="sortiment";
           let img = document.createElement("img");
           img.className="special";
           img.src = arr[i][k];
           img.alt = "Sale product" + k;
           a.appendChild(img);
           let name = document.createElement("p");
           name.innerText=labels[i][k][0];
           let price = document.createElement("p");
           price.innerText=labels[i][k][1];

           col.appendChild(a);
           col.appendChild(name);
           col.appendChild(price);
           row.appendChild(col);
       }

       main.appendChild(row);
       start += 4;
     }

   }

  /*let len = arr.length;
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
  }*/



}

window.addEventListener("load", addElement, "false");
