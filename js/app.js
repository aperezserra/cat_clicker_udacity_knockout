var Cat = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
    this.catList = ko.observableArray(data.catList);

    // this.testArray = ko.observableArray(["Cuco","Tato","Garabato"]);

    this.catLevel = ko.computed(function() {
        if (this.clickCount() <= 10) {
            return "Infant";
        }
        else if (this.clickCount() > 10 && this.clickCount() <= 50) {
            return "Teen";
        }
        else {
            return "Adult"
        }
    }, this);

};

var ViewModel = function() {

    this.currentCat = ko.observable( new Cat({
        clickCount: 0,
        name: 'Tabby',
        imgSrc: 'img/434164568_fea0ad4013_z.jpg',
        imgAttribution: 'https://github.com/udacity/ud989-cat-clicker-ko-starter/tree/master/img',
        catList: ["Cuco", "Kico", "Garabato", "Locadio"],
    }) );

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };
};


ko.applyBindings(new ViewModel());
