describe('layout-render', function() {
  before(function() {
    this.layoutView = new Thorax.LayoutView({
      template: Handlebars.compile('<p class="layout-view">My Layout View {{layout-element}}</p>')
    });

    this.childView = new Thorax.View({
      template: Handlebars.compile('<p class="child-view">My Child View</p>')
    });

    this.layoutView.appendTo($('.layout'));

    this.layoutView.setView(this.childView);
  });

  afterEach(function () {
    $('.layout').empty();
  });

  it('Keeps the set view in the DOM after render', function () {

    expect(this.layoutView.$(".layout-view").length).to.not.equal(0);
    expect(this.childView.$(".child-view").length).to.not.equal(0);
    expect($(".layout-view").length).to.not.equal(0);
    expect($(".child-view").length).to.not.equal(0);

    this.layoutView.render();

    expect(this.layoutView.$(".layout-view").length).to.not.equal(0);
    expect(this.childView.$(".child-view").length).to.not.equal(0);
    expect($(".layout-view").length).to.not.equal(0);

    // This fails because the childView is no longer attached to the DOM
    expect($(".child-view").length).to.not.equal(0);

  });
});