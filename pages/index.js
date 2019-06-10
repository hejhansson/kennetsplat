import Head from '../components/Head'
import Header from '../components/Header'

function Home() {
  return (
    <>
      <Head/>
      <Header/>

      <div className="container mx-auto py-8 mb-12 px-4">

        <div className="sm:flex flex-row-reverse items-center mt-0 sm:mt-16 bg-grey-lighter">

          <div className="w-full sm:w-1/2">
            <img src="/static/IMG_09792.jpg"/>
          </div>

          <div className="w-full sm:w-1/2 pl-6 sm:pl-16 py-8">
            <h2 className="text-lg sm:text-2xl">
              Vi utför allt<br/>inom plåtslageri  
            </h2> 

            <ul className="pl-4 mt-4 leading-normal">
              <li>Taktäckningar</li>
              <li>Vattenavrinning</li>
              <li>Plåtinklädning av skorstenar och vindskivor</li>
              <li>Tillverkning av bleck, beslag och dylikt</li>
              <li>Jobbar både mot privat- och företagskunder</li>
              <li>Allt enligt kundens önskemål</li>
            </ul>
          </div>
        </div>

        <div className="sm:flex items-center mt-16 bg-grey-lighter">

          <div className="w-full sm:w-1/2">
            <img src="/static/kennets-2.jpg"/>
          </div>

          <div className="w-full sm:w-1/2 pl-8 sm:pl-16">
            <h2 className="text-lg sm:text-2xl mb-4 mt-8 sm:mt-0">
              Lång erfarenhet<br/> av plåtslageri 
            </h2> 

            <p className="leading-normal pr-8 sm:pr-24 pb-8 sm:pb-0">
            
            Företaget startades av Kennet Larsson 1983 och togs över av Björn Benjaminsson 2010 och har fortsatt att drivas i samma anda där målsättningen är ett väl utfört arbete och med det nöjda kunder. 
            <br/><br/>
            Kennets Plåt AB är ett mindre plåtslageri som ligger i Tågarp strax utanför Falkenberg. 
            <br/><br/>
            <a target="_blank" href="https://www.google.com/maps/place/T%C3%A5garp+110,+311+94+Falkenberg,+Sweden/@56.9394572,12.5963949,17z/data=!3m1!4b1!4m5!3m4!1s0x4651cbc83e29b887:0x8ff9bc09c2106906!8m2!3d56.9394543!4d12.5985836?hl=en" className="text-black no-underline flex items-center">
              <img className="mr-2" src="static/map-pin.svg"/>
              <span>Hitta till oss</span>
            </a>
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap mt-12 pb-12">
          <h2 className="text-lg sm:text-2xl mt-16">
            Referensprojekt
          </h2> 
          <div className="masonry mt-8">
            <img className="item" src="/static/images/massing.jpg"/>
            <img className="item" src="/static/IMG_0828.jpg"/>
            <img className="item" src="/static/images/IMG_0978.jpeg"/>
            <img className="item" src="/static/images/IMG_0237.jpeg"/>
            <img className="item" src="/static/images/IMG_0275.JPG"/>
            <img className="item" src="/static/images/IMG_0779.jpeg"/>
            <img className="item" src="/static/images/IMG_0993.jpeg"/>
            <img className="item" src="/static/images/IMG_1114.JPG"/>
            <img className="item" src="/static/images/IMG_1029.jpeg"/>
            <img className="item" src="/static/images/IMG_1026.jpeg"/>
            <img className="item" src="/static/images/IMG_1756.JPG"/>
            <img className="item" src="/static/images/IMG_1809.JPG"/>
            <img className="item" src="/static/images/IMG_0936.jpeg"/>
          </div>
        </div>

        <div className="flex mt-12 mb-12 sm:text-center bg-grey-lighter">
          <div className="mx-auto mt-12 mb-12 pb-12 pl-8 sm:pl-0">
            <h2 className="text-lg sm:text-2xl mt-8 mb-8">
              Kontakta oss idag
            </h2> 
            <div className="leading-normal w-full flex flex-wrap">
              <div className="inline-block w-full sm:w-1/2">
                Mail -> kennetsplat@gmail.com<br/>
                Mobil -> 070-2941584
              </div>
              <div className="inline-block w-full sm:w-1/2 mt-4 sm:mt-0">
                Tågarp 110, <br/>311 94 Falkenberg, <br/>Sweden
              </div>
              <div className="mt-12 w-full flex items-center justify-center text-sm pr-8 sm:pr-0">
                <img className="mr-4 sm:mr-2" src="/static/info.svg"/>
                <span>Visste du att du kan använda dig av ROT-avdraget?</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full text-grey text-center pt-16 mt-16">
          © Kennets Plåt AB 
        </div>      
      </div>
    </>
  )
}

export default Home