'use client'
import Banner from './components/banner'
import Faq from './components/faq'
import Followus from './components/followus'
import Header from './components/header'
import OurTeam from './components/ourteam'
import Roadmap from './components/roadmap'
import ScrollingImages from './components/ScrollingImages'
export default function Home() {
  return (
    <main className="main-page bg-[#0f0f11]">
      <Header></Header>
      <Banner></Banner>
      <ScrollingImages></ScrollingImages>
      <Roadmap></Roadmap>
      <Followus></Followus>
      <Faq></Faq>
      <OurTeam></OurTeam>
    </main>
  )
}
