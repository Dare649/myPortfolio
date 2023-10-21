import dialali from "../assets/images/dialaliimg.png";
import Tezz from "../assets/images/Tezz.png";
import firazi from "../assets/images/firazi.png";

const Projects = () => {
  return (
    <section id="projects" className='pb-80'>
      <h1  className="capitalize text-4xl font-bold text-center py-10">Projects</h1>
      <div className='flex flex-col items-center justify-between lg:px-20 sm:px-0'>
        <div className="w-full h-60 mb-80">
          <h1 className="capitalize text-xl font-semibold text-center py-10">DialAli Admin</h1>
          <img src={dialali} alt="" 
            className="lg:px-40 sm:px-0"
          />
          <p className="py-20 text-md">This is the Admin side of the applications that allows users manage reports and activities on the applicatio. I was solely tasked to start the development of the frontend of the application <br />
          hasn't gone live.
          </p>
        </div>
        <div className="w-full h-60 mb-48 py-10">
          <h1 className="capitalize text-xl font-semibold text-center py-20">Client Management App</h1>
          <img src={Tezz} alt="" 
            className="lg:px-40 sm:px-0"
          />
          <p className="py-20 text-md">This was a task given to me during an interview session to be reviewed by the interviewer. I was requested to complete the first four pages of the UI without making anything functional. Clicking the login button from the login page (which starts the process) all navigations a functional, only the first two menu are with content (as requested from the interview). Also, with the client list table being clikable to view a client's profile and the 'Back' button leading back to the list. <br />
          <a href="https://capable-puffpuff-56b258.netlify.app/" target="_blank" className="text-blue-600 font-bold">click here</a>
          </p>
        </div>
        <div className="w-full h-60 mt-80 pb-10">
          <h1 className="capitalize text-xl font-semibold text-center py-20">Firazi</h1>
          <img src={firazi} alt="" 
            className="lg:px-40 sm:px-0 lg:mx-36 sm:mx-auto"
          />
          <p className="py-20 text-md">Supported in the building of <strong>Firazi </strong> an application that connects travellers and users who wants to send their packages to other states or country <br />
          </p>
        </div>
      </div>
    </section>
  )
}

export default Projects
