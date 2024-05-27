import React ,{useState} from 'react'


const arr=[ "https://wallpapercave.com/wp/wp6581783.jpg" ,"http://clipartmag.com/images/cartoon-images-of-kids-10.jpg" ,
"https://media.timeout.com/images/105643463/1372/1029/image.jpg","https://media.timeout.com/images/105827875/1372/1029/image.jpg",];

export const Header = () => {
 const [imageHandler, setimageHandler] = useState(0)
  const PreviousImg=()=>{
    //or we can use ternary operator
    //setimageHandler(!imageHandler ? arr.length-1 : setimageHandler(imageHandler-1))
    if(imageHandler==0) {
      setimageHandler(arr.length-1)
    }
    else{ setimageHandler(imageHandler-1)
  }
   
  }

  const NextImg=()=>{
    setimageHandler((imageHandler+1)%arr.length)
  }
  return (
    <>
    <div className="app">
      <button onClick= {PreviousImg}>Previous</button>
    <img src={arr[imageHandler]}/>
    <button onClick={NextImg}>Next</button>
    </div>
    </>
  )
}

export default Header