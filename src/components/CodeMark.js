import React from 'react'
import './sectionlock.css'

const CodeMark = props => {
    console.log(props.children);
    return(
    <code  {...props.attributes}>{props.children}</code>
    )
}

export default CodeMark;