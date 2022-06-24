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
              
              li a {
                display: block;
                color: white;
                text-align: center;
                padding: 14px 16px;
                text-decoration: none;
              }
              
              li a:hover:not(.active) {
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
            }
        `}</style>

        <div className="header">
            <ul>
                <li>
                    {/* <a className="active" href="#home">Home</a> */}
                    <a href="/">
                        Home
                    </a>
                </li>
                <li>
                    <a href="/list">
                        Avatar List
                    </a>
                </li>
                <li>
                    <a href="/hooks/horror/button">
                        Horor Page
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}