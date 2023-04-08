function AddNewWEField() {
  // alert("hello")


  let newnode = document.createElement('textarea');
  newnode.classList.add('formcontrol');
  newnode.classList.add('mt-2');

  newnode.setAttribute("placeholder", 'Enter Here');
  newnode.setAttribute("rows", 4);
  newnode.setAttribute("cols", 60);

  let weOb = document.getElementById('we');
  let addbuttoncvOb = document.getElementById('addbuttoncv');

  weOb.insertBefore(newnode, addbuttoncv);
}
function AddNewAqField() {

  let newnode = document.createElement('textarea');
  newnode.classList.add('formcontrol');
  newnode.classList.add('mt-2');

  newnode.setAttribute("placeholder", 'Enter Here');
  newnode.setAttribute("rows", 4);
  newnode.setAttribute("cols", 60);

  let theyOb = document.getElementById('they');
  let addbutton2Ob = document.getElementById('addbutton2');

  theyOb.insertBefore(newnode, addbutton2);

}
// generating cv
function GenerateCV() {
  let namefield = document.getElementById('namefield').value
  let namt1 = document.getElementById('namt1')

  namt1.innerHTML = namefield

  // direct

  document.getElementById('namt2').innerHTML = namefield


  // contact

  let contactfield = document.getElementById('contactfield').value
  let contactt1 = document.getElementById('contactt1')
  contactt1.innerHTML = contactfield
  // email

  document.getElementById('manimail').innerHTML = document.getElementById('EMailfield').value
  // let ADRESSfield = document.getElementById('ADRESSfield').value
  //   let adresst1 = document.getElementById('adresst1')
  //   ADRESSfield.innerHTML=adresst1

  // adress

  document.getElementById('adresst1').innerHTML = document.getElementById('ADRESSfield').value

  // important links

  // eamil

  document.getElementById('fbt').innerHTML = document.getElementById('facebookkk').value
  document.getElementById('inatat').innerHTML = document.getElementById('Instagrammm').value
  document.getElementById('linkdt').innerHTML = document.getElementById('LinkedInnn').value


  // objective


  document.getElementById('objectivet').innerHTML = document.getElementById('objectivefield').value
  document.getElementById('wet').innerHTML = document.getElementById('WorkExperiencefield').value
  document.getElementById('aqt').innerHTML = document.getElementById('AcadamicQualificationfield').value

  // we field

  // let wes = document.getElementsByClassName('wefield');

  // let stre = "";

  // for (let e of wes) {
  //   str = str + '<li> ${e.value}  </li>';
  //   document.getElementById('wet').innerHTML = str;
  // }



  // code for setting image
      let file = document.getElementById('imageaa').files[0]

        // console.log(file);

        let reader = new FileReader()
          reader.readAsDataURL(file);

          // console.log(reader.result);

          // set image to template
         
       reader.onloadend = function() {
        document.getElementById('imageee').src= reader.result; 
       }


  document.getElementById('cv-form').style.display = 'none';
  document.getElementById('cv-template').style.display = 'block'



}
// print cv

function printcv() {

  window.print();
}




