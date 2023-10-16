'use client'
import Banner from './components/banner'
import Header from './components/header'
import Roadmap from './components/roadmap'
import ScrollingImages from './components/ScrollingImages'
export default function Home() {
  return (
    <main className="main-page">
      <Header></Header>
      <Banner></Banner>
    
      <ScrollingImages></ScrollingImages>
      <Roadmap></Roadmap>
    </main>
  )
}
