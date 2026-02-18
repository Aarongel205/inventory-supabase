import { useState } from 'react'

export default function CloseBtn({ setClose }){
    return(
        <button onClick={() => setClose(false)}>x</button>
    )
}