import React, { useState } from 'react'
import Button from './Button'

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <Button label="Abrir Modal" onClick={() => setIsOpen(true)} />
      {isOpen && (
        <div className="modal-backdrop">
          <div className="modal">
            <h2>Inscreva-se</h2>
            <p>Cadastre-se para receber novidades sobre novos cursos!</p>
            <Button label="Fechar" onClick={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </div>
  )
}
