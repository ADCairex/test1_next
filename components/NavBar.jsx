/*  ./components/Navbar.jsx     */
import Link from 'next/link';
import { useEffect, useState } from 'react';



export const Navbar = () => {
  const [checked, setChecked] = useState(false);

  useEffect( async () => {
      if (checked == true) {
        document.body.classList.add('bg-gray-400');
      } else {
        document.body.classList.remove('bg-gray-400');
      }
  }, [checked]);
  return (
    <>
      <nav className='flex items-center flex-wrap bg-green-300 p-3 '>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
            <svg
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
              className='fill-current text-white h-8 w-8 mr-2'
            >
              <path d='M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z' />
            </svg>
            <span className='text-xl text-white font-bold uppercase tracking-wide mr-4'>
                ejemplo de next con tailwind
            </span>
          </a>
        </Link>
        <Link href='/use-state'>
            <a className='inline-flex items-center p-2 ml-4 '>
                <span className='text-xs text-white font-bold uppercase tracking-wide'>
                    use state
                </span>
            </a>
        </Link>
        <Link href='/use-effect'>
            <a className='inline-flex items-center p-2 ml-4 '>
                <span className='text-xs text-white font-bold uppercase tracking-wide'>
                    use effect
                </span>
            </a>
        </Link>
        <Link href='/form'>
            <a className='inline-flex items-center p-2 ml-4 '>
                <span className='text-xs text-white font-bold uppercase tracking-wide'>
                    form
                </span>
            </a>
        </Link>
        <Link href='/event-listener'>
            <a className='inline-flex items-center p-2 ml-4 '>
                <span className='text-xs text-white font-bold uppercase tracking-wide'>
                    event listener
                </span>
            </a>
        </Link>
        <Link href='/form-mongoos'>
            <a className='inline-flex items-center p-2 ml-4 '>
                <span className='text-xs text-white font-bold uppercase tracking-wide'>
                    form mongoos
                </span>
            </a>
        </Link>
        <Link href='/use-memo'>
            <a className='inline-flex items-center p-2 ml-4 '>
                <span className='text-xs text-white font-bold uppercase tracking-wide'>
                    use memo
                </span>
            </a>
        </Link>
        <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in float-right ml-auto">
            <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" onChange={(e)=>setChecked(e.target.checked)}/>
            <label for="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
        </div>
        <label for="toggle" className="text-xs text-gray-700">Dark mode</label>
      </nav>
    </>
  );
};