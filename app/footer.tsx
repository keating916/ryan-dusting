import { cacheLife } from 'next/cache'
 
async function getCurrentYear() {
  'use cache'
  cacheLife('max')
  return new Date().getFullYear()
}
 
export default async function Footer({  }) {
    let yeardate = await getCurrentYear()
  return (
    <>
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <h3>Industrial Dusting Co.</h3>
            <p>Specialized high‑surface dust removal for industrial facilities.</p>
          </div>
          <div>
            <h4>Contact</h4>
            <p>Phone: (555) 123‑4567</p>
            <p>Email: info@industrialdustingco.com</p>
          © {yeardate} Industrial Dusting Co. All rights reserved.
            <div>
              <h4>Service Area</h4>
              <p>Greater Sacramento Metro </p>
            </div>
          
        </div>
        </div>
      </footer>
    </>
  )
}