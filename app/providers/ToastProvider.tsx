'use client'

import { Toaster } from 'react-hot-toast'

export default function ToastProvider() {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 5000,
        style: {
          background: '#363636',
          color: '#fff',
          maxWidth: '500px',
        },
        success: {
          style: {
            background: '#00C9A7',
          },
        },
        error: {
          style: {
            background: '#FF3D71',
          },
        },
      }}
    />
  )
} 