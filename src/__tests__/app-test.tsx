import React from 'react'
import {shallow} from 'enzyme'
import Header from '../view/header'
import Pokemon from '../view/pokemon'
import App from '../app'

describe('App Stuff', function(){
    it('should render with app className', function(){
        expect(shallow(<App/>).is('.app')).toBe(true)
    })

    it('should render with Pokemon', function(){
        expect(shallow(<App/>).contains(<Pokemon/>)).toBe(true)
    })

    it('should render with Header', function(){
        expect(shallow(<App/>).contains(<Header/>)).toBe(true)
    })
})