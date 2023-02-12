import React from 'react'

type GreetProps = {
    name: string,
    messageCount: number,
    isLoggedin: boolean
}

export default function Greet(props: GreetProps) {
  return (
    <div>
        {
            props.isLoggedin ? <h1>Hello {props.name} you have {props.messageCount} messages</h1> :
            <h2>"Welcome, Please sign in"</h2>
        }
    </div>
  )
}
