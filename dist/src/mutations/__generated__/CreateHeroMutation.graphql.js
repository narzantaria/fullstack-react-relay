/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateHeroInput = {|
  name: string,
  date: string,
  clientMutationId?: ?string,
|};
export type CreateHeroMutationVariables = {|
  input: CreateHeroInput
|};
export type CreateHeroMutationResponse = {|
  +createHero: ?{|
    +hero: ?{|
      +id: string,
      +name: ?string,
      +date: ?string,
    |}
  |}
|};
export type CreateHeroMutation = {|
  variables: CreateHeroMutationVariables,
  response: CreateHeroMutationResponse,
|};
*/


/*
mutation CreateHeroMutation(
  $input: CreateHeroInput!
) {
  createHero(input: $input) {
    hero {
      id
      name
      date
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateHeroPayload",
    "kind": "LinkedField",
    "name": "createHero",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Hero",
        "kind": "LinkedField",
        "name": "hero",
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
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateHeroMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateHeroMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "b311f1c3a2793e6f788568fa3e1abf3e",
    "id": null,
    "metadata": {},
    "name": "CreateHeroMutation",
    "operationKind": "mutation",
    "text": "mutation CreateHeroMutation(\n  $input: CreateHeroInput!\n) {\n  createHero(input: $input) {\n    hero {\n      id\n      name\n      date\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '85290d21d954ff7033a0506c102ec98e';

module.exports = node;
