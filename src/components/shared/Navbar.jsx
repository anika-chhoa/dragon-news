import Link from 'next/link';
import avatarImg from '../../assets/user.png'
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className='container mx-auto flex justify-between my-8 items-center'>
            <div></div>
            <ul className='flex gap-4'>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/career">Career</Link>
                </li>
            </ul>
            <div className='flex gap-4'>
                <Image src={avatarImg} alt="avatarImg" width={50} height={50}/>
                <button>
                    <Link href="/login" className='btn bg-black text-white font-bold'>Login</Link>
                </button>
            </div>
        </div>
    );
};

export default Navbar;