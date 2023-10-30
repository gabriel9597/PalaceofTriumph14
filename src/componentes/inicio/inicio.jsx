import React from "react";
import { Link } from "react-router-dom";
import "./inicio.css";
import Videobg from "../../Assets/BackgroundVideo1.mp4";
import Logo from "../../Assets/PalaceOfTriumphlogotransparente.png";

function Inicio() {
  return (
    <div id="universal">
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
        </div>

            <div className=' d-flex flex-column ' id='results-1'>
                <div className=" d-flex justify-center" id="results-2">
                    <span id="emp" className='col-10 col-sm-4 col-md-4 col-lg-4'>+10,000 Supported Companies</span>
 
                    <span id='paiat' className='col-10 col-sm-4 col-md-4 col-lg-4'>+14 Countries Served</span>

                    <span id='money' className='col-10 col-sm-4 col-md-4 col-lg-4'>+250 Million Managed</span>
                </div>

            </div>

            <hr className="featurette-divider" id='divider'/>
        
    </div>
  );
}

export default Inicio;
