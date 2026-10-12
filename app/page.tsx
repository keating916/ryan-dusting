import Image from "next/image";
import Footer from "./footer";

export default async function Home() {




  return (
    <div className="page">
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <h1>Industrial Dusting & High‑Surface Cleaning You Can Trust</h1>
          <p>
            Protect your facility, equipment, and workforce with precision dust
            removal designed for warehouses, manufacturing plants, and
            commercial buildings.
          </p>
          <div className="hero-actions">
            <button className="btn primary">Request a Quote</button>
            <button className="btn secondary">Schedule a Walkthrough</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-placeholder">
            Warehouse rafters & high‑reach dusting imagery
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section className="section">
        <h2>Why Industrial Dusting Matters</h2>
        <p>
          Dust buildup isn&apos;t just cosmetic—it impacts air quality, equipment
          performance, and safety. Our team specializes in safe, efficient, and
          high‑reach dust removal for industrial environments.
        </p>
        <div className="grid grid-3">
          <div className="card">
            <h3>Air Quality</h3>
            <p>Reduce airborne contaminants and improve working conditions.</p>
          </div>
          <div className="card">
            <h3>Equipment Performance</h3>
            <p>Keep machinery cleaner and running more efficiently.</p>
          </div>
          <div className="card">
            <h3>Safety & Compliance</h3>
            <p>Lower fire risk from combustible dust and support inspections.</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section alt">
        <h2>Service Capabilities</h2>
        <div className="grid grid-2">
          <ul className="list">
            <li>High‑reach dusting (up to 40–60 ft)</li>
            <li>Rafters, beams, piping, and overhead structures</li>
            <li>Equipment exterior dust removal</li>
            <li>Warehouse shelving & pallet rack dusting</li>
            <li>Vent, duct, and fan cleaning</li>
            <li>Pre‑inspection cleaning for audits or certifications</li>
          </ul>
          <div className="card process-card">
            <h3>Our Process</h3>
            <ol>
              <li>
                <strong>On‑Site Assessment</strong> – We walk your facility to
                identify dust levels and safety needs.
              </li>
              <li>
                <strong>Safety Setup</strong> – PPE, lift operation, and
                hazard mitigation.
              </li>
              <li>
                <strong>Industrial Dusting</strong> – High‑reach tools and HEPA
                vacuums for controlled dust removal.
              </li>
              <li>
                <strong>Final Inspection</strong> – Before/after photos and a
                summary you can share with auditors.
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section pricing">
        <h2>Transparent, Simple Pricing</h2>
        <p className="pricing-tagline">
          Industrial dusting priced by facility size for predictable budgeting.
        </p>

        <div className="pricing-main">
          <div className="pricing-rate">
            <span className="rate">$0.15</span>
            <span className="rate-unit">per square foot</span>
          </div>
          <div className="pricing-examples">
            <h3>Example Estimates</h3>
            <div className="grid grid-3">
              <div className="card">
                <p className="facility-size">10,000 sq ft</p>
                <p className="facility-price">$1,500</p>
              </div>
              <div className="card">
                <p className="facility-size">25,000 sq ft</p>
                <p className="facility-price">$3,750</p>
              </div>
              <div className="card">
                <p className="facility-size">50,000 sq ft</p>
                <p className="facility-price">$7,500</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-2 pricing-bottom">
          <div>
            <h3>Add‑Ons</h3>
            <ul className="list">
              <li>Equipment deep cleaning</li>
              <li>Floor‑to‑ceiling sanitation</li>
              <li>After‑hours service</li>
              <li>Monthly/quarterly maintenance plans</li>
            </ul>
          </div>
          <div className="pricing-cta">
            <p>
              Ready to see exact numbers for your facility? Share your square
              footage and layout, and we&apos;ll send a custom quote.
            </p>
            <button className="btn primary">Get a Custom Quote</button>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section alt">
        <h2>Industries We Serve</h2>
        <div className="grid grid-3">
          <div className="card">
            <h3>Warehouses & Distribution</h3>
            <p>High‑bay racking, rafters, and loading areas.</p>
          </div>
          <div className="card">
            <h3>Manufacturing Plants</h3>
            <p>Production lines, overhead structures, and equipment exteriors.</p>
          </div>
          <div className="card">
            <h3>Food Processing</h3>
            <p>Dust control to support hygiene and inspections.</p>
          </div>
          <div className="card">
            <h3>Commercial Buildings</h3>
            <p>Ceilings, vents, and large common areas.</p>
          </div>
          <div className="card">
            <h3>Auto & Industrial Garages</h3>
            <p>Overhead beams, lighting, and ventilation systems.</p>
          </div>
          <div className="card">
            <h3>Government & Municipal</h3>
            <p>Public works, storage facilities, and utility buildings.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="section">
        <h2>What Our Clients Say</h2>
        <div className="testimonial">
          <p>
            “Professional, fast, and extremely thorough. Our facility looked
            brand new after their team finished.”
          </p>
          <span className="testimonial-name">Operations Manager, Regional Warehouse</span>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};