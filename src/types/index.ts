import { Dispatch, SetStateAction } from "react"

export type CartItem = {
  name: string
  count: number
  total: number
}

export type Flower = {
  image: string
  name: string
  price: number
}

export type User = {
  username: string
  password: string
  user_type: string
  user_token: string
}

export interface Cart {
  items: CartItem[]
  setItems: Dispatch<SetStateAction<CartItem[]>>
}