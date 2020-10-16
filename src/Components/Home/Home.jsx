import React from 'react'
import Pdf from "react-to-pdf"
const logo = require("./../IMG/LOGO1.png")
const logx = require("./../IMG/LOGO2.jpg")


const Home = () => {
    const ref = React.createRef()
    const options = {
       
            orientation: 'p',
            unit: 'mm',
            format: 'a4',
            putOnlyUsedFonts:true,
            floatPrecision: 16 // or "smart", default is 16
           
    };
    return (
        <>
            <div className='col-sm-8 text-left mt-3'>
                <Pdf targetRef={ref} filename='Post.pdf'>
                    {({toPdf}) => <button onClick={toPdf} options={options} className='btn btn-secondary btn-block'>Export to pdf</button>}
          
                </Pdf>
            </div>
            <div className="Post" ref={ref}>
            <div className='container row  col-sm-8 mt-2 ml-1'>

                <div className='card card-body'>
                    <div className='row text-center'>
                        <div className='col-sm-3'>
                            <img src={logo} width='75' height='75' className='img-responsive'></img>
                        </div>
                        <div className='col-sm-6'>
                            <h3>Exportar a PDF Titulo CACHI GATO</h3>
                        </div>
                        <div className='col-sm-3'>
                            <img src={logx} width='75' height='75' className='img-responsive'></img>
                        </div>
                        <div className='col-sm-12'>
                            <hr />
                            <label>Descripcion</label>
                            <p className='parrafo'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
                                it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                                It was popularised in the 1960s with the release of Letraset 
                                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of 
                                Lorem Ipsum
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
                                it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                                It was popularised in the 1960s with the release of Letraset 
                                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
                                it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                                It was popularised in the 1960s with the release of Letraset 
                                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
                            </p>
                            <hr/>
                        </div>
                        <div className='col-sm-6'>
                            <label>Observaciones</label>
                            <p className='parrafoX'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
                                it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                                It was popularised in the 1960s with the release of Letraset 
                                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                            </p>
                        </div>
                        <div className='col-sm-3'>
                            <label>Firmas</label>
                            <br></br>
                            <hr/>
                            <hr/>
                            <hr/>
                            <hr/>
                            <hr/>
                            <hr/>
                            <hr/>
                            <hr/>
                        </div>
                        <div className='col-sm-3'>
                        <label>Firmas</label>
                            <br></br>
                            <hr/>
                            <hr/>
                            <hr/>
                            <hr/>
                            <hr/>
                            <hr/>
                            <hr/>
                            <hr/>
                        </div>
                        <div className='col-sm-12'><hr/></div>
                        
                    </div>

                </div>
            </div>
            </div>
        </>
    )
}
export default Home