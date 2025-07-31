'use client'

import React, { useState, createContext, useContext, ReactNode } from 'react'
import LoginModal from "@/components/modals/LoginModal"
import RegisterModal from "@/components/modals/RegisterModal"
import ForgotPasswordModal from "@/components/modals/ForgotPasswordModal"

type ModalType = 'login' | 'register' | 'forgot-password' | null

interface AuthModalContextType {
    currentModal: ModalType
    openLoginModal: () => void
    openRegisterModal: () => void
    openForgotPasswordModal: () => void
    closeAllModals: () => void
}

const AuthModalContext = createContext<AuthModalContextType | undefined>(undefined)

export const useAuthModals = () => {
    const context = useContext(AuthModalContext)
    if (context === undefined) {
        throw new Error('useAuthModals must be used within an AuthModalProvider')
    }
    return context
}

interface AuthModalProviderProps {
    children: ReactNode
}

export const AuthModalProvider: React.FC<AuthModalProviderProps> = ({ children }) => {
    const [currentModal, setCurrentModal] = useState<ModalType>(null)

    const openLoginModal = () => setCurrentModal('login')
    const openRegisterModal = () => setCurrentModal('register')
    const openForgotPasswordModal = () => setCurrentModal('forgot-password')
    const closeAllModals = () => setCurrentModal(null)

    const openRegisterFromLogin = () => setCurrentModal('register')
    const openLoginFromRegister = () => setCurrentModal('login')
    const openForgotPasswordFromLogin = () => setCurrentModal('forgot-password')
    const openLoginFromForgotPassword = () => setCurrentModal('login')
    const openRegisterFromForgotPassword = () => setCurrentModal('register')

    const value: AuthModalContextType = {
        currentModal,
        openLoginModal,
        openRegisterModal,
        openForgotPasswordModal,
        closeAllModals,
    }

    return (
        <AuthModalContext.Provider value={value}>
            {children}

            <LoginModal
                open={currentModal === 'login'}
                onOpenChange={(open) => !open && closeAllModals()}
                onRegister={openRegisterFromLogin}
                onForgotPassword={openForgotPasswordFromLogin}
            />

            <RegisterModal
                open={currentModal === 'register'}
                onOpenChange={(open) => !open && closeAllModals()}
                onLogin={openLoginFromRegister}
            />

            <ForgotPasswordModal
                open={currentModal === 'forgot-password'}
                onOpenChange={(open) => !open && closeAllModals()}
                onRegister={openRegisterFromForgotPassword}
                onLogin={openLoginFromForgotPassword}
            />
        </AuthModalContext.Provider>
    )
}