/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type HeroesList_viewer$ref = any;
export type paginationQueryVariables = {|
  count?: ?number,
  cursor?: ?string,
|};
export type paginationQueryResponse = {|
  +viewer: {|
    +$fragmentRefs: HeroesList_viewer$ref
  |}
|};
export type paginationQuery = {|
  variables: paginationQueryVariables,
  response: paginationQueryResponse,
|};
*/


/*
query paginationQuery(
  $count: Int = 5
  $cursor: String
) {
  viewer {
    ...HeroesList_viewer_1G22uz
    id
  }
}

fragment HeroTpl_hero on Hero {
  id
  name
  date
}

fragment HeroesList_viewer_1G22uz on Viewer {
  Heroes(first: $count, after: $cursor) {
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
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "paginationQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "args": [
              {
                "kind": "Variable",
                "name": "count",
                "variableName": "count"
              },
              {
                "kind": "Variable",
                "name": "cursor",
                "variableName": "cursor"
              }
            ],
            "kind": "FragmentSpread",
            "name": "HeroesList_viewer"
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "paginationQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
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
                      (v2/*: any*/),
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
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v1/*: any*/),
            "filters": [],
            "handle": "connection",
            "key": "HeroesList_Heroes",
            "kind": "LinkedHandle",
            "name": "Heroes"
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "2431c4a40a1d051b772d5022552c180d",
    "id": null,
    "metadata": {},
    "name": "paginationQuery",
    "operationKind": "query",
    "text": "query paginationQuery(\n  $count: Int = 5\n  $cursor: String\n) {\n  viewer {\n    ...HeroesList_viewer_1G22uz\n    id\n  }\n}\n\nfragment HeroTpl_hero on Hero {\n  id\n  name\n  date\n}\n\nfragment HeroesList_viewer_1G22uz on Viewer {\n  Heroes(first: $count, after: $cursor) {\n    edges {\n      node {\n        id\n        ...HeroTpl_hero\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '61ef01a9b5e3c40780c5dfa007357464';

module.exports = node;
