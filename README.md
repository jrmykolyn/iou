# IOU

## About
`IOU` is an implementation of the `Promise` methodology, which itself is used within JavaScript for handling asynchronous operations. `IOU` is an experimental/test project, and should *not* be used in production.

## Requirements
- Implementation must include a constructor method (eg. `IOU`).
- Constructor must accept the following argument(s):
    - a callback which includes the asynchronous operation.
- Instance returned by constructor must include method to trigger/initiate async operation.
- Instance must keep track of: own state (eg. 'pending', 'resolved', etc.); own fate (eg. 'succeeded', 'failed', etc.).