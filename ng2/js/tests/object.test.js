describe("myFunction", function () {
    var myfunc = NS.myFunction;

    beforeEach(function () {
        spyOn(myfunc, 'myInit');
    });

    afterEach(function () {       
        myfunc.stuff = [];
        myfunc.stuff.push('Testing');
    }, false);
    
    it("should be able to initialize", function () {        
        expect(myfunc.myInit).toBeDefined();
        myfunc.myInit();
        expect(myfunc.myInit).toHaveBeenCalled();
    });
        
    it("should populate stuff during initialization", function () {

        expect(myfunc.stuff.length).toEqual(1);
        expect(myfunc.stuff[0]).toEqual('Testing');
    });

    describe("appending string", function () {
        it("should be able to append 2 string", function () {
            expect(myfunc.append).toBeDefined();
        });
        it("should append 2 string", function () {
            expect(myfunc.append('hello ', 'world')).toEqual('hello world');
        });
    });
});


