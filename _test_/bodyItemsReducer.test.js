import bodyItemReducer from "../thingsToImplement/redux/bodyItemsReducer" 
//.toBe just checks that a value is what you expect. It uses === to check strict equality.
//.toEqual when you want to check that two objects have the same value, loosly equal
describe('Body Item Reducer', () => {
    let state;
    beforeEach (() => {
        state = {
            itemCount: 4,
            bodyItems: {
                1: {
                bodyItemId:1,
                sourceRoute: 'http://placewhereitemwasclonedfrom.com/api/poo',
                sourceMethod: 'GET',
                sourceResponse: '{"data":[{"type":"articles","id":"1","attributes":{"title":"JSON:API paints my bikeshed!","body":"The shortest article. Ever.","created":"2015-05-22T14:56:29.000Z","updated":"2015-05-22T14:56:28.000Z"},"relationships":{"author":{"data":{"id":"42","type":"people"}}}}],"included":[{"type":"people","id":"42","attributes":{"name":"John","age":80,"gender":"male"}}]}',
                sourceResponseType: 'JSON',
                customRoute: 'PORT://routeMyAppGetsThisFrom',
                customMethod: 'GET',
                customResponse: '{"data":[{"type":"articles","id":"1","attributes":{"title":"JSON:API paints my bikeshed!","body":"The shortest article. Ever.","created":"2015-05-22T14:56:29.000Z","updated":"2015-05-22T14:56:28.000Z"},"relationships":{"author":{"data":{"id":"42","type":"people"}}}}],"included":[{"type":"people","id":"42","attributes":{"name":"John","age":80,"gender":"male"}}]}',
                customResponseType: 'JSON',
                collection: 'CLONED_ITEMS',
                },
                2: {
                bodyItemId:2,
                sourceRoute: 'http://placewhereitemwasclonedfrom.com/api/foo',
                sourceMethod: 'GET',
                sourceResponse: '{"data":[{"type":"articles","id":"1","attributes":{"title":"JSON:API paints my bikeshed!","body":"The shortest article. Ever.","created":"2015-05-22T14:56:29.000Z","updated":"2015-05-22T14:56:28.000Z"},"relationships":{"author":{"data":{"id":"42","type":"people"}}}}],"included":[{"type":"people","id":"42","attributes":{"name":"John","age":80,"gender":"male"}}]}',
                sourceResponseType: 'JSON',
                customRoute: 'PORT://routeMyAppGetsThisFrom/api/foo',
                customMethod: 'GET',
                customResponse: '{"data":[{"type":"articles","id":"1","attributes":{"title":"JSON:API paints my bikeshed!","body":"The shortest article. Ever.","created":"2015-05-22T14:56:29.000Z","updated":"2015-05-22T14:56:28.000Z"},"relationships":{"author":{"data":{"id":"42","type":"people"}}}}],"included":[{"type":"people","id":"42","attributes":{"name":"John","age":80,"gender":"male"}}]}',
                customResponseType: 'JSON',
                collection: 'STAGED_ITEMS',
                },
                3: {
                bodyItemId:3,
                sourceRoute: 'http://placewhereitemwasclonedfrom.com/api/potato',
                sourceMethod: 'GET',
                sourceResponse: '{"data":[{"type":"articles","id":"1","attributes":{"title":"JSON:API paints my bikeshed!","body":"The shortest article. Ever.","created":"2015-05-22T14:56:29.000Z","updated":"2015-05-22T14:56:28.000Z"},"relationships":{"author":{"data":{"id":"42","type":"people"}}}}],"included":[{"type":"people","id":"42","attributes":{"name":"John","age":80,"gender":"male"}}]}',
                sourceResponseType: 'JSON',
                customRoute: 'PORT://routeMyAppGetsThisFrom/api/tomato',
                customMethod: 'GET',
                customResponse: '{"data":[{"type":"articles","id":"1","attributes":{"title":"JSON:API paints my bikeshed!","body":"The shortest article. Ever.","created":"2015-05-22T14:56:29.000Z","updated":"2015-05-22T14:56:28.000Z"},"relationships":{"author":{"data":{"id":"42","type":"people"}}}}],"included":[{"type":"people","id":"42","attributes":{"name":"John","age":80,"gender":"male"}}]}',
                customResponseType: 'JSON',
                collection: 'STAGED_ITEMS',
                },
                4: {
                bodyItemId:4,
                sourceRoute: 'http://placewhereitemwasclonedfrom.com/api/mamamia',
                sourceMethod: 'GET',
                sourceResponse: '{"data":[{"type":"articles","id":"1","attributes":{"title":"JSON:API paints my bikeshed!","body":"The shortest article. Ever.","created":"2015-05-22T14:56:29.000Z","updated":"2015-05-22T14:56:28.000Z"},"relationships":{"author":{"data":{"id":"42","type":"people"}}}}],"included":[{"type":"people","id":"42","attributes":{"name":"John","age":80,"gender":"male"}}]}',
                sourceResponseType: 'JSON',
                customRoute: 'PORT://routeMyAppGetsThisFrom/api/papapia',
                customMethod: 'PUT',
                customResponse: '{"data":[{"type":"articles","id":"1","attributes":{"title":"JSON:API paints my bikeshed!","body":"The shortest article. Ever.","created":"2015-05-22T14:56:29.000Z","updated":"2015-05-22T14:56:28.000Z"},"relationships":{"author":{"data":{"id":"42","type":"people"}}}}],"included":[{"type":"people","id":"42","attributes":{"name":"John","age":80,"gender":"male"}}]}',
                customResponseType: 'JSON',
                collection: 'HOSTED_ITEMS',
                },
            },
        }
    })

    //should return a default state when given an undefined input
    describe('Default state', () => {
        it('should return a default state when given an undefined input', () => {
          expect(bodyItemReducer(state, { type: undefined })).toEqual(state);
        });
    });

    //should return the initial state without dublication

    describe('Unrecognized action types', () => {
        it('should return the original state without any duplication', () => {
            const action = { type: 'fcvbnm' };
            expect(bodyItemReducer(state, action)).toEqual(state)
        })
    })

    //decribe  - add new data (JSON object)
    describe ('Add New Body Item', () => {
        let data = {
            BodyItem: {
            sourceRoute: 'https://www.swapi.co/api/people/1',
            sourceMethod: 'GET',
            sourceResponse: {

            },
            sourceResponseType: 'JSON',
            customRoute: 'https://localhost:3000',
            customMethod: 'GET',
            customResponse: {},
            customResponseType: 'JSON',
            collection: 'CLONED_ITEMS',
            }
        }
        const action = {
            type: 'CREATE_BODY_FROM_SOURCE',
            payload: data,
        }

        it('Increament bodyItem by 1', () => {
            const newState  = bodyItemReducer(state, action);
            expect(newState.itemCount).toEqual(5)
        })

        it('Increment bodyItem by 2 (is able to desplay multiple body items)', () => {
            const newState  = bodyItemReducer(state, action);
            expect(newState.itemCount).toEqual(5)
            const anotherState = bodyItemReducer(newState,action)
            expect(anotherState.itemCount).toEqual(6)
        })
        it('Add a new BodyItem in Redux store', () => {
            //1. Without restructuring 
            // const bodyItemss = bodyItemReducer(state, action)
            // expect(bodyItemss.bodyItems[5]).toEqual(data)

            //2. With destructuring
            const {bodyItems} = bodyItemReducer(state, action)
            expect(bodyItems[5]).toEqual(data)
        })

        it('Returns a state object not strictly equal to the original', () =>{
            expect(bodyItemReducer(state, action)).not.toBe(state)
        })

        it('Includes a bodyItem not strictly equal to the original', () => {
            const {bodyItems} = bodyItemReducer(state, action);
            expect(bodyItems).not.toBe(state.bodyItems);
            // expect(state.bodyItems).toEqual(bodyItems);
        });
    })

    describe('Modify Body Item', () => {
        let data = {
            BodyItem: {
                bodyItemId:3,
                sourceRoute: 'https://www.swapi.co/api/people/1',
                sourceMethod: 'GET',
                sourceResponse: {

                },
                sourceResponseType: 'XML',
                customRoute: 'https://localhost:3000',
                customMethod: 'GET',
                customResponse: {},
                customResponseType: 'JSON',
                collection: 'CLONED_ITEMS',
            }
        }
        const action = {
            type: 'MODIFY_BODY_ITEM',
            payload: data.BodyItem,
        }
        it('Modifies body item', () => {
            expect(bodyItemReducer(state, action).bodyItems[3]).not.toEqual(state.bodyItems[3])
        })

        it('Does not duplicate other body items in the body items list', () => {
            expect(bodyItemReducer(state, action).itemCount).toEqual(state.itemCount)
        })

        it('Does not mutate other body items in the body items list', () => {
            expect (bodyItemReducer(state, action).bodyItems[1]).toEqual(state.bodyItems[1])
            expect (bodyItemReducer(state, action).bodyItems[2]).toEqual(state.bodyItems[2])
            expect (bodyItemReducer(state, action).bodyItems[4]).toEqual(state.bodyItems[4])
        })
    })

    describe('Delete Body Item', () => {
        let data = {
            bodyItemId:3,
            BodyItem: {
            sourceRoute: 'https://www.swapi.co/api/people/1',
            sourceMethod: 'GET',
            sourceResponse: {

            },
            sourceResponseType: 'JSON',
            customRoute: 'https://localhost:3000',
            customMethod: 'GET',
            customResponse: {},
            customResponseType: 'JSON',
            collection: 'CLONED_ITEMS',
            }
        }
        const action = {
            type: 'DELETE_BODY_ITEM',
            payload: data,
        }

        it('Original state must not equal to updated state', () => { 
            expect(bodyItemReducer(state, action)).not.toBe(state);
        })  

        it('does not mutate or duplicate other body items in the body items list', () => {
            expect (bodyItemReducer(state, action).bodyItems[1]).toEqual(state.bodyItems[1])
            expect (bodyItemReducer(state, action).bodyItems[2]).toEqual(state.bodyItems[2])
            expect (bodyItemReducer(state, action).bodyItems[4]).toEqual(state.bodyItems[4])
        })

        it('When deleting the bodyItem the itemsCount should not be changed', () => {
            expect(bodyItemReducer(state, action).itemCount).toBe(state.itemCount)
        })
    })

    describe('Move Body Item', () => {

        const dest = {
            bodyItemId: 1,
            destination: 'STAGED_ITEMS'
        }

        let action = {
            type: 'MOVE_BODY_ITEM',
            payload: dest,
        }

        it('Original state must not equal to updated state', () => { 
            expect(bodyItemReducer(state, action)).not.toBe(state);
        })  

        it('Move body item from Source Panel to Mock Panel', () => {
            expect(bodyItemReducer(state, action).bodyItems[1].collection).not.toEqual('CLONED_ITEMS')
            expect(bodyItemReducer(state, action).bodyItems[1].collection).not.toEqual('HOSTED_ITEMS')
        })

        it('The rest of the bodyItems should remain the same spot', () => {
            expect (bodyItemReducer(state, action).bodyItems[2]).toEqual(state.bodyItems[2])
            expect (bodyItemReducer(state, action).bodyItems[3]).toEqual(state.bodyItems[3])
            expect (bodyItemReducer(state, action).bodyItems[4]).toEqual(state.bodyItems[4])
        })
    })
})
