import React from 'react'
import OnClickHandler from './components/onClickHandler'
import ampersandMixin from 'ampersand-react-mixin'

export default React.createClass({
  mixins: [ampersandMixin],

  displayName: 'Layout',

  render () {
    const {me} = this.props

    return (
      <OnClickHandler>
        <nav className='top-nav top-nav-light cf' role='navigation'>
          <input id='menu-toggle' className='menu-toggle' type='checkbox'/>
          <label htmlFor='menu-toggle'>Menu</label>
          <ul className='list-unstyled list-inline cf'>
            <li>Labelr</li>
            <li><a href='/repos'>Repos</a></li>
            <li className='pull-right'><a href='/logout'>Logout</a> {me.login}</li>
          </ul>
        </nav>
        <div className='container'>
          {this.props.children}
        </div>
      </OnClickHandler>
    )
  }
})
