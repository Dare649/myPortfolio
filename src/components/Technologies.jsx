import bootstrap from '../assets/images/bootstrap.png';
import cssnew from '../assets/images/cssnew.png';
import git from '../assets/images/git.png';
import gitHub from '../assets/images/github.png';
import html from '../assets/images/html.png';
import jsLogo from '../assets/images/jsLogo.png';
import reactjsimg from '../assets/images/reactjsimg.png';
import tailwind from '../assets/images/tailwind.png';
import vite from '../assets/images/vite.png';


const Technologies = () => {
  return (
    <section id="technologies">
      <h1  className='capitalize text-4xl font-bold text-center pt-20'>technologies</h1>
      <div className='flex sm:flex-row lg:flex-col sm:justify-between lg:justify-normal py-20'>
        <div className='flex lg:flex-row sm:flex-col item-center justify-between py-10'>
          <div className='w-40 h-40 rounded-full sm:py-5 lg:py-0'>
            <img src={reactjsimg} alt="React Js" />
          </div>
          <div className='w-40 h-40 rounded-full sm:py-5 lg:py-0'>
            <img src={jsLogo} alt="JavaScript" />
          </div>
          <div className='w-40 h-40 rounded-full sm:py-5 lg:py-0'>
            <img src={tailwind} alt="Tailwind Css" />
          </div>
          <div className='w-40 h-40 rounded-full sm:py-5 lg:py-0'>
            <img src={bootstrap} alt="Boostrap 5" />
          </div>
          <div className='w-40 h-40 rounded-full sm:py-5 lg:py-0'>
            <img src={cssnew} alt="CSS" />
          </div>
        </div>
        <div className='flex lg:flex-row sm:flex-col item-center justify-between '>
          <div className='w-40 h-40 rounded-full sm:py-5 lg:py-0'>
            <img src={html} alt="HTML 5" />
          </div>
          <div className='w-40 h-40 rounded-full sm:py-5 lg:py-0'>
            <img src={git} alt="Git" />
          </div>
          <div className='w-40 h-40 rounded-full sm:py-5 lg:py-0'>
            <img src={gitHub} alt="GitHub" />
          </div>
          <div className='w-40 h-40 rounded-full sm:py-5 lg:py-0'>
            <img src={vite} alt="Vite" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Technologies
