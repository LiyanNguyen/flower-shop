import { useState, useEffect } from "react"
import Card from "./components/Card"
import { fakeFlowerData, fakeUserData } from "./data"
import Navbar from "./layout/Navbar"
import { CartContext, UserContext } from "./context"
import { CartItem, Flower, User } from "./types"

const App = () => {
  const [data, setData] = useState<Flower[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [items, setItems] = useState<CartItem[]>([])
  const [userData, setUserData] = useState<User>(fakeUserData)

  useEffect(() => {
    // FAKE DATA FETCHING FOR DEMONSTRATION PURPOSES
    // for the sake of demonstration this is simplified
    const getData = async () => {
      await new Promise(resolve => setTimeout(resolve, 500))

      // normally this should only run after the API response is success
      setData(fakeFlowerData) 
      setUserData(fakeUserData)

      // nomally we also have response handler here 
      setIsLoading(false)
    }
    getData()
  }, [])
    

  return (
    <CartContext.Provider value={{ items, setItems }}>
      <UserContext.Provider value={userData}>
        <Navbar />
      </UserContext.Provider>
      <div className='bg-white h-[calc(100vh - 80px)]'>
        <div className="container mx-auto p-5 flex lg:flex-row flex-col gap-5 items-center lg:justify-between">
          {isLoading ? <p className='text-2xl text-slate-500'>Loading...</p> :
          data.map(item =>
            <Card key={item.name} image={item.image} name={item.name} price={item.price} />
          )}
        </div>
      </div>
    </CartContext.Provider>
  )
}

export default App