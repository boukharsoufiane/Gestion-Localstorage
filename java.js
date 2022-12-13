let i = 0;
var sonName = document.getElementById('nom');
let sonMarque = document.getElementById('select1');
let sonPrix = document.getElementById('prix');
let sonDate = document.getElementById('Date');
let sonType = document.getElementById('select2');
let PromoOui = document.getElementById('Oui');
let PromoNon = document.getElementById('Non');

var button = document.querySelector('button');
let arr = [];
if (localStorage.Gestion === undefined) {
  arr = [];
} else {
  arr = JSON.parse(localStorage.Gestion);
}

class gestion {
  constructor(newName, newMarque, newPrix, newDate, newType, newOui) {
    this.sonName = newName;
    this.sonMarque = newMarque;
    this.sonPrix = newPrix;
    this.sonDate = newDate;
    this.sonType = newType;
    this.sonPromo = newOui;
  }
  detail() {
    if (arr.length > 0) {
      return "L'informations de produit a été sauvegardé réussir au tableau";
    }
  }
}


button.onclick = () => {
  let newName = sonName.value;
  let newMarque = sonMarque.value;
  let newPrix = sonPrix.value;
  let newDate = sonDate.value;
  let newType = sonType.value;
  let newOui;
  if (PromoOui.checked==true) {
    newOui = "En promotion";
  }else{
    newOui = "-";
  }

  // const obj = {
  //   sonNom: newName,
  //   sonMarque: newMarque,
  //   sonPrix: newPrix,
  //   sonDate: newDate,
  //   sonType: newType,
  //   sonPromo: newOui,
  // };

  let lengthArr = arr.length;
  let stock = new gestion(newName, newMarque, newPrix, newDate, newType, newOui);
  arr.push(stock);
  arr.sort((a, b) => a.sonName.localeCompare(b.sonName));
  localStorage.setItem('Gestion', JSON.stringify(arr));
  console.log(arr);
  if (lengthArr + 1) {
    document.getElementById('text').style.display = 'none';
    document.getElementById('sec').style.display = 'none';
    document.getElementById('table').style.display = 'none';
    document.getElementById('warning3').style.display = 'block'
    document.getElementById('text1').style.display = 'none';
    document.getElementById('gestion').innerHTML = stock.detail();
  }
  document.getElementById('btnAjouter').style.display = 'block';
  document.getElementById('save').style.display = 'none';
}


function save() {
  document.getElementById('text').style.display = 'block';
  document.getElementById('sec').style.display = 'block';
  document.getElementById('table').style.display = 'block';
  document.getElementById('warning3').style.display = 'none';
  document.getElementById('text1').style.display = 'block';

}


function AddProduct() {
  i++;
  let name = document.getElementById('nom').value;
  let table = document.getElementById('table');
  let row = document.createElement('tr');
  let table2 = document.createElement('td');
  let table3 = document.createElement('td');
  let table4 = document.createElement('td');
  let table5 = document.createElement('td');
  let table6 = document.createElement('td');
  let table7 = document.createElement('td');
  let table8 = document.createElement('td');
  let table9 = document.createElement('button');
  let table10 = document.createElement('button');
  row.id = "col" + i;
  let text = document.createTextNode(name);
  let option = document.getElementById('select1').value;
  let option2 = document.getElementById('select2').value;
  let checkbox = document.getElementById('Oui').checked;

  let checkbox2 = document.getElementById('Non').checked;
  let option3 = document.getElementById('Oui').value;
  let option4 = document.getElementById('Non').value;
  let text2 = document.createTextNode(option);
  let price = document.getElementById('prix').value;
  let text3 = document.createTextNode(price);
  let date = document.getElementById('Date').value;
  let text4 = document.createTextNode(date);
  let text5 = document.createTextNode(option2);
  let text6 = document.createTextNode(option3);
  let text7 = document.createTextNode(option4);
  let contenue = '✎';
  let contenue1 = '☒';
  let text8 = document.createTextNode(contenue);
  let text9 = document.createTextNode(contenue1);
  if (name.length !== 0 && name.length <= 30 && option.length !== 0 && price.length !== 0 && date.length !== 0 && option2.length !== 0 && (checkbox == true || checkbox2 == true)) {
    window.location.replace("#table");
    table2.appendChild(text);
    table3.appendChild(text2);
    table4.appendChild(text3);
    table5.appendChild(text4);
    table6.appendChild(text5);
    row.appendChild(table2);
    row.appendChild(table3);
    row.appendChild(table4);
    row.appendChild(table5);
    row.appendChild(table6);
    if (checkbox == true) {
      table7.appendChild(text6);
      row.appendChild(table7);
    }
    if (checkbox2 == true) {
      table7.appendChild(text7);
      row.appendChild(table7);
    }
    table10.style.backgroundColor = 'red';
    table10.style.fontSize = '1.4em';
    table10.style.padding = '10px';
    table9.style.backgroundColor = 'green';
    table9.style.fontSize = '1.4em';
    table9.style.padding = '10px';
    table10.setAttribute('onclick', 'DeleteRow(' + i + ')');
    table9.setAttribute('onclick', 'ModifierRow()')
    table9.appendChild(text8);
    table8.appendChild(table9);
    table10.appendChild(text9);
    table8.appendChild(table10);
    row.appendChild(table8);
    table.appendChild(row);
    document.getElementById('nom').value = "";
    document.getElementById('select1').value = "";
    document.getElementById('prix').value = "";
    document.getElementById('Date').value = "";
    document.getElementById('select2').value = "";
    document.getElementById('Oui').checked = "";
    document.getElementById('Non').checked = "";
    window.location.replace("#table");
    document.getElementById('save').style.display = 'block';
    document.getElementById('btnAjouter').style.display = 'none';
    document.location.reload();
  }
  else if (name.length > 30) {
    document.getElementById('warning2').style.display = 'block';
    document.getElementById('lettre').style.display = 'none';
    document.getElementById('lettres').style.display = 'block';
    document.getElementById('text').style.display = 'none';
    document.getElementById('sec').style.display = 'none';
    document.getElementById('table').style.display = 'none';
    document.getElementById('text1').style.display = 'none';
    document.getElementById('accept').onclick = function () {
      document.getElementById('warning2').style.display = 'none';
      document.getElementById('text').style.display = 'block';
      document.getElementById('sec').style.display = 'block';
      document.getElementById('table').style.display = 'block';
      document.getElementById('text1').style.display = 'block';
    }
  }
  else {
    document.getElementById('text').style.display = 'none';
    document.getElementById('sec').style.display = 'none';
    document.getElementById('table').style.display = 'none';
    document.getElementById('warning2').style.display = 'block';
    document.getElementById('text1').style.display = 'none';
    document.getElementById('accept').onclick = function () {
      document.getElementById('warning2').style.display = 'none';
      document.getElementById('text').style.display = 'block';
      document.getElementById('sec').style.display = 'block';
      document.getElementById('table').style.display = 'block';
      document.getElementById('text1').style.display = 'block';
    }
  }

}

function DeleteRow(i) {
  document.getElementById('text1').style.display = 'none';
  document.getElementById('sec').style.display = 'none';
  document.getElementById('table').style.display = 'none';
  document.getElementById('warning').style.display = 'block';
  document.getElementById('deleteRow').onclick = function () {
    document.getElementById("col" + i).remove();
    document.getElementById('warning').style.display = 'none';
    document.getElementById('text1').style.display = 'block';
    document.getElementById('sec').style.display = 'block';
    document.getElementById('table').style.display = 'block';
    window.location.replace("#table");
  }
  document.getElementById('cancelDelete').onclick = function () {
    document.getElementById('warning').style.display = 'none';
    document.getElementById('text1').style.display = 'block';
    document.getElementById('sec').style.display = 'block';
    document.getElementById('table').style.display = 'block';
    window.location.replace("#table");
  }
}

let table = document.getElementById('table'), rIndex;
function ModifierRow() {
  document.getElementById('btnAjouter').style.display = "none";
  document.getElementById('btnEdit').style.display = "block";
  for (let i = 0; i <= table.rows.length; i++) {
    table.rows[i].onclick = function () {
      rIndex = this.rowIndex;
      document.getElementById('nom').value = this.cells[0].innerHTML;
      document.getElementById('select1').value = this.cells[1].innerHTML;
      document.getElementById('prix').value = this.cells[2].innerHTML;
      document.getElementById('Date').value = this.cells[3].innerHTML;
      document.getElementById('select2').value = this.cells[4].innerHTML;
      document.getElementById('Oui').checked = this.cells[5].innerHTML;
      document.getElementById('Non').checked = this.cells[5].innerHTML;
    };
  }
}


