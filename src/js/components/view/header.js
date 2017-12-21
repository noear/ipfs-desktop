import React from 'react'
import PropTypes from 'prop-types'

/**
 * Is a Pane's Header.
 *
 * @param {Object} props
 *
 * @prop {String} title     - The title of the pane
 * @prop {String} subtitle  - Optional subtitle of the pane
 * @prop {Node}   children  - Optional header children (e.g.: buttons)
 *
 * @return {ReactElement}
 */
export default function Header (props) {
  return (
    <div className='header'>
      <div>
        <p className='title'>{props.title}</p>
        { props.subtitle !== '' &&
          <p className='subtitle'>{props.subtitle}</p>
        }
      </div>
      <div>
        {props.children}
      </div>
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  subtitle: PropTypes.string
}

Header.defaultProps = {
  title: '',
  subtitle: ''
}
