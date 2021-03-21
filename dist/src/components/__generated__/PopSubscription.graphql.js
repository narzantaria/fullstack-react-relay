/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PopSubscriptionVariables = {||};
export type PopSubscriptionResponse = {|
  +HeroesNumber: ?{|
    +id: string,
    +number: ?number,
  |}
|};
export type PopSubscription = {|
  variables: PopSubscriptionVariables,
  response: PopSubscriptionResponse,
|};
*/


/*
subscription PopSubscription {
  HeroesNumber {
    id
    number
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Population",
    "kind": "LinkedField",
    "name": "HeroesNumber",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "number",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PopSubscription",
    "selections": (v0/*: any*/),
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PopSubscription",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "6188c8c0487e829871d8020ec29ef478",
    "id": null,
    "metadata": {},
    "name": "PopSubscription",
    "operationKind": "subscription",
    "text": "subscription PopSubscription {\n  HeroesNumber {\n    id\n    number\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cbf1b488172671864b8ebcf323b6d3b6';

module.exports = node;
