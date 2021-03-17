/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type HeroTpl_hero$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type HeroesList_root$ref: FragmentReference;
declare export opaque type HeroesList_root$fragmentType: HeroesList_root$ref;
export type HeroesList_root = {|
  +Heroes: {|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: HeroTpl_hero$ref,
      |}
    |}>
  |},
  +$refType: HeroesList_root$ref,
|};
export type HeroesList_root$data = HeroesList_root;
export type HeroesList_root$key = {
  +$data?: HeroesList_root$data,
  +$fragmentRefs: HeroesList_root$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "forward",
        "path": [
          "Heroes"
        ]
      }
    ]
  },
  "name": "HeroesList_root",
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
  "type": "Root",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '596183116567e4e5cb13eb9ae10b8059';

module.exports = node;
