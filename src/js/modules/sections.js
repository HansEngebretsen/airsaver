/*
=======
  Mobile Specific styling and JS

=======
*/


export default class {

  constructor(options){
    this.options = options;
    this.init();
  }

  init() {
     // something
  }




}



// // Old stuff below



// var template, app;

// template = {
//   precompile: function precompile () {
//     var index,
//         templates,
//         templateCount;

//     if ( !window.templates ) window.templates = {};

//     templates = document.querySelectorAll( 'template' );

//     for ( index = 0, templateCount = templates.length; index < templateCount; index++ ) {
//       var template;

//       template = templates[index];

//       window.templates[template.id] = Handlebars.compile(template.innerHTML);
//     };
//   },

//   render: function render ( templateName, content, target, replace ) {
//     var renderedTemplate, target;

//     target = document.querySelector( target );
//     renderedTemplate = templates[templateName]( content );

//     if ( typeof replace !== 'undefined' && replace ) {
//       target.innerHTML = renderedTemplate;
//     } else {
//       target.innerHTML = target.innerHTML + renderedTemplate;
//     };
//     load.toggleBody();
//     load.toggleForm();
//   }
// };
// load = {
//   toggleBody: function toggleBody(){
//     var card = $('.card');
//     var ham = new Hammer(card[0]);
//     ham.on("tap", function(e){
//        e.preventDefault();
//       console.log('tapped');
//      $(e.currentTarget).toggleClass('active');
//       return;
//      });

//      card.on("click", function(e){
//       e.preventDefault();
//         console.log('clicked');
//       $(this).toggleClass('active');
//     });
//   },
//   toggleForm: function toggleForm() {
//     $('#addbtn').click(function(e){
//       e.preventDefault();
//       $('#form').toggleClass('active');
//     });
//   }
// };
// form = {
//   onSubmit: function onSubmit(){
//     console.log('constructing');
//   },
//   addSubroute: function addSubroute(){
//     $('#addroute').click(function(e){
//       e.preventDefault();
//       $('#subroute').clone().insertAfter('#subroute');
//     })
//   }
// }


// app = {
//   init: function () {
//     template.precompile();
//     form.onSubmit();
//     form.addSubroute();

//     $.ajax({
//       url: '//codepen.io/hans/pen/WxqOyX.js',
//       complete: function ( xhr ) {
//         var response = jQuery.parseJSON(xhr.responseText);
//         template.render('mainTemplate', response, '.container', true );
//       }
//     });
//   }
// };

// $( document ).ready( app.init );
