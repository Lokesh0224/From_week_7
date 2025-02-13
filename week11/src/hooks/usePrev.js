import {useEffect, useRef} from 'react'

export const usePrev= (value) =>{
    const ref= useRef()
    console.log("re-render happened with new value " + value)

    useEffect(()=>{
        console.log("update the ref to be " +value)
        ref.current = value
    }, [value])

    console.log("returned " + ref.current)
    return ref.current
}

//it returns first, effect gets called later