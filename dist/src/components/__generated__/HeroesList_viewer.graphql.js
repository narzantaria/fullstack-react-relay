/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type HeroTpl_hero$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type HeroesList_viewer$ref: FragmentReference;
declare export opaque type HeroesList_viewer$fragmentType: HeroesList_viewer$ref;
export type HeroesList_viewer = {|
  +Heroes: {|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: HeroTpl_hero$ref,
      |}
    |}>
  |},
  +$refType: HeroesList_viewer$ref,
|};
export type HeroesList_viewer$data = HeroesList_viewer;
export type HeroesList_viewer$key = {
  +$data?: HeroesList_viewer$data,
  +$fragmentRefs: HeroesList_viewer$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = [
  "Heroes"
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": 5,
      "kind": "LocalArgument",
      "name": "count"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "cursor"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "cursor"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [
        "viewer"
      ],
      "operation": require('./paginationQuery.graphql.js')
    }
  },
  "name": "HeroesList_viewer",
  "selections": [
    {
      "alias": "Heroes",
      "args": null,
      "concreteType": "HeroConnection",
      "kind": "LinkedField",
      "name": "__HeroesList_Heroes_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "HeroEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Hero",
              "kind": "LinkedField",
              "name": "node",
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
                  "name": "__typename",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "HeroTpl_hero"
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Viewer",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = '61ef01a9b5e3c40780c5dfa007357464';

module.exports = node;
