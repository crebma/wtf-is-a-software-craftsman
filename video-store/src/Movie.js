(function(outer) {
	outer.Movie = function(type, initialPeriod, initialCost, incrementalCost) {
		this.type = type;
            this.initialPeriod =  initialPeriod;
            this.initialCost = initialCost;
            this.incrementalCost = incrementalCost;
        this.cost = function(days) {
            var cost = this.initialCost;
            if (days > this.initialPeriod) {
                cost += (days - this.initialPeriod) * this.incrementalCost;
            }
            return cost;
        };
  }

    outer.Movie.getRegularMovie = function() {
        return new outer.Movie("regular",2,2,1.50);
    }

    outer.Movie.getChildrensMovie = function() {
        return new outer.Movie("childrens",3,1.5,1.5);
    }

    outer.Movie.getNewReleaseMovie = function() {
        return new outer.Movie("new release",1,3,3);
    }


})(this);

