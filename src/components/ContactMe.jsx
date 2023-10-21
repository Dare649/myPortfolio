import call from "../assets/images/calllogo.png";
import email from "../assets/images/emaillogo.png";
import linkedin from "../assets/images/linkedinlogo.png";
import gitHub from "../assets/images/github.png";

const ContactMe = () => {
  return (
    <section id="contactMe" className="pt-64 pb-40"> 
        <div >
            <h1 className="capitalize text-4xl font-bold text-center py-10">contact & social</h1>
            <div className="flex flex-row item-center justify-between py-10">
                <a href="tel:+234 810 0000 1427" target='_blank'>
                    <img src={call} alt="" 
                        className="w-20 h-20 rounded-full"
                    />
                </a>
                <a href="https://www.linkedin.com/in/damilare-ajayi-00105214b/" target='_blank'>
                    <img src={linkedin} alt="" 
                        className="w-20 h-20 rounded-full"
                    />
                </a>
                <a href="damilareajayi01@gmail.com" target='_blank'>
                    <img src={email} alt="" 
                        className="w-20 h-20 rounded-full"
                    />
                </a>
                <a href="https://github.com/Dare649?tab=repositories" target='_blank'>
                    <img src={gitHub} alt="" 
                        className="w-20 h-20 rounded-full"
                    />
                </a>
            </div>
        </div>
    </section>
  )
}

export default ContactMe
