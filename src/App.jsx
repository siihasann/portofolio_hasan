import { BrowserRouter } from 'react-router-dom';

import {
  About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-primary">
        <div className="">
          <Navbar />
          <div className='relative z-0'>
            <Hero />
            <StarsCanvas />
          </div>
        </div>
        <About />
        <Experience />
        <div className="relative z-0">
          <Tech />
          <StarsCanvas />
        </div>
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          {/* <StarsCanvas /> */}
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App