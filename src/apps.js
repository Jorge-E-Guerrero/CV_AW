/*
class NavButton extends React.Component{
    render (){
        return (

            
        );
    }
}
*/

class ConsoleChange extends React.Component{
    render (){
        return (

            <div >
                <h1>This is the change from branch Console</h1>
            </div>
        );
    }
}


class Aficiones extends React.Component{
    render (){
        return (
            <div class="col" >
                  <div class="card shadow-sm">
                    <img class="imagenbootstrap" src={this.props.path} />
                    <div class="card-body">
                      <p class="card-text">{this.props.description}</p><br/>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            
        );
    }
}



class InfoBox extends React.Component{
    render (){
        return (
            <div>
            <h4>
                {this.props.title}
            </h4>
            <p class="paside">
                {this.props.top}<br/>
                {this.props.mainInfo}<br/>
                {this.props.secondaryInfo}
            </p>
            </div>
            
        );
    }
}



class Titles extends React.Component{
    render (){
        return (
            <div>
            <h3 class="h3aside">
                {this.props.title}
            </h3>
            </div>
            
        );
    }
}


class Aptitudes extends React.Component{
    render (){
        return (
        <div width="400px">
            <div class="col">
                <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{backgroundImage: "url("+ this.props.url +')', backgroundSize: 'cover'}}>
                  <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                    <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{this.props.title}</h2>
                  </div>
                </div>
            </div>
        </div>
            
        );
    }
}


class AsideAficiones extends React.Component{
    render (){
        return (
        <div class="paside">
            <ul class="aficiones">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <Aficiones description="Me gustan bastante los videojuegos" path="/img/videojuego.png"/>
                    <Aficiones description="Tengo bastante curiosidad por la tecnología y como esta funciona" path="/img/tecnologia.png"/>
                    <Aficiones description="Me gusta dibujar cosas relacionadas a juegos y series" path="/img/dibujo.png"/>
                    <Aficiones description="Me encanta la natación y la he practicado desde que era pequeño" path="/img/natacion.png"/>
                    <Aficiones description="Me interesa el campo de la inteligencia y su aplicación en el campo de los videojuegos" path="/img/ai.png"/>
                  </div>
            </ul>
        </div>
        );
    }
}


class AsideAptitudes extends React.Component{
    render (){
        return (
            
        <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
            <Aptitudes title="Diciplinado" url="https://neetwork.com/wp-content/uploads/2019/10/como-ser-disciplinado-1.jpg"/>
            <Aptitudes title="Responsable" url="https://testdivertidos.net/media/test-qu-tan-responsable-eres/checklist.jpg"/>
            <Aptitudes title="Puntual" url="https://cdn.bizneo.com/blog/wp-content/uploads/2020/10/Puntualidad-1024x575.png"/>
            <Aptitudes title="Creativo" url="https://www.psicoactiva.com/wp-content/uploads/2019/11/creatividad.jpg"/>
        </div>
            
        );
    }
}




class Aside extends React.Component{
    render (){
        return (
            
            <div >
            <aside class="cv">
                <h1 class="h1aside">
                    Jorge Eduardo Guerrero Garcia
                </h1>
                <h2 class="h2aside">
                   Practicante 
                </h2>
                <Titles title="Educación" />
                <InfoBox title="Liceo Guatemala" top="2007-2018" mainInfo="Graduado de Bachiller en Ciencias y Letras" secondaryInfo="Exelencia Académica (2016-208)" />
                <InfoBox title="Universidad de Istmo" top="2019-2021" mainInfo="Actualmente estudiando la carrera de Ingeniería en Sistemas y
                Ciencias de la Computación, iniciando el 6to semestre correspondiente
                al 3er año de la carrera."  />

            
                <Titles title="Actividades Extracurriculares" />
                <InfoBox title="Cementos Progreso - Voluntariado" top="2014" mainInfo="Rally solidario que consistió en el remozamiento de fachadas en la comnunidad de El Sinaca" />
                <InfoBox title="Allied Global - Practicas laborales" top="2020" mainInfo="Practicas laborales que consistieron en participación dentro del equipo de QA" />
                <br/>
                <Titles title="Aptitudes" />
                <AsideAptitudes />
                <Titles title="Aficiones" />
                <AsideAficiones />
                
            </aside>
        </div>


            
        );
    }
}



class NavButton extends React.Component{
    render (){
        return (
            
            <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                {this.props.title}
            </button>

            
        );
    }
}




class Mail extends React.Component{
    render (){
        return (
            
            <li><a href={'mailto:' + this.props.mail} class="link-dark rounded">{this.props.mail}</a></li>

            
        );
    }
}


class Contact extends React.Component{
    render (){
        return (
            
            <li><a href={this.props.info} class="link-dark rounded">{this.props.info}</a></li>
            
        );
    }
}




class Navbar extends React.Component {
    render (){
        return (
            
        <div class="info" >
            <div class="flex-shrink-0 p-3 bg-white" style={{width:"280px", minHeight: '100%'}} >
              <a href="/" class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">    
                  <svg class="bi me-2" width="30" height="24"><use xlinkHref="#bootstrap"></use></svg>
                  <span class="fs-5 fw-semibold">Contacto</span>
                </a>
                <ul class="list-unstyled ps-0">
                  <li class="mb-1">
                    <NavButton title="Correo Electrónico" />
                    <div class="collapse show" id="home-collapse">
                      <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                        <Mail mail="guerrero191096@unis.edu.gt" />
                        <Mail mail="koki2337@gmail.com" />
                      </ul>
                    </div>
                  </li>
                  <li class="mb-1">
                    <NavButton title="Teléfono" />
                    <div class="collapse show" id="home-collapse">
                      <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                        <Contact info="4965-0426" />
                      </ul>
                    </div>
                  </li>
                  <li class="mb-1">
                    <NavButton title="Linkedin" />
                    <div class="collapse show" id="home-collapse">
                      <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                        <Contact info="https://www.linkedin.com/in/jorge-eduardo-guerrero-garcia-3b67701bb" />
                        </ul>
                    </div>
                  </li>
                  
                </ul>
            </div>
        </div>
            
        );
    }
}


class WhiteHeading extends React.Component {
    render (){
        return (
            
            <li><a href="#" class="nav-link px-2 text-white">{this.props.title}</a></li>
            
        );
    }
}



class BlackHeading extends React.Component {
    render (){
        return (

            <li><a href="#" class="nav-link px-2 text-secondary">{this.props.title}</a></li>
            
        );
    }
}


class Heading extends React.Component {
    render(){
        return (
            <div >
                <header class="p-3 bg-dark text-white">
                    <div class="container">
                    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"></use></svg>
                        
                        <div padding-left="50px">
                            <h1 class="fs-4" text-align="left">{this.props.name}</h1>
                        </div>
                        
                        </a>
                        
            
                        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <BlackHeading title="Home" />
                        <WhiteHeading title="Feature" />
                        <WhiteHeading title="Pricing" />
                        <WhiteHeading title="FAQs" />
                        <WhiteHeading title="About" />
                        </ul>
            
                        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        <input type="search" class="form-control form-control-dark" placeholder="Search..." aria-label="Search"/>
                        </form>
            
                        <div class="text-end">
                        <button type="button" class="btn btn-outline-light me-2">Login</button>
                        <button type="button" class="btn btn-warning">Sign-up</button>
                        </div>
                    </div>
                    </div>
                </header>
          
            </div>
            
        );
    }
}

class Inicio extends React.Component {
    render(){
        return (
            <div>
                 <ConsoleChange />
                 <Heading name="Curriculum Vitae" />
                 <div style={{Height: '100%'}}>
                 <div style={{float: 'left'}}>
                 <Navbar />
                 </div>
                 
                 <Aside />
                 </div>
                 

                
            </div>
            
        );

    }
}




var root = document.getElementById('root');

ReactDOM.render(<Inicio />, root);





/*



var name = {
    object: 'values'
}

    {name.object}



class name extends React.Component {
    constuctor(value){
        this.element = value;
    }
}

{This.props.constuctor.element}


function (parameters){
    This.setState({element:value});
}




class name extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      element: "value",

    };
  }
}


      {This.state.element}



{backgroundImage: "url('url')", backgroundSize : 'value'}


functionName = () => {
    this.setState({element: "value"});
}



const style = {
    backgroundImage: "url('url')" ,
    backgroundSize: 'value'
};

<div class="" id={this.props.id}>
background image in scss




styles="background-image:('url')"  ->    style={{backgroundImage: "url('url')"}}

<img >  ->  <img />


<button type="" onclick="{This.function}" />

<input type="" />



xlink:href -> xlinkHref
    
 */
