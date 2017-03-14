// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
var IOU = require( '../src/iou' );


// --------------------------------------------------
// DEFINE TESTS
// --------------------------------------------------
describe( '`IOU` tests:', function() {
    it( 'Should throw and error when instantiated without a `callback` argument.', function() {
        var iou;

        try {
            iou = new IOU();
        } catch( err ) {
            iou = err;
        }

        expect( iou instanceof Error ).toBe( true );
    } );


    it( 'Should return an `IOU` instance.', function( ) {
        var iou = new IOU( function() { return true; } );

        expect( iou instanceof IOU ).toBe( true );
    } );


    it( 'Should correctly invoke the `resolveHandler` callback.', function( done ) {
        // Instantiate new `IOU`; define async operation.
        var iou = new IOU( function( resolve, reject ) {
            setTimeout( function() {
                resolve( true );
            }, 1000 );
        } );

        // Init. async operation.
        iou.then(
            // `resolveHandler`
            function( data ) {
                expect( data ).toBe( true );
                done();
            },
            // `rejectHandler`
            function( err ) {
                // ...
            }
        );
    } );


    it( 'Should correctly invoke the `rejectHandler` callback.', function( done ) {
        // Instantiate new `IOU`; define async operation.
        var iou = new IOU( function( resolve, reject ) {
            setTimeout( function() {
                reject( new Error( 'Whoops! Something went wrong' ) );
            }, 1000 );
        } );

        // Init. async operation.
        iou.then(
            // `resolveHandler`
            function( data ) {
                // ...
            },
            // `rejectHandler`
            function( err ) {
                expect( err instanceof Error ).toBe( true );
                done();
            }
        );
    } );
} );