import React from 'react'
import Menu from './components/Menu'
import Card from './components/Card'
import Footer from './components/Footer'
import Modal from './components/Modal'
import Input from './components/Input'
import Button from './components/Button'

export default function App() {
  return (
    <div>
      <Menu />
      <main className="container">
        <h1>Bem-vindo à Plataforma de Cursos Online</h1>
        <Input placeholder="Buscar cursos..." />
        <Card
          title="Curso de React"
          description="Aprenda React do básico ao avançado com projetos práticos."
        />
        <Modal />
      </main>
      <Footer />
    </div>
  )
}
