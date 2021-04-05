
function Header() {
   return (
      <nav style={{ background: '#a87d61' }}>
         <div className="container">
            <div className="nav-wrapper">
               <a href="/" className="brand-logo">Logo</a>
               <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/contacts">Contacts</a></li>
               </ul>
            </div>
         </div>
      </nav>
   );
}

export { Header };
