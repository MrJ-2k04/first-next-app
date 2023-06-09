
import Image from "next/image";
import Link from "next/link"


function Navbar() {
    return (
        <nav>
            <div className="logo">
                <Image src="/logo.png" alt="logo" width={128} height={77} />
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/ninjas">Ninjas List</Link>
        </nav>
    );
}

export default Navbar;