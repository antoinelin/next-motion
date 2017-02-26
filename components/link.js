import React from 'react'
import Router from 'next/router'

/*
* function onClickHandler
* params -> @string, @function
* return -> triger animation + push to routes
*/
function onClickHandler(to, onClickDo) {
  return (e) => {
    e.preventDefault()
    onClickDo()
    setTimeout(() => {
      Router.push(to)
    }, 200)
  }
}
/*
* Link component
* props -> children, to : correspond to href path, onClickDo : callback function
* return jsx -> a attribut, will triger onClickHandler method on click
*/
const Link = ({ children, to, onClickDo }) => (
  <a href="#" onClick={onClickHandler(to, onClickDo)}>
    {children}
    <style jsx>{`
      a {
        margin-right: 10px;
        text-decoration: none;
      }
    `}</style>
  </a>
)

// Export
export default Link
