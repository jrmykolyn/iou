// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
var IOU = require( '../src/iou' );


// --------------------------------------------------
// DEFINE TESTS
// --------------------------------------------------
describe( '`IOU` tests:', function() {
    it ( 'Should throw and error when instantiated without a `callback` argument.', function() {
        var iou;

        try {
            iou = new IOU();
        } catch( err ) {
            iou = err;
        }

        expect( iou instanceof Error ).toBe( true );
    } );


    it ( 'Should return an `IOU` instance', function( ) {
        var iou = new IOU( function() { return true; } );

        expect( iou instanceof IOU ).toBe( true );
    } );
} );