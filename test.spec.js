'use strict';
describe('DS#memory-leak', function() {

   var holder;

    beforeEach(function() {
        holder = {};
        holder.store = new window.JSData.DS({
            log: false,
            watchChanges: false,
            logFn: function() {},
            errorFn: function() {}
        });
    });

    afterEach(function() {
        delete holder.store;
        holder = undefined;
    });

    function test() {
        for (var j = 0; j < 10; j++) {
            holder.store.defineResource({
                name: 'resource' + j
            });
        }
    }
    for (var i = 0; i < 10000; i++) {
        it('Test number ' + i, test);
    }
});
