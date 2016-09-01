// import deviceToggle from './modules/deviceToggle';
// import wayView from './modules/wayView';
// import mobile from './modules/mobile';
// import displayPage from './modules/sections';
// import addTrip from './modules/addTrip';
// import addTrip from './modules/addTrip';
import generatePage from './modules/generatePage';
import sections from './modules/sections';


// hbs generate page

// Page event listeners
  // Body event listeners (click on page item, toggle form)

// Form
  // Form Submit
  // Regenerate page/sections?



$(document).ready(() => {
  let Global  = Global || {};
  // use  _this.function  if you want to reuse it across modules
  Global.mobile =  window.matchMedia( `( max-width: 720px)`).matches;

  let GeneratePage = new generatePage({
    container        : '.container',
    templateID       :  'mainTemplate',
    dataURL          : '//codepen.io/hans/pen/WxqOyX.js',
    card             : '.card',
    formOuter        : '#form',
    formToggleBtn        : '#addbtn',
    subRoute         : '#subroute',
    subRouteToggle   : '#addroute'
  });
  let Sections = new sections();

})
