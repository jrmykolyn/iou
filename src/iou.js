module.exports = ( function() {
    // --------------------------------------------------
    // CONSTRUCTOR
    // --------------------------------------------------
    function IOU( callback ) {
        if ( !callback ) {
            throw new Error( '`IOU()` must be invoked with a `callback` argument' );
        }

        this.callback = callback;

        return this;
    } // /IOU()


    // --------------------------------------------------
    // INSTANCE METHODS
    // --------------------------------------------------
    IOU.prototype.then = function( resolveHandler, rejectHandler ) {
        this.callback( resolveHandler, rejectHandler );
    }


    // --------------------------------------------------
    // PUBLIC API
    // --------------------------------------------------
    return IOU;
} )();