import { Button } from 'flowbite-react';
import aryan from './aryan.jpg'
export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to learn more about Aryan?
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout the link to go Aryan's Linkedin Account
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://www.linkedin.com/in/aryan-singh-909121152/" target='_blank' rel='noopener noreferrer'>
                  LINKEDIN
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src={aryan} style={{height:'400px',width:'300px'}}/>
        </div>
    </div>
  )
}