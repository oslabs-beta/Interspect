/* eslint-disable */
import * as types from './actionTypes';
import { BodyItemFilters } from './actions';

// BodyItems template

// bodyItems: {
//   id1:
//   {
//   sourceRoute: "http://placewhereitemwasclonedfrom.com",
//   sourceMethod: "GET or PUT etc",
//   sourceResponseType: "JSON" || "XML"
//   sourceResponse: actual JSON || XML
//   customRoute: "PORT://routeMyAppGetsThisFrom"
//   customMethod: "GET or PUT etc",
//   customResponseType : "JSON" || "XML",
//   customResponse: actual JSON || XML,
//   collection: "cloned"||"staged"||"hosted",
//   },
//
// }


const initialState = {
  itemCount: 10,
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
};

const bodyItemsReducer = (state = initialState, action) => {
  const {bodyItems} = state;  
  switch (action.type) {
    case types.CREATE_BODY_FROM_SOURCE:
      const newCount = state.itemCount + 1;
      bodyItems[newCount] = action.payload;
      bodyItems[newCount].bodyItemId = newCount;
      return {
        ...state,
        itemCount: newCount,
        bodyItems,
      };
    case types.MODIFY_BODY_ITEM:
      const id = action.payload.bodyItemId;
      bodyItems[id] = action.payload;
      return {
        ...state,
        bodyItems
      }
      case types.DELETE_BODY_ITEM:
        delete bodyItems[action.payload];
        return {
          ...state,
          bodyItems
        }
      case types.MOVE_BODY_ITEM:
        // id
          // bodyId
        // dest
          //action.payload.destination
        console.log("action.payload", action.payload);
        bodyItems[action.payload.bodyItemId].collection = action.payload.destination;
      return {
          ...state,
          bodyItems
        }
    default:
      return state;
  }
};


export default bodyItemsReducer;

//selectors
export const bodyItemsCollectionSelector = (state, filter) => {
  const result = {};
  if (Object.keys(BodyItemFilters).includes(filter)) {
    const bodyKeys = Object.keys(state.bodyItems);
    for (let i = 0; i < bodyKeys.length; i += 1) {
      const key = bodyKeys[i];
      if (state.bodyItems[key].collection === filter) {
        result[key] = state.bodyItems[key];
      }
    }
  } else {
    throw new Error(`Unkown filter: ${filter}`);
  }
  return result;
};
