import bodyItemReducer from "../thingsToImplement/redux/bodyItemsReducer" 

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
    describe('default state', () => {
        it('should return a default state when given an undefined input', () => {
          expect(bodyItemReducer(state, { type: undefined })).toEqual(state);
        });
    });

    //should return the initial state without dublication

    describe('unrecognized action types', () => {
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
            //1.without restructuring 
            // const bodyItemss = bodyItemReducer(state, action)
            // expect(bodyItemss.bodyItems[5]).toEqual(data)

            //2.with destructuring
            const {bodyItems} = bodyItemReducer(state, action)
            expect(bodyItems[5]).toEqual(data)
        })
        //In redux we never mutate the data, if something changes we copy the data structure

        it('returns a state object not strictly equal to the original', () =>{
            expect(bodyItemReducer(state, action)).not.toBe(state)
        })

        it('includes a bodyItem not strictly equal to the original', () => {
            const {bodyItems} = bodyItemReducer(state, action);
            expect(bodyItems).toBe(state.bodyItems);
        });
    })

    // describe('Modify Body Item', () => {
    //     it()
    // })

    //describe - modify data
    //describe - delete Body item
    //describe - delete Body item
})