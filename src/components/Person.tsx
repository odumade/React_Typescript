import React from 'react'

type PersonProps = {
    name: {
        firstname: string,
        lastname: string
    }
}

export default function Person(props: PersonProps) {
  return (
    <div>
        <h3>My first name is {props.name.firstname} and lastname is {props.name.lastname} </h3>
    </div>
  )
}
