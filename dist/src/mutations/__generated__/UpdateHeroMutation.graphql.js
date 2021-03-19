/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateHeroInput = {|
  id: string,
  name?: ?string,
  date?: ?string,
  clientMutationId?: ?string,
|};
export type UpdateHeroMutationVariables = {|
  input: UpdateHeroInput
|};
export type UpdateHeroMutationResponse = {|
  +updateHero: ?{|
    +updatedId: ?string,
    +updated: ?boolean,
  |}
|};
export type UpdateHeroMutation = {|
  variables: UpdateHeroMutationVariables,
  response: UpdateHeroMutationResponse,
|};
*/


/*
mutation UpdateHeroMutation(
  $input: UpdateHeroInput!
) {
  updateHero(input: $input) {
    updatedId
    updated
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
    "concreteType": "UpdateHeroPayload",
    "kind": "LinkedField",
    "name": "updateHero",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "updatedId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "updated",
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
    "name": "UpdateHeroMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateHeroMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "50847f17ed320b13fdd10cc8b1094189",
    "id": null,
    "metadata": {},
    "name": "UpdateHeroMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateHeroMutation(\n  $input: UpdateHeroInput!\n) {\n  updateHero(input: $input) {\n    updatedId\n    updated\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '497d3bb2b81fa10bb891bf2e9dbecc16';

module.exports = node;
