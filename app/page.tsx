import Ads from '../components/ads/ads'
import Blog from '../components/blog/blog-section'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'
import Programs from '../components/programs/program-section'
import Services from '../components/services/service-section'
import Student from '../components/student/student-section'
import Tutors from '../components/tutors/tutor-section'

export default function Home() {
  return (
    <main className='w-full flex flex-col gap-20'>
      <Header />
      <Services />
      <Ads />
      <Programs />
      <Tutors />
      <Student />
      <Blog />
      <Footer />
    </main>
  )
}
