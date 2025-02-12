import {useState, useEffect} from 'react'

//this is the custom hook coz the fn which starts with use and this fn has an use hook init

export function usePostTitle(){
    const [ post, setPost]= useState({})

  async function getPosts(){
    const response= await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const json= await response.json()
    setPost(json)
  }

  useEffect(()=>{
    getPosts()
  }, [])

  return post.title;
}

export function useFetch(url){
    const [finalData, setFinalData]= useState({})//initially holds empty object
    const [loading, setLoading]= useState(true)
    console.log(url)

    async function getDetails(){
      try{
          setLoading(true)
          const response= await fetch(url)
          if(!response.ok){
            throw new Error('Network response was no ok')
          }
          const json= await response.json()
          setFinalData(json)
          setLoading(false)
      }catch(error){
        console.log('Failed to fetch:', error)
      }
    }

    useEffect(()=>{//no of times the fn gets mounted this will get rendered
        getDetails()
    }, [url])

    useEffect(()=>{
      const intervalID= setInterval(getDetails, 10*1000)

      return()=>{
        clearInterval(intervalID)
      }
    }, [])


    return {finalData, loading};
}