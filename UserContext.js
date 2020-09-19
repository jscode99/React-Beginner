import React from 'react'

const UserContext = React.createContext('hello world')

const UserProvider = UserContext.provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }
export default UserContext
