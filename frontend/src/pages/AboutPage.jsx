/* eslint-disable no-unused-vars */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroTeaser from '../components/HeroTeaser';
import HeroImage from '../assets/heroImage.jpg';
import AboutUsImage from '../assets/about.jpg';
import ProductsImage from '../assets/products.jpg';
import SupportImage from '../assets/support.png';
import GoalImage from '../assets/goal.jpg';
import { FaCheckCircle, FaGraduationCap } from 'react-icons/fa';
const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>LUX SKIN APARATI</title>
        <meta
          name="description"
          content="Learn more about our site and discover our amazing products and services."
        />
        {/*
          Testing Purposes Only:
          - 'http://localhost:5000' is allowed in connect-src for local API calls.
          - 'data:' is allowed in img-src to support inline images.
          In production, remove 'http://localhost:5000' from connect-src and adjust
          test-specific sources (like data:) as needed.
        */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; connect-src 'self' http://localhost:5000; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://fastly.picsum.photos;"
        />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta name="Referrer-Policy" content="no-referrer" />
      </Helmet>
      <HeroTeaser
        image={HeroImage}
        heading="Dobrodosli"
        subheading="Otrkijte nase sjajne proizvode"
      />
      {/* About Section */}
      <section className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2>O nama</h2>
            <p>
              Mi smo mlada i dinamična kompanija, osnovana u Maju 2024. godine, koja se bavi prodajom kozmetičkih aparata vrhunskog kvaliteta.
              Iza nas stoji već više od 30 uspešno realizovanih prodaja i mnogo zadovoljnih kupaca, koji su prepoznali našu posvećenost kvalitetu i stručnosti.
            </p>
          </div>
          <div className="col-md-6">
            <img src={AboutUsImage} alt="O nama" className="img-fluid rounded" />
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="container py-5 bg-light">
        <div className="row align-items-center">
          <div className="col-md-6 order-md-2">
            <h2>Naša ponuda</h2>
            <p>
              Naša ponuda uključuje najnovije aparate za profesionalnu upotrebu, koji će unaprediti rad i podići nivo usluga koje pružate svojim klijentima.
            </p>
            <ul className="list-unstyled">
              <li>
                <FaCheckCircle className="text-success me-2" /> Vrhunski kvalitet aparata
              </li>
              <li>
                <FaCheckCircle className="text-success me-2" /> Inovativna tehnologija
              </li>
              <li>
                <FaCheckCircle className="text-success me-2" /> Pouzdanost u radu
              </li>
            </ul>
          </div>
          <div className="col-md-6 order-md-1">
            <img src={ProductsImage} alt="Naša ponuda" className="img-fluid rounded" />
          </div>
        </div>
      </section>

      {/* Support & Training Section */}
      <section className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2>Podrška i edukacija</h2>
            <p>
              Pored prodaje, pružamo i edukacije za upotrebu naših aparata, jer želimo da svaki naš kupac bude potpuno siguran i samouveren u korišćenju tehnologije.
            </p>
            <div className="d-flex align-items-center">
              <FaGraduationCap className="fs-1 text-primary me-3" />
              <p className="mb-0">Naš tim je uvek dostupan za dodatna pitanja i podršku.</p>
            </div>
          </div>
          <div className="col-md-6">
            <img src={SupportImage} alt="Podrška i edukacija" className="img-fluid rounded" />
          </div>
        </div>
      </section>

      {/* Goal Section */}
      <section className="container py-5 bg-light">
        <div className="row align-items-center">
          <div className="col-md-6 order-md-2">
            <h2>Naš cilj</h2>
            <p>
              Bilo da ste salon ili privatni korisnik, naš cilj je da vas opremimo najboljim alatima i znanjem kako biste postigli najbolje rezultate.
              Vaš uspeh je naš prioritet, a mi ćemo učiniti sve da vam olakšamo put do njega.
            </p>
          </div>
          <div className="col-md-6 order-md-1">
            <img src={GoalImage} alt="Naš cilj" className="img-fluid rounded" />
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="container py-5 text-center">
        <h3>Hvala što ste odabrali nas!</h3>
      </section>
    </>
  );
};

export default AboutPage;
