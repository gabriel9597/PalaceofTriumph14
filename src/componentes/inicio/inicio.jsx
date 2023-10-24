import React from "react";
import { Link } from "react-router-dom";
import "./inicio.css";
import Videobg from "../../Assets/BackgroundVideo1.mp4";
import Logo from "../../Assets/PalaceOfTriumphlogotransparente.png";
import imagem1 from "../../Assets/image1.jpeg";
import imagem2 from "../../Assets/image2.jpeg";
import imagem3 from "../../Assets/image3.jpeg";

function Inicio() {
  return (
    <div className="cover-container d-flex w-100 h-100 mx-auto flex-column" id='hero'>
            <header className="mb-auto" id='header'>
                <div>
                    
                    <nav className="navbar navbar-expand-lg navbar-light  bg-transparent">
                    
                       <img src={Logo} width="142" id='Logo' alt="logo" className=''/>
                    

                    <button className='navbar-toggler ms-auto' data-bs-toggle="collapse" data-bs-target="#nav-principal" aria-expanded="false" aria-controls='nav-principal'>
                        <i className='fa-solid fa-bars text-white'></i>
                    </button>
                    
                    <div className='collapse navbar-collapse' id='nav-principal'>
                        <ul className='navbar-nav ms-auto bg-transparent' id="menu">
                            <li className="nav-item bg-transparent">
                                <Link to="" id='Botoes-Menu' className="nav-link active bg-transparent">Inicio</Link>
                            </li>

                           


                            <li className="nav-item">
                                <Link to="" id='Botoes-Menu' className="nav-link">Serviços</Link>
                            </li>

                           

                            <li className="nav-item">
                                <Link to="" id='Botoes-Menu' className="nav-link">Contatos</Link>
                            </li>

                        </ul>
                    </div>
                       
                    </nav>
                </div>
            </header>


            <main>
                <video src={Videobg} id='video-bg' autoPlay loop muted />
            </main>

            <div className=' d-flex flex-column ' id='resultados-1'>
                <div className=" d-flex justify-center" id="resultados-2">
                    <span id="emp" className='col-10 col-sm-4 col-md-6 col-lg-4'>+10.000 Empresas Auxiliadas</span>
                                  

               
                    <span id='paiat' className='col-10 col-sm-4 col-md-6 col-lg-4'>+14 Paises Atuados</span>

                
                    <span id='money' className='col-10 col-sm-4 col-md-6 col-lg-4'>+250 Milhões Gerenciados</span>
                </div>

            </div>

            <hr className="featurette-divider" id='divider'/>

            <div>
            <div className="container col-xxl-8 py-5" id='solucoes'>
              <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-md-10 col-lg-6">
                  <img src={imagem1} id='imagem1' className="d-block mx-lg-auto img-fluid" alt="imagem1" width="700" height="500" loading="lazy" />
                </div>
                

                <div className="col-lg-6" >
                  <h1 className="display-5 fw-bold py-1">Responsive left-aligned hero with image</h1>
                  <p className="lead" id="p1">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <button type="button" className="btn btn-lg px-4 me-md-2" id='botaoS-1'>Explore!</button>
                  </div>
                </div>
                <div id='right-border-image' className="col-10 col-sm-8 col-md-10 col-lg-6"></div>
              </div>
            </div>

            <hr className="featurette-divider" id='divider1'/>

            <div className="container col-xxl-8 py-5" id='solucoesM'>
              <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-lg-6">
                  <h1 className="display-5 fw-bold py-1">Responsive left-aligned hero with image</h1>
                  <p className="lead" id="p2">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button type="button" className="btn btn-lg px-4 me-md-2" id='botaoS-2'>Explore!</button>
                  </div>
                </div>

                <div className="col-10 col-sm-8 col-md-10 col-lg-6" id="i2">
                  <img src={imagem2} id='imagem2' className="d-block mx-lg-auto img-fluid" alt="imagem2" width="700" height="500" loading="lazy"/>
                </div>

                <div className="d-grid gap-2 d-md-block d-lg-none justify-content-md-end">
                    <button type="button" className="btn btn-lg px-4" id='botaoS-4'>Explore!</button>
                </div>

              </div>
              <div id='left-border-image' className="col-10 col-sm-8 col-md-10 col-lg-6"></div>
            </div>

            <hr className="featurette-divider" id='divider2'/>

            <div className="container col-xxl-8  py-5" id='solucoes'>
              <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-md-10 col-lg-6">
                  <img src={imagem3} id='imagem3' className="d-block mx-lg-auto img-fluid" alt="imagem3" width="700" height="500" loading="lazy"/>
                  
                </div>


                <div className="col-lg-6">
                  <h1 className="display-5 fw-bold py-1">Responsive left-aligned hero with image</h1>
                  <p className="lead" id="p3">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <button type="button" className="btn btn-lg px-4 me-md-2" id='botaoS-3'>Explore!</button>
                  </div>
                </div>
                <div id='right-border-image2' className="col-10 col-sm-8 col-md-10 col-lg-6"></div>
              </div>
            </div>
            </div>

            <hr className="featurette-divider" id='divider'/>
    </div>
  );
}

export default Inicio;
