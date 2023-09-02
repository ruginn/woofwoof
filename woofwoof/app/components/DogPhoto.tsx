'use client'
import { useEffect, useState } from "react"

function DogPhoto() {
    const [dogImage, setDogImage] = useState('')
    const [dogName, setDogName] = useState('')

    const dogPhoto = async () => {
        const response = await fetch(`https://api.thedogapi.com/v1/images/search?api_key=${process.env.DOG_KEY}`)
        const data = await response.json()
        setDogImage(data[0].url)
        // console.log(data[0].url)
    }

    const dogNombre = async () => {
        const response = await fetch('https://randomuser.me/api/?results=1')
        const data = await response.json()
        console.log(data.results[0])
        setDogName(data.results[0].name.first)
        // setDogName()
    }

    useEffect(() => {
        dogPhoto()
        dogNombre()
    },[])


  return (
    <div>
        <h1>Dog Page</h1>
        <img src={dogImage} alt="" className="w-[30rem] h-[50rem] object-cover z-0 relative"  />
        <div className=" w-[30rem] my-[-80px] h-20 bg-gray-500 bg-opacity-40 z-40 relative flex items-center">
            <p className="text-white text-6xl ml-4">{dogName}</p>
        </div>
    </div>
  )
}

export default DogPhoto