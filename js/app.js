var ViewModel = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('https://github.com/udacity/ud989-cat-clicker-ko-starter/tree/master/img');
    this.catList = ko.observableArray(
        [
            { name: 'Cuco' },
            { name: 'Tato' },
            { name: 'Garabato' },
            { name: 'Coquito' }
        ]
    );

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


    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };
}

ko.applyBindings(new ViewModel());
