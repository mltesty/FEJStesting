describe('getDiv', function() {
    var d = document.querySelector('.box'); // added test comment

    it('Should exist', function() {
        expect(d.nodeName).toBe('DIV');
    });
});
