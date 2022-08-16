import imageHeroDesktop from '../images/image-hero-desktop.png'
import imageHeroMobile from '../images/image-hero-mobile.png'
import clientDatabiz from '../images/client-databiz.svg'
import clientAudiophile from '../images/client-audiophile.svg'
import clientMeet from '../images/client-meet.svg'
import clientMaker from '../images/client-maker.svg'

const Hero = () => {
  return (
    <section className='flex justify-center md:p-5'>
        <div className="flex flex-col-reverse justify-evenly md:space-x-52 md:flex-row md:h-full">
            <div className="flex flex-col justify-center md:max-w-md  md:w-1/2">
                <h1 className="mt-10 text-4xl font-bold text-center md:text-6xl md:text-left md:mt-28 md:mb-8">
                    Make <span className='inline md:block'>remote work</span>
                </h1>
                <p className='mt-5 mx-9 flex items-center text-lg text-center text-mediumGray md:mb-10 md:text-left md:mx-0 md:mt-0'>
                    Get your team in sync, no matter your location. Streamline processes, 
                    create team rituals, and watch productivity soar.
                </p>
                <div className="mx-auto mt-5 md:mt-0 flex items-center md:mx-0 md:mb-9">
                    <a href="/" className="bg-black border border-black text-almostWhite px-9 py-4 text-sm rounded-xl baseline hover:bg-almostWhite  hover:text-black hover:font-bold">Learn more</a>
                </div>  
                <div className='space-x-10 mx-auto flex items-center pt-10 pb-3 md:pb-0 md:mx-0'>
                    <img src={clientDatabiz} alt="" className='h-4'/>
                    <img src={clientAudiophile} alt="" className='h-7' />
                    <img src={clientMeet} alt="" className='h-4' />
                    <img src={clientMaker} alt="" className='h-5' />
                </div>
            </div>
            <div className="flex md:max-w-md md:w-1/2">
                <img src={imageHeroDesktop} alt="" className="hidden max-w-full h-auto md:block " />
                <img src={imageHeroMobile} alt="" className='block w-full md:hidden' />
            </div>
        </div>
    </section>
  )
}

export default Hero