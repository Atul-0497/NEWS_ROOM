import React, { useContext, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import News from './pages/News'
import { ThemeContext } from './context/ThemeContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  const [articles, setArticles] = useState([])
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const newsProps = {
    country: 'us',
    articles,
    setArticles
  }

  return (
    <BrowserRouter>
      <Navbar setArticles={setArticles} />
      <Routes>
        <Route path="/" element={<News {...newsProps} category="general" />} />
        <Route path="/business" element={<News {...newsProps} category="business" />} />
        <Route path="/entertainment" element={<News {...newsProps} category="entertainment" />} />
        <Route path="/general" element={<News {...newsProps} category="general" />} />
        <Route path="/health" element={<News {...newsProps} category="health" />} />
        <Route path="/science" element={<News {...newsProps} category="science" />} />
        <Route path="/sports" element={<News {...newsProps} category="sports" />} />
        <Route path="/technology" element={<News {...newsProps} category="technology" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App