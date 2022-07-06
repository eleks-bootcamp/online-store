export default class SideBar {

  constructor (chkbox = {}) {
    this.state = chkbox;
    this.render();}

getTeamplae () {
  return `
  <div class="os-sidebar-header">Price</div>
  <div>
    <!-- Double slider here -->SideBar
  </div>
  <div class="os-sidebar-header">Category</div>
  <div class="os-sidebar-chekbox">
    <input type="checkbox" class="os-sidebar-custom-chekbox" id="monitors"  onchange="chbmonChange()">
    <label for="monitors">Monitors</label>
  </div>
  `
}

update (data={}) {
  this.state = data;
  this.ComponentElement.innerHTML=this.getTeamplate();
};
render () {
  const wrapper = document.createElement ('div');
  wrapper.innerHTML = this.getTeamplate ();

  this.element = wrapper.firstElementChild;
}



}





// function chbmonChange() {
//   const chbox=document.getElementById('monitors');
//     if (chbox.checked) {
//       alert('Фільтр монітори');
//     }
//     else {
//       alert ('Виключити фільтр монітори');
//     }

//   }
//   function chblapChange() {
//     const chbox=document.getElementById('laptops');
//     if (chbox.checked) {
//       alert('Фільтр laptops');
//     }
//     else {
//       alert ('Виключити фільтр laptops');
//     }
// }
// function chbVcChange() {
//   const chbox=document.getElementById('videoc');
//   if (chbox.checked) {
//     alert('Фільтр videoc');
//   }
//   else {
//     alert ('Виключити фільтр videoc');
//   }
// }
// function chbVcChange() {
//   const chbox=document.getElementById('videoc');
//   if (chbox.checked) {
//     alert('Фільтр videoc');
//   }
//   else {
//     alert ('Виключити фільтр videoc');
//   }
// }
// function chbGkChange() {
//   const chbox=document.getElementById('gk');
//   if (chbox.checked) {
//     alert('Фільтр Gaming keyboards');
//   }
//   else {
//     alert ('Виключити фільтр Gaming keyboards');
//   }
// }
// function chbCmChange() {
//   const chbox=document.getElementById('cm');
//   if (chbox.checked) {
//     alert('Фільтр Computer mouse');
//   }
//   else {
//     alert ('Виключити фільтр Computer mouse');
//   }
// }
// function chbSsdChange() {
//   const chbox=document.getElementById('ssd');
//   if (chbox.checked) {
//     alert('Фільтр SSD');
//   }
//   else {
//     alert ('Виключити фільтр SSD');
//   }
// }
// function chbScChange() {
//   const chbox=document.getElementById('sc');
//   if (chbox.checked) {
//     alert('Фільтр Sound cards');
//   }
//   else {
//     alert ('Виключити фільтр Sound cards');
//   }
// }
// function chbRamChange() {
//   const chbox=document.getElementById('ram');
//   if (chbox.checked) {
//     alert('Фільтр RAM');
//   }
//   else {
//     alert ('Виключити фільтр RAM');
//   }
// }
