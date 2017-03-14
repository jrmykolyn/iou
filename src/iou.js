module.exports = ( function() {
    // --------------------------------------------------
    // CONSTRUCTOR
    // --------------------------------------------------
    function IOU( callback ) {
        if ( !callback ) {
            throw new Error( '`IOU()` must be invoked with a `callback` argument' );
        }

        this.callback = callback;
        this.state = 'idle';
        this.fate = 'pending';

        return this;
    } // /IOU()


    // --------------------------------------------------
    // INSTANCE METHODS
    // --------------------------------------------------
    IOU.prototype.then = function( resolveHandler, rejectHandler ) {
        this.callback( resolveHandler, rejectHandler );
    }

    IOU.prototype.getState = function() {
        return this.state;
    }

    IOU.prototype.getFate = function() {
        return this.fate;
    }


    // --------------------------------------------------
    // PUBLIC API
    // --------------------------------------------------
    return IOU;
} )();