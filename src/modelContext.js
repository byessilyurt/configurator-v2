import React from 'react'
import { createModelStore } from './modelStore'
import { useLocalObservable } from 'mobx-react'

const ModelContext = React.createContext(null)

export const ModelProvider = ({children}) => {
  const modelStore = useLocalObservable(createModelStore)

  return <ModelContext.Provider value={modelStore}>
    {children}
  </ModelContext.Provider>
}

export const useModelStore = () => React.useContext(ModelContext)