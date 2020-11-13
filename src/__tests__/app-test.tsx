import React from 'react'
import {shallow} from 'enzyme'

import App from '../app'

describe('App Stuff', function(){
    it('should render', function(){
        expect(shallow(<App/>).is('.app')).toBe(true)
    })
})