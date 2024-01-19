import React, { Fragment } from 'react';
// import About from './components/About';
import Section from '../../Section/Section';
import MeetingForm from '../../../components/Form/MeetingForm';


// import ContactUs from './components/ContactUs';
// import Alliances from './components/Alliances';

const AboutComponent = () => {
  return (
    <Section>
    {/* <Fade delay={300} direction="right"> */}
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3  gap-1">
      <div className="col-span-1 md:col-span-1 xl:col-span-2 flex flex-col justify-center mx-2 xl:ml-6">
        <h2 className="text-6xl xl:text-5xl text-center  text-primary font-bold">
            Sobre mí
          </h2>
        <div className='grid grid-cols-1 xl:grid-cols-2'>
        <div className="col-span-2 xl:col-span-1 flex flex-col ">
          <img
            src="https://res.cloudinary.com/dvdb33uyj/image/upload/v1691681682/Projects/unne/img/experienciaUsuarios/mujer.png"
            alt="about-img"
            className="rounded-full  h-[200px] w-[200px] mt-10 mx-14 md:mx-2 xl:w-[370px] xl:h-[370px] xl:mt-20 xl:mx-2"
          />
        </div>
        <div className="col-span-2 xl:col-span-1 ">
          <p className="text-lg xl:text-xl text-gray-700 mt-8 ml-0 xl:ml-1  xl:text-left">
          Como corredora de propiedades con más de 12 años de experiencia en el sector, he forjado una sólida trayectoria en la industria. Durante una década, trabajé en una reconocida empresa de corretaje, donde adquirí una amplia experiencia en arriendos, administración de propiedades y operaciones de compraventa.
            <br />
            <br />
            Hoy lidero mi propia empresa, donde brindo un servicio altamente personalizado a mis clientes. Esta atención dedicada ha sido fundamental para el establecimiento y mantenimiento de relaciones comerciales duraderas a lo largo de los años.
            <br />
            <br />
            Mi formación como ingeniero comercial respalda mi enfoque profesional, y he completado cursos especializados en corretaje de propiedades, tasación y revisión de títulos de propiedad. Este conjunto de habilidades me permite ofrecer a mis clientes orientación constante y asesoría experta en todas las etapas de sus transacciones inmobiliarias.
            <br />
            <br />
          </p>

          <p className="text-lg xl:text-xl text-gray-700 mt-8 ml-0 xl:ml-1 xl:text-left">
          Carmen Villarroel.
          </p>
          <p className="text-xl xl:text-xl text-gray-700 ml-0 xl:ml-1 xl:text-left">
          Corredora inmobiliaria CVV propiedades.
          </p>
        </div>
    
        </div>
       
  
      </div>
      <div className="col-span-1 md:col-span-1 xl:col-span-1 flex flex-col justify-center mx-2 xl:ml-24">
      <MeetingForm 
            title="Contacto corredor"
            subtitle="Enviar mensaje"
          />
      </div>

      {/* 
        <div className="pt-10">
          <h2 className="text-2xl xl:text-4xl font-bold text-black text-center sm:text-start">
            “Un largo camino
            <br />
            se inicia con un solo paso...”
          </h2>
        </div> */}
    </div>
    {/* </Fade>  */}
  </Section>
    // <Fragment>
    //   <About />
    // </Fragment>
  );
};

export default AboutComponent;
