import CardItem from './components/CardItem'
import Header from './components/Header'

function App() {
  return (
    <>
      <div className="absolute z-20 w-full top-0 overflow-hidden">
        <Header />
        <div className="grid grid-cols-3 2xl:grid-cols-4 gap-[12px] py-[12px] pb-12 max-h-[600px] 2xl:max-h-[900px] overflow-auto cardBox">
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
      </div>
      <div className="w-full h-full absolute top-0 left-0 bg-gray-400 bg-opacity-50 backdrop-blur-xl z-10" />
    </>
  )
}

export default App
