import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
        <style jsx>{`
          ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #333;
          }
          
          li {
            float: left;
          }
          
          .menu {
            display: block;
            color: white;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
          }
              
          a:hover:not(.active) {
            background-color: #111;
          }
              
          .active {
            background-color: #04AA6D;
          }
            
          .header{
              position: fixed;
              left: 0;
              top: 0;
              width: 100%;
              z-index: 100;
          }
        `}</style>

        <div className="header">
            <ul>
                <li className="menu">
                    <Link href="/">
                        Home
                    </Link>
                </li>
                {/* <li className="menu">
                    <Link href="/list">
                        Avatar List
                    </Link>
                </li>
                <li className="menu">
                    <Link href="/hooks/horror/button">
                        Horor Page
                    </Link>
                </li> */}

                <li className="menu"><Link href="/csr">CSR</Link></li>
                <li className="menu"><Link href="/ssr">SSR</Link></li>
                <li className="menu"><Link href="/isg">ISG</Link></li>
                <li className="menu"><Link href="/ssg">SSG</Link></li>
                <li className="menu"><Link href="/pgsql">PGSQL</Link></li>
            </ul>
        </div>
    </div>
  )
}