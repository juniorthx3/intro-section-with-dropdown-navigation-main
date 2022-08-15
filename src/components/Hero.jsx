import imageHeroDesktop from '../images/image-hero-desktop.png'
import imageHeroMobile from '../images/image-hero-mobile.png'
import clientDatabiz from '../images/client-databiz.svg'
import clientAudiophile from '../images/client-audiophile.svg'
import clientMeet from '../images/client-meet.svg'
import clientMaker from '../images/client-maker.svg'

const Hero = () => {
  return (
    <section className='container mx-auto flex justify-center items-center'>
        <div className="flex flex-col-reverse justify-center items-center mt-10 space-y-0 md:flex-row">
            <div className="flex flex-col mb-32 space-y-9 md:w-1/2">
                <h1 className="max-w-md text-4xl font-bold text-center md:text-6xl md:text-left">
                    Make <span className='inline md:block'>remote work</span>
                </h1>
                <p className='max-w-md w-4/5 text-sm text-center text-mediumGray md:text-left'>
                    Get your team in sync, no matter your location. Streamline processes, 
                    create team rituals, and watch productivity soar.
                </p>
                <div className="max-w-md pt-5 pb-5">
                    <a href="/" className="bg-black text-almostWhite px-6 py-4 text-sm rounded-xl baseline hover:bg-almostWhite hover:border hover:border-black hover:text-black hover:font-bold">Learn more</a>
                </div>  
                <div className='flex space-x-5'>
                    <img src={clientDatabiz} alt="" className='h-4'/>
                    <img src={clientAudiophile} alt="" className='h-4' />
                    <img src={clientMeet} alt="" className='h-4' />
                    <img src={clientMaker} alt="" className='h-4' />
                </div>
            </div>
            <div className="md:w-1/2">
                <img src={imageHeroDesktop} alt="" className="hidden md:block" />
                <img src={imageHeroMobile} alt="" className='block mb-10 md:hidden' />
            </div>
        </div>
    </section>
  )
}

export default Hero