describe("movie", function() {


    describe("regular movies", function() {
        var movie;
    	beforeEach( function() {
			movie =  Movie.getRegularMovie();
        });
		it("have type", function() {
			expect(movie.type).toBeDefined();
		});

		it("should have the regular type", function() {
			expect(movie.type).toBe("regular");
		});

		it("costs $2 for one rental day", function() {
			expect(movie.cost(1)).toBe(2);
		});

		it("costs $2 for two rental days", function() {
			expect(movie.cost(2)).toBe(2);
		});

		it("costs $3.50 for three rental days", function() {
			expect(movie.cost(3)).toBe(3.50);
		});

		it("costs $5.00 for four rental days", function() {
			expect(movie.cost(4)).toBe(5.00);
		});

		it("costs $2 for one rental day", function() {
			expect(movie.cost(1)).toBe(2);
		});


	});


    describe("children's movies", function() {
        var movie;
    	beforeEach( function() {
			movie =  Movie.getChildrensMovie();
        });
		it("costs $1.50 for two rental days", function() {
			expect(movie.cost(2)).toBe(1.50);
		});
		it("costs $1.50 for three rental days", function() {
			expect(movie.cost(3)).toBe(1.50);
		});
        it("costs $3.00 for four rental days", function() {
            expect(movie.cost(4)).toBe(3);
        });
	});

    describe("new release", function() {
        var movie;
    	beforeEach( function() {
			movie =  Movie.getNewReleaseMovie();
        });
		it("costs $3.00 for one rental day", function() {
			expect(movie.cost(1)).toBe(3);
		});
		it("costs $9 for three rental days", function() {
			expect(movie.cost(3)).toBe(9);
		});
      	});

	it("can specify type", function() {
        var type = "made up!";
		var movie = new Movie("made up!");
		expect(movie.type).toBe(type);
	});
});

