import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isModal, setIsModal] = useState(false)

  const openModal = () => {
    setIsModal(true)
  }
  const closeModal = () => {
    setIsModal(false)
  }

  return (
    <AppContext.Provider
      value={{
        isModal,
        openModal,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
