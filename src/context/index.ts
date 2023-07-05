import { createContext } from 'react'
import { Cart, User } from '../types'

export const CartContext = createContext<Cart>({
  items: [],
  setItems: () => { undefined }
})

export const UserContext = createContext<User>({
  username: 'testUserName',
  password: 'testPassword',
  user_type: 'customer',
  user_token: '69420_TotallyNotAMadeUpToken',
})