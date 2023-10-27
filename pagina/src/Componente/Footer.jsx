import React from 'react'
export const Footer = () => {
  return (
    <>
       <div className="container" style={{marginBottom:20}}>

        <footer className="text-center text-lg-start bg-light text-muted">
            <section>
                <div className="row mt-3">
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">Productos</h6>
                        <p><a href="#!" className="text-reset">Cuerdas</a></p>
                        <p><a href="#!" className="text-reset">Bajos</a></p>
                        <p><a href="#!" className="text-reset">Residentes</a></p>
                    </div>

                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">Servicios</h6>
                        <p><a href="#!" className="text-reset">Curso </a></p>
                        <p><a href="#!" className="text-reset">Reparaciones</a></p>
                        <p><a href="#!" className="text-reset">Pintura</a></p>
                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">Contáctenos</h6>
                        <p><i className="fas fa-home me-3"></i> Col. Republica de Venexuela, 2519</p>
                        <p><i className="fas fa-envelope me-3"></i>bajimos2023@gmail.com</p>
                        <p><i className="fas fa-phone me-3"></i> + 504 2227-40-41</p>
                    </div>                    
                </div>
            </section>

            <div className="text-center p-2">
                © Copyright:
                <a className="text-reset fw-bold" href="https://getbootstrap.com/">ir a bajistas</a>
            </div>
        </footer>

    </div>
    </>
  )
}