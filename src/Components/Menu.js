import React from 'react'
import { withToggler } from '../HOC/withToggler'

function Menu(props) {
  return (
      <>
          <button onClick={props.toggle}>{props.on ? "Hide" : "Show"} Menu</button>
          <p style={props.on?{display:"block"}:{display:"none"}}>
              Our JavaScript Tutorial is designed for beginners and professionals both. JavaScript is used to
              create client-side dynamic pages.
              JavaScript is an object-based scripting language which is lightweight and cross-platform.
              JavaScript is not a compiled language, but it is a translated language. The JavaScript Translator
              (embedded in the browser) is responsible for translating the JavaScript code for the web browser.
          </p>
      </>
  )
}

export default withToggler(Menu) 