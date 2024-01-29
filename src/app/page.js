
import '../app/components/Hero'
import Hero from '../app/components/Hero'
import Nav from './components/Nav'
export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212] '>
      <Nav />
      <div className='container mx-auto px-12  mt-24 py-4'>
        <Hero />
      </div>
    </main>
  )
}