function EditRow() {
  document.getElementById('btnAjouter').style.display = "block";
  document.getElementById('btnEdit').style.display = "none";
  let checkbox = document.getElementById('Oui').checked;
  let checkbox2 = document.getElementById('Non').checked;
  table.rows[rIndex].cells[0].innerHTML = document.getElementById('nom').value;
  table.rows[rIndex].cells[1].innerHTML = document.getElementById('select1').value;
  table.rows[rIndex].cells[2].innerHTML = document.getElementById('prix').value;
  table.rows[rIndex].cells[3].innerHTML = document.getElementById('Date').value;
  table.rows[rIndex].cells[4].innerHTML = document.getElementById('select2').value;
  if (checkbox == true) {
    table.rows[rIndex].cells[5].innerHTML = document.getElementById('Oui').value;
  }
  else if (checkbox2 == true) {
    table.rows[rIndex].cells[5].innerHTML = document.getElementById('Non').value;
  }
}

function rest() {
  document.getElementById('nom').value = "";
  document.getElementById('select1').value = "";
  document.getElementById('prix').value = "";
  document.getElementById('Date').value = "";
  document.getElementById('select2').value = "";
  document.getElementById('Oui').checked = "";
  document.getElementById('Non').checked = "";
}



let obj = JSON.parse(localStorage.getItem("Gestion"));
if (obj.length != null) {
  document.getElementById('tbl').innerHTML += "<tr><th>Nom</th><th>Marque</th><th>prix</th><th>date</th><th>type</th><th>promotion</th><th>action</th></tr>";



  for (let i = 0; i < obj.length; i++) {

    const row = document.createElement("tr");
    document.getElementById("tbl").appendChild(row)
    const colom1 = document.createElement("td");
    const colom2 = document.createElement("td");
    const colom3 = document.createElement("td");
    const colom4 = document.createElement("td");
    const colom5 = document.createElement("td");
    const colom6 = document.createElement("td");
    const colom7 = document.createElement("td");
    const colom8 = document.createElement("button");
    const colom9 = document.createElement("button");
    colom8.setAttribute('onclick', "modifier()");
    colom9.setAttribute('onclick', "supp()");
    colom8.id = 'cel';
    const textBtn = '✎';
    const txtbtn1 = '☒';
    const txt = document.createTextNode(textBtn);
    const txt1 = document.createTextNode(txtbtn1);
    row.appendChild(colom1);
    row.appendChild(colom2);
    row.appendChild(colom3);
    row.appendChild(colom4);
    row.appendChild(colom5);
    row.appendChild(colom6);
    colom8.appendChild(txt);
    colom9.appendChild(txt1);
    colom7.appendChild(colom8);
    colom7.appendChild(colom9)
    row.appendChild(colom7);
    colom1.innerHTML += obj[i].sonName;
    colom2.innerHTML += obj[i].sonMarque;
    colom3.innerHTML += obj[i].sonPrix;
    colom4.innerHTML += obj[i].sonDate;
    colom5.innerHTML += obj[i].sonType;
    colom6.innerHTML += obj[i].sonPromo;

  };
};

function modifier() {
  let tab1 = document.getElementById('tbl');
  for (let i = 0; i <= tab1.rows.length; i++) {
    tab1.rows[i].onclick = function () {
      rIndex = this.rowIndex;
      document.getElementById('nom').value = this.cells[0].innerHTML;
      document.getElementById('select1').value = this.cells[1].innerHTML;
      document.getElementById('prix').value = this.cells[2].innerHTML;
      document.getElementById('Date').value = this.cells[3].innerHTML;
      document.getElementById('select2').value = this.cells[4].innerHTML;
      document.getElementById('Oui').checked = this.cells[5].innerHTML;
      document.getElementById('Non').checked = this.cells[5].innerHTML;
    };
  }
};


function cat(i) {
  document.getElementById('nom').value = obj[i].sonName;
  document.getElementById('select1').value = obj[i].sonMarque;
  document.getElementById('prix').value = obj[i].sonPrix;
  document.getElementById('Date').value = obj[i].sonDate;
  document.getElementById('select2').value = obj[i].sonType;
  obj.splice(i, 1);
  localStorage.setItem("Gestion", JSON.stringify(obj));
}
function supp(i) {
  obj.splice(i, 1);
  localStorage.setItem("products", JSON.stringify(obj));
  document.location.reload();
}

