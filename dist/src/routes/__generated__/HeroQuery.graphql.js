/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type HeroQueryVariables = {|
  id: string
|};
export type HeroQueryResponse = {|
  +root: {|
    +Hero: ?{|
      +id: string,
      +name: ?string,
      +date: ?string,
    |}
  |}
|};
export type HeroQuery = {|
  variables: HeroQueryVariables,
  response: HeroQueryResponse,
|};
*/


/*
query HeroQuery(
  $id: ID!
) {
  root {
    Hero(id: $id) {
      id
      name
      date
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": [
    {
      "kind": "Variable",
      "name": "id",
      "variableName": "id"
    }
  ],
  "concreteType": "Hero",
  "kind": "LinkedField",
  "name": "Hero",
  "plural": false,
  "selections": [
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "date",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "HeroQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Root",
        "kind": "LinkedField",
        "name": "root",
        "plural": false,
        "selections": [
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "HeroQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Root",
        "kind": "LinkedField",
        "name": "root",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "df5261c64cea3d975ecb5f1b10f0c562",
    "id": null,
    "metadata": {},
    "name": "HeroQuery",
    "operationKind": "query",
    "text": "query HeroQuery(\n  $id: ID!\n) {\n  root {\n    Hero(id: $id) {\n      id\n      name\n      date\n    }\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f59ef91981cd09fa3a7c46f31686ab99';

module.exports = node;
