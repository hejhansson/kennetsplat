
const Header = () => {

  // https://onepagelove.com/polaroider
  return (
    <header className="py-8 px-4 flex items-center bg-red">
      <div className="container mx-auto h-full flex-wrap flex items-end relative">
        <img className="w-32 sm:w-64 absolute pin-l pin-t" src="/static/logo.png"/>
        <div>
          <h1 className="text-lg sm:text-4xl mb-2 sm:mb-6 text-white leading-tight">
            Kennets plåt är din <br/>lokala plåtslagare <br/>i Falkenberg
          </h1>
        </div>
      </div>
    </header>
  )
}

export default Header