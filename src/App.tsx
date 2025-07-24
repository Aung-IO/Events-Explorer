import Footer from './components/core/Footer'
import Header from './components/core/Header'
import EventsList from './feat/events/components/EventsList'

function App() {

  return (
    <>
      <Header />
      <div className="flex min-h-svh flex-col items-center justify-center">
        <EventsList />
      </div>
      <Footer />
    </>
  );
}

export default App;