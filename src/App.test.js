import React from 'react';
import ReactDOM from 'react-dom';

import * as actions from '../src/actions/card'
import * as types from '../src/constants/index'

describe('actions', () => {
  it('check array in action card', () => {
    const pg = 'dn'
    const trigger = 1
    const posters = [ [ 0,  '' ], [ 1, ''  ], [ 2, ''  ], [ 3, ''  ], [ 4, '' ],
                      [ 5, ' ' ], [ 6, ''  ], [ 7, ''  ], [ 8, ''  ], [ 9, '' ],
                      [ 10, '' ], [ 11, '' ], [ 12, '' ], [ 13, '' ], [ 14, '' ] ]
    const data =    [ [ '', '' ], [ '', '' ], [ '', '' ], [ '', '' ], [ '', '' ] ]
    const expectedAction = {
      type: types.GET_NEXT,
      trigger: 0,
		  payload:      [ [ 0, ''  ], [ 1, ''  ], [ 2, ''  ], [ 3, ''  ], [ 4, ''  ],
                      [ 5, ' ' ], [ 6, ''  ], [ 7, ''  ], [ 8, ''  ], [ 9, ''  ],
                       [ '', '' ], [ '', '' ], [ '', '' ], [ '', '' ], [ '', '' ] ]
    }
    expect(actions.insert(pg, trigger, posters, data)).toEqual(expectedAction)
  })
})
