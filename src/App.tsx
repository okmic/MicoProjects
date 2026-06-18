import AppLayout from './components/Layout/AppLayout'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'

function App() {
  return <AppLayout>
        <div
          className={`transition-all duration-700`}
        >
          <Hero />
          <Projects />
        </div>
    </AppLayout>
}

export default App