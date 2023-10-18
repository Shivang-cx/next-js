'use client'
import Banner from './components/banner'
import Faq from './components/faq'
import Followus from './components/followus'
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
      <Followus></Followus>
      <Faq></Faq>
    </main>
  )
}
