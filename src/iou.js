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
    IOU.prototype.then = function( onSuccess, onError ) {
        this.callback( onSuccess, onError );
    }


    // --------------------------------------------------
    // PUBLIC API
    // --------------------------------------------------
    return IOU;
} )();