import React from 'react'
import { resourcesLinks,platformLinks,communityLinks } from '../constants'
const Footer = () => {
  return (
    <footer className='mt-20 border-t py-10 border-neutral-700'>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
            <div>
                <h3 className='text-md font-semibold mb-4'>
                    Resources
                </h3>
                <ul className='space-y-2'>
                    {resourcesLinks.map((link,index)=>(
                        <li key={index}>
                            <a className='text-neutral-400 hover:text-white' href={link.href}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className='text-md font-semibold mb-4'>
                    Platofrm
                </h3>
                <ul className='space-y-2'>
                    {platformLinks.map((link,index)=>(
                        <li key={index}>
                            <a className='text-neutral-400 hover:text-white' href={link.href}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className='text-md font-semibold mb-4'>
                    Community
                </h3>
                <ul className='space-y-2'>
                    {communityLinks.map((link,index)=>(
                        <li key={index}>
                            <a className='text-neutral-400 hover:text-white' href={link.href}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
            <h4 className="text-lg font-semibold text-white">Follow Us</h4>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                className="text-gray-300 hover:text-neutral-400 transition-colors"
              >
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                className="text-gray-300 hover:text-neutral-400 transition-colors"
              >
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                className="text-gray-300 hover:text-neutral-400 transition-colors"
              >
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                className="text-gray-300 hover:text-neutral-400 transition-colors"
              >
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">
            thrustMIT &copy; 2025 | All Rights Reserved.
          </p>
        </div>

    </footer>
  )
}

export default Footer
