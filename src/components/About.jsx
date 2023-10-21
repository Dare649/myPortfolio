import { BiArrowToTop } from "react-icons/bi"
import { Link } from "react-scroll"

const About = () => {
  return (
    <section id="about">
        <Link to="#" spy={true} smooth={true}
            className="top-3/4 left-0 fixed cursor-pointer"
        >
            <BiArrowToTop size={40}/>
        </Link>
        <h1  className='capitalize text-4xl font-bold sm:pt-10 lg:pt-20 pb-20 text-center '>about me</h1>
        <div className="">
            <h1 className="text-3xl font-bold py-5 capitalize">career objective</h1>
            <p className="text-md py-3 ">
                As a Junior Frontend Developer, my objective is to leverage my passion for coding and design to
                contribute to dynamic web development projects. I aim to utilize my strong understanding of HTML,
                CSS, and JavaScript to create visually appealing and user-friendly websites, while continuously
                expanding my skills and knowledge in frontend technologies. With a collaborative mindset and a
                keen eye for detail, I strive to work in a supportive team environment, where I can learn from
                experienced professionals and actively contribute to the success of innovative projects. My
                ultimate goal is to grow into a proficient and versatile Frontend Developer, capable of delivering
                cutting-edge solutions that enhance the user experience and drive business growth.
            </p>
        </div>
        <div className="py-10">
            <h1 className="text-3xl font-bold py-5 capitalize">work experience</h1>
            <div className=''>
                <h2 className="text-xl font-bold py-5 capitalize">
                    EventDrive Nigeria  
                </h2>
                <h2 className="text-lg font-semibold py-2 capitalize">
                    frontend developer 
                </h2>
                <h2 className="text-md font-semibold py-2 capitalize flex flex-row">
                    <p>oct 2023 - till date</p> 
                    <p className="ml-10">Part-time (remote)</p> 
                </h2>
                <ul className='text-md list-decimal'>
                    <li className='py-3 first-letter:capitalize'>develop and maintain user interfaces for web applications and websites using react js, tailwind css, javascript and other relevant technologies </li>
                    <li className='py-3 first-letter:capitalize'>ensure that web applications are responsive and work smoothly across different screen sizes and devices.</li>
                    <li className='py-3 first-letter:capitalize'>ensure compatibility with various web browsers and troubleshoot any rendering issues.</li>
                    <li className='py-3 first-letter:capitalize'>collaborate with designers to implement pixel-perfect UI designs while maintaining the overall user experience.</li>
                    <li className='py-3 first-letter:capitalize'>identify and fix frontend bugs, performance bottlenecks, and other issues as they arise.</li>
                    <li className='py-3 first-letter:capitalize'>conduct testing and quality assurance to ensure the UI is error-free and meets the project requirements.</li>
                    <li className='py-3 first-letter:capitalize'>stay up-to-date with the latest frontend development technologies, tools, and trends. Be willing to learn and grow in your role.</li>
                </ul>
            </div>
            <div className=''>
                <h2 className="text-xl font-bold py-5 capitalize">
                    uleval technologies limited 
                </h2>
                <h2 className="text-lg font-semibold py-2 capitalize">
                    junior frontend developer 
                </h2>
                <h2 className="text-md font-semibold py-2 capitalize flex flex-row">
                    <p>oct 2023 - till date</p> 
                    <p className="ml-10">full-time (remote)</p> 
                </h2>
                <ul className='text-md list-decimal'>
                    <li className='py-3 first-letter:capitalize'>develop and maintain user interfaces for web applications and websites using react js, tailwind css, javascript and other relevant technologies </li>
                    <li className='py-3 first-letter:capitalize'>ensure that web applications are responsive and work smoothly across different screen sizes and devices.</li>
                    <li className='py-3 first-letter:capitalize'>ensure compatibility with various web browsers and troubleshoot any rendering issues.</li>
                    <li className='py-3 first-letter:capitalize'>collaborate with designers to implement pixel-perfect UI designs while maintaining the overall user experience.</li>
                    <li className='py-3 first-letter:capitalize'>identify and fix frontend bugs, performance bottlenecks, and other issues as they arise.</li>
                    <li className='py-3 first-letter:capitalize'>conduct testing and quality assurance to ensure the UI is error-free and meets the project requirements.</li>
                    <li className='py-3 first-letter:capitalize'>stay up-to-date with the latest frontend development technologies, tools, and trends. Be willing to learn and grow in your role.</li>
                </ul>
            </div>
        </div>
        <div>
            <h1 className="text-2xl font-bold py-10 capitalize">certifications & transcripts</h1>
            <div>
                <div className='flex flex-row items-center gap-x-10 text-lg font-medium capitalize pb-3'>
                    <p>cetificate of completion in coding: <span>flip to tech</span></p>
                    <p>may 2023</p>
                </div>
                <div className='flex flex-row items-center gap-x-10 text-lg font-medium capitalize py-3'>
                    <p>cetificate of completion in business analysis: <span>udemy</span></p>
                    <p>nov 2022</p>
                </div>
                <div className='flex flex-row items-center gap-x-10 text-lg font-medium capitalize py-3'>
                    <p>HND accounting: <span>yaba college of tech</span></p>
                    <p>dec 2018</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
