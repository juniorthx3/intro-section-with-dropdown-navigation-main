import imageHeroDesktop from '../images/image-hero-desktop.png'
import imageHeroMobile from '../images/image-hero-mobile.png'
import clientDatabiz from '../images/client-databiz.svg'
import clientAudiophile from '../images/client-audiophile.svg'
import clientMeet from '../images/client-meet.svg'
import clientMaker from '../images/client-maker.svg'

const Hero = () => {
  return (
    <section className='md:mx-32'>
        <div className="flex flex-col-reverse justify-evenly md:flex-row">
            <div className="max-w-md flex flex-col justify-center md:w-1/2">
                <h1 className="text-4xl font-bold text-center md:text-6xl md:text-left md:mt-20 md:mb-8">
                    Make <span className='inline md:block'>remote work</span>
                </h1>
                <p className='flex items-center text-sm text-center text-mediumGray md:mb-10 md:text-lg md:text-left'>
                    Get your team in sync, no matter your location. Streamline processes, 
                    create team rituals, and watch productivity soar.
                </p>
                <div className="flex items-center md:mb-20">
                    <a href="/" className="bg-black text-almostWhite px-6 py-4 text-sm rounded-xl baseline hover:bg-almostWhite hover:border hover:border-black hover:text-black hover:font-bold">Learn more</a>
                </div>  
                <div className='space-x-10 flex items-center pt-10'>
                    <img src={clientDatabiz} alt="" className='h-4'/>
                    <img src={clientAudiophile} alt="" className='h-7' />
                    <img src={clientMeet} alt="" className='h-4' />
                    <img src={clientMaker} alt="" className='h-5' />
                </div>
            </div>
            <div className="flex justify-end md:w-1/2">
                <img src={imageHeroDesktop} alt="" className="hidden w-3/4 md:block" />
                <img src={imageHeroMobile} alt="" className='block md:hidden' />
            </div>
        </div>
    </section>
  )
}

export default Hero