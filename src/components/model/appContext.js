import React from 'react'

const IdContext = React.createContext()

const IdProvider = IdContext.Provider
const IdConsumer = IdContext.Consumer

export { IdProvider, IdConsumer }