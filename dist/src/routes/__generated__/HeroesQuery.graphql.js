/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type HeroesList_root$ref = any;
export type HeroesQueryVariables = {||};
export type HeroesQueryResponse = {|
  +root: {|
    +$fragmentRefs: HeroesList_root$ref
  |}
|};
export type HeroesQuery = {|
  variables: HeroesQueryVariables,
  response: HeroesQueryResponse,
|};
*/


/*
query HeroesQuery {
  root {
    ...HeroesList_root
    id
  }
}

fragment HeroTpl_hero on Hero {
  id
  name
  date
}

fragment HeroesList_root on Root {
  Heroes(first: 100) {
    edges {
      node {
        id
        ...HeroTpl_hero
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 100
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HeroesQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Root",
        "kind": "LinkedField",
        "name": "root",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "HeroesList_root"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "HeroesQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Root",
        "kind": "LinkedField",
        "name": "root",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v0/*: any*/),
            "concreteType": "HeroConnection",
            "kind": "LinkedField",
            "name": "Heroes",
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
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__typename",
                        "storageKey": null
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
            "storageKey": "Heroes(first:100)"
          },
          {
            "alias": null,
            "args": (v0/*: any*/),
            "filters": [],
            "handle": "connection",
            "key": "HeroesList_Heroes",
            "kind": "LinkedHandle",
            "name": "Heroes"
          },
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b629e0dedfb5e50b52b9848291061f4f",
    "id": null,
    "metadata": {},
    "name": "HeroesQuery",
    "operationKind": "query",
    "text": "query HeroesQuery {\n  root {\n    ...HeroesList_root\n    id\n  }\n}\n\nfragment HeroTpl_hero on Hero {\n  id\n  name\n  date\n}\n\nfragment HeroesList_root on Root {\n  Heroes(first: 100) {\n    edges {\n      node {\n        id\n        ...HeroTpl_hero\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0967d165fc30c56e9b40cae91bd44f0c';

module.exports = node;
