/*
=======
  Construct and generate page using handlebars, from template element

=======
*/


export default class {

  constructor(options){
    this.options = options;
    this.init();
  }

  init() {
   this.preCompile();
   this.ajaxCompile();

  }

  preCompile = () => {
    let o = this.options;
    let index, templates, templateCount;
      if ( !window.templates ) window.templates = {};
      templates = document.querySelectorAll( 'template' );
      for (var template of templates){
        console.log(template);
        window.templates[template.id] = Handlebars.compile(template.innerHTML);
      }
  }

  render = (templateName, content, target, replace) => {
        let tar = document.querySelector( target );
        let renderedTemplate = templates[templateName]( content );
        if ( typeof replace !== 'undefined' && replace ) {
          tar.innerHTML = renderedTemplate;
        } else {
          tar.innerHTML = tar.innerHTML + renderedTemplate;
        };
  }

  ajaxCompile(){
    let th = this,
        o  = this.options;
    $.ajax({
      url: o.dataURL,
      complete: function ( xhr ) {
        var response = jQuery.parseJSON(xhr.responseText);
        window.boo = response;
        th.render(o.templateID, response, o.container, true );
        th.listeners();
      }
    });
  }

  listeners() {
    let t = this.elements,
        o = this.options,
        card = $(o.card),
        subRouteToggle = $(o.subRouteToggle),
        formToggleBtn = $(o.formToggleBtn),
        subRoute = $(o.subRoute),
        formOuter = $(o.formOuter),
        ham = new Hammer(card[0]),
        toggleCard, toggleForm, addSubroute;

    // Functions
    toggleCard = function(e){
      e.preventDefault();
      $(e.currentTarget).toggleClass('active');
    }
    toggleForm = function(e){
      e.preventDefault();
      formOuter.toggleClass('active');
    }
    addSubroute = function(e) {
      e.preventDefault();
      subRoute.clone().insertAfter(o.subRoute);
    }
     // Listeners
    card.click(toggleCard); // show/hide the card
    ham.on("tap", toggleCard); // hammer tap card
    formToggleBtn.click(toggleForm); // show the form
    subRouteToggle.click(addSubroute); // subroute card

  }


}