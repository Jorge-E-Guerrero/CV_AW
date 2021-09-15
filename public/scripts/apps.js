"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
class NavButton extends React.Component{
    render (){
        return (

            
        );
    }
}
*/

var ConsoleChange = function (_React$Component) {
    _inherits(ConsoleChange, _React$Component);

    function ConsoleChange() {
        _classCallCheck(this, ConsoleChange);

        return _possibleConstructorReturn(this, (ConsoleChange.__proto__ || Object.getPrototypeOf(ConsoleChange)).apply(this, arguments));
    }

    _createClass(ConsoleChange, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "This is the change from the console using git"
                )
            );
        }
    }]);

    return ConsoleChange;
}(React.Component);

var Aficiones = function (_React$Component2) {
    _inherits(Aficiones, _React$Component2);

    function Aficiones() {
        _classCallCheck(this, Aficiones);

        return _possibleConstructorReturn(this, (Aficiones.__proto__ || Object.getPrototypeOf(Aficiones)).apply(this, arguments));
    }

    _createClass(Aficiones, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { "class": "col" },
                React.createElement(
                    "div",
                    { "class": "card shadow-sm" },
                    React.createElement("img", { "class": "imagenbootstrap", src: this.props.path }),
                    React.createElement(
                        "div",
                        { "class": "card-body" },
                        React.createElement(
                            "p",
                            { "class": "card-text" },
                            this.props.description
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            "div",
                            { "class": "d-flex justify-content-between align-items-center" },
                            React.createElement("div", { "class": "btn-group" })
                        )
                    )
                )
            );
        }
    }]);

    return Aficiones;
}(React.Component);

var InfoBox = function (_React$Component3) {
    _inherits(InfoBox, _React$Component3);

    function InfoBox() {
        _classCallCheck(this, InfoBox);

        return _possibleConstructorReturn(this, (InfoBox.__proto__ || Object.getPrototypeOf(InfoBox)).apply(this, arguments));
    }

    _createClass(InfoBox, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h4",
                    null,
                    this.props.title
                ),
                React.createElement(
                    "p",
                    { "class": "paside" },
                    this.props.top,
                    React.createElement("br", null),
                    this.props.mainInfo,
                    React.createElement("br", null),
                    this.props.secondaryInfo
                )
            );
        }
    }]);

    return InfoBox;
}(React.Component);

var Titles = function (_React$Component4) {
    _inherits(Titles, _React$Component4);

    function Titles() {
        _classCallCheck(this, Titles);

        return _possibleConstructorReturn(this, (Titles.__proto__ || Object.getPrototypeOf(Titles)).apply(this, arguments));
    }

    _createClass(Titles, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h3",
                    { "class": "h3aside" },
                    this.props.title
                )
            );
        }
    }]);

    return Titles;
}(React.Component);

var Aptitudes = function (_React$Component5) {
    _inherits(Aptitudes, _React$Component5);

    function Aptitudes() {
        _classCallCheck(this, Aptitudes);

        return _possibleConstructorReturn(this, (Aptitudes.__proto__ || Object.getPrototypeOf(Aptitudes)).apply(this, arguments));
    }

    _createClass(Aptitudes, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { width: "400px" },
                React.createElement(
                    "div",
                    { "class": "col" },
                    React.createElement(
                        "div",
                        { "class": "card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg", style: { backgroundImage: "url(" + this.props.url + ')', backgroundSize: 'cover' } },
                        React.createElement(
                            "div",
                            { "class": "d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1" },
                            React.createElement(
                                "h2",
                                { "class": "pt-5 mt-5 mb-4 display-6 lh-1 fw-bold" },
                                this.props.title
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Aptitudes;
}(React.Component);

var AsideAficiones = function (_React$Component6) {
    _inherits(AsideAficiones, _React$Component6);

    function AsideAficiones() {
        _classCallCheck(this, AsideAficiones);

        return _possibleConstructorReturn(this, (AsideAficiones.__proto__ || Object.getPrototypeOf(AsideAficiones)).apply(this, arguments));
    }

    _createClass(AsideAficiones, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { "class": "paside" },
                React.createElement(
                    "ul",
                    { "class": "aficiones" },
                    React.createElement(
                        "div",
                        { "class": "row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" },
                        React.createElement(Aficiones, { description: "Me gustan bastante los videojuegos", path: "/img/videojuego.png" }),
                        React.createElement(Aficiones, { description: "Tengo bastante curiosidad por la tecnolog\xEDa y como esta funciona", path: "/img/tecnologia.png" }),
                        React.createElement(Aficiones, { description: "Me gusta dibujar cosas relacionadas a juegos y series", path: "/img/dibujo.png" }),
                        React.createElement(Aficiones, { description: "Me encanta la nataci\xF3n y la he practicado desde que era peque\xF1o", path: "/img/natacion.png" }),
                        React.createElement(Aficiones, { description: "Me interesa el campo de la inteligencia y su aplicaci\xF3n en el campo de los videojuegos", path: "/img/ai.png" })
                    )
                )
            );
        }
    }]);

    return AsideAficiones;
}(React.Component);

var AsideAptitudes = function (_React$Component7) {
    _inherits(AsideAptitudes, _React$Component7);

    function AsideAptitudes() {
        _classCallCheck(this, AsideAptitudes);

        return _possibleConstructorReturn(this, (AsideAptitudes.__proto__ || Object.getPrototypeOf(AsideAptitudes)).apply(this, arguments));
    }

    _createClass(AsideAptitudes, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { "class": "row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5" },
                React.createElement(Aptitudes, { title: "Diciplinado", url: "https://neetwork.com/wp-content/uploads/2019/10/como-ser-disciplinado-1.jpg" }),
                React.createElement(Aptitudes, { title: "Responsable", url: "https://testdivertidos.net/media/test-qu-tan-responsable-eres/checklist.jpg" }),
                React.createElement(Aptitudes, { title: "Puntual", url: "https://cdn.bizneo.com/blog/wp-content/uploads/2020/10/Puntualidad-1024x575.png" }),
                React.createElement(Aptitudes, { title: "Creativo", url: "https://www.psicoactiva.com/wp-content/uploads/2019/11/creatividad.jpg" })
            );
        }
    }]);

    return AsideAptitudes;
}(React.Component);

var Aside = function (_React$Component8) {
    _inherits(Aside, _React$Component8);

    function Aside() {
        _classCallCheck(this, Aside);

        return _possibleConstructorReturn(this, (Aside.__proto__ || Object.getPrototypeOf(Aside)).apply(this, arguments));
    }

    _createClass(Aside, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "aside",
                    { "class": "cv" },
                    React.createElement(
                        "h1",
                        { "class": "h1aside" },
                        "Jorge Eduardo Guerrero Garcia"
                    ),
                    React.createElement(
                        "h2",
                        { "class": "h2aside" },
                        "Practicante"
                    ),
                    React.createElement(Titles, { title: "Educaci\xF3n" }),
                    React.createElement(InfoBox, { title: "Liceo Guatemala", top: "2007-2018", mainInfo: "Graduado de Bachiller en Ciencias y Letras", secondaryInfo: "Exelencia Acad\xE9mica (2016-208)" }),
                    React.createElement(InfoBox, { title: "Universidad de Istmo", top: "2019-2021", mainInfo: "Actualmente estudiando la carrera de Ingenier\xEDa en Sistemas y\r Ciencias de la Computaci\xF3n, iniciando el 6to semestre correspondiente\r al 3er a\xF1o de la carrera." }),
                    React.createElement(Titles, { title: "Actividades Extracurriculares" }),
                    React.createElement(InfoBox, { title: "Cementos Progreso - Voluntariado", top: "2014", mainInfo: "Rally solidario que consisti\xF3 en el remozamiento de fachadas en la comnunidad de El Sinaca" }),
                    React.createElement(InfoBox, { title: "Allied Global - Practicas laborales", top: "2020", mainInfo: "Practicas laborales que consistieron en participaci\xF3n dentro del equipo de QA" }),
                    React.createElement("br", null),
                    React.createElement(Titles, { title: "Aptitudes" }),
                    React.createElement(AsideAptitudes, null),
                    React.createElement(Titles, { title: "Aficiones" }),
                    React.createElement(AsideAficiones, null)
                )
            );
        }
    }]);

    return Aside;
}(React.Component);

var NavButton = function (_React$Component9) {
    _inherits(NavButton, _React$Component9);

    function NavButton() {
        _classCallCheck(this, NavButton);

        return _possibleConstructorReturn(this, (NavButton.__proto__ || Object.getPrototypeOf(NavButton)).apply(this, arguments));
    }

    _createClass(NavButton, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "button",
                { "class": "btn btn-toggle align-items-center rounded collapsed", "data-bs-toggle": "collapse", "data-bs-target": "#home-collapse", "aria-expanded": "true" },
                this.props.title
            );
        }
    }]);

    return NavButton;
}(React.Component);

var Mail = function (_React$Component10) {
    _inherits(Mail, _React$Component10);

    function Mail() {
        _classCallCheck(this, Mail);

        return _possibleConstructorReturn(this, (Mail.__proto__ || Object.getPrototypeOf(Mail)).apply(this, arguments));
    }

    _createClass(Mail, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "li",
                null,
                React.createElement(
                    "a",
                    { href: 'mailto:' + this.props.mail, "class": "link-dark rounded" },
                    this.props.mail
                )
            );
        }
    }]);

    return Mail;
}(React.Component);

var Contact = function (_React$Component11) {
    _inherits(Contact, _React$Component11);

    function Contact() {
        _classCallCheck(this, Contact);

        return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).apply(this, arguments));
    }

    _createClass(Contact, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "li",
                null,
                React.createElement(
                    "a",
                    { href: this.props.info, "class": "link-dark rounded" },
                    this.props.info
                )
            );
        }
    }]);

    return Contact;
}(React.Component);

var Navbar = function (_React$Component12) {
    _inherits(Navbar, _React$Component12);

    function Navbar() {
        _classCallCheck(this, Navbar);

        return _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).apply(this, arguments));
    }

    _createClass(Navbar, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { "class": "info" },
                React.createElement(
                    "div",
                    { "class": "flex-shrink-0 p-3 bg-white", style: { width: "280px", minHeight: '100%' } },
                    React.createElement(
                        "a",
                        { href: "/", "class": "d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom" },
                        React.createElement(
                            "svg",
                            { "class": "bi me-2", width: "30", height: "24" },
                            React.createElement("use", { xlinkHref: "#bootstrap" })
                        ),
                        React.createElement(
                            "span",
                            { "class": "fs-5 fw-semibold" },
                            "Contacto"
                        )
                    ),
                    React.createElement(
                        "ul",
                        { "class": "list-unstyled ps-0" },
                        React.createElement(
                            "li",
                            { "class": "mb-1" },
                            React.createElement(NavButton, { title: "Correo Electr\xF3nico" }),
                            React.createElement(
                                "div",
                                { "class": "collapse show", id: "home-collapse" },
                                React.createElement(
                                    "ul",
                                    { "class": "btn-toggle-nav list-unstyled fw-normal pb-1 small" },
                                    React.createElement(Mail, { mail: "guerrero191096@unis.edu.gt" }),
                                    React.createElement(Mail, { mail: "koki2337@gmail.com" })
                                )
                            )
                        ),
                        React.createElement(
                            "li",
                            { "class": "mb-1" },
                            React.createElement(NavButton, { title: "Tel\xE9fono" }),
                            React.createElement(
                                "div",
                                { "class": "collapse show", id: "home-collapse" },
                                React.createElement(
                                    "ul",
                                    { "class": "btn-toggle-nav list-unstyled fw-normal pb-1 small" },
                                    React.createElement(Contact, { info: "4965-0426" })
                                )
                            )
                        ),
                        React.createElement(
                            "li",
                            { "class": "mb-1" },
                            React.createElement(NavButton, { title: "Linkedin" }),
                            React.createElement(
                                "div",
                                { "class": "collapse show", id: "home-collapse" },
                                React.createElement(
                                    "ul",
                                    { "class": "btn-toggle-nav list-unstyled fw-normal pb-1 small" },
                                    React.createElement(Contact, { info: "https://www.linkedin.com/in/jorge-eduardo-guerrero-garcia-3b67701bb" })
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Navbar;
}(React.Component);

var WhiteHeading = function (_React$Component13) {
    _inherits(WhiteHeading, _React$Component13);

    function WhiteHeading() {
        _classCallCheck(this, WhiteHeading);

        return _possibleConstructorReturn(this, (WhiteHeading.__proto__ || Object.getPrototypeOf(WhiteHeading)).apply(this, arguments));
    }

    _createClass(WhiteHeading, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "li",
                null,
                React.createElement(
                    "a",
                    { href: "#", "class": "nav-link px-2 text-white" },
                    this.props.title
                )
            );
        }
    }]);

    return WhiteHeading;
}(React.Component);

var BlackHeading = function (_React$Component14) {
    _inherits(BlackHeading, _React$Component14);

    function BlackHeading() {
        _classCallCheck(this, BlackHeading);

        return _possibleConstructorReturn(this, (BlackHeading.__proto__ || Object.getPrototypeOf(BlackHeading)).apply(this, arguments));
    }

    _createClass(BlackHeading, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "li",
                null,
                React.createElement(
                    "a",
                    { href: "#", "class": "nav-link px-2 text-secondary" },
                    this.props.title
                )
            );
        }
    }]);

    return BlackHeading;
}(React.Component);

var Heading = function (_React$Component15) {
    _inherits(Heading, _React$Component15);

    function Heading() {
        _classCallCheck(this, Heading);

        return _possibleConstructorReturn(this, (Heading.__proto__ || Object.getPrototypeOf(Heading)).apply(this, arguments));
    }

    _createClass(Heading, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "header",
                    { "class": "p-3 bg-dark text-white" },
                    React.createElement(
                        "div",
                        { "class": "container" },
                        React.createElement(
                            "div",
                            { "class": "d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start" },
                            React.createElement(
                                "a",
                                { href: "/", "class": "d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none" },
                                React.createElement(
                                    "svg",
                                    { "class": "bi me-2", width: "40", height: "32", role: "img", "aria-label": "Bootstrap" },
                                    React.createElement("use", { xlinkHref: "#bootstrap" })
                                ),
                                React.createElement(
                                    "div",
                                    { "padding-left": "50px" },
                                    React.createElement(
                                        "h1",
                                        { "class": "fs-4", "text-align": "left" },
                                        this.props.name
                                    )
                                )
                            ),
                            React.createElement(
                                "ul",
                                { "class": "nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0" },
                                React.createElement(BlackHeading, { title: "Home" }),
                                React.createElement(WhiteHeading, { title: "Feature" }),
                                React.createElement(WhiteHeading, { title: "Pricing" }),
                                React.createElement(WhiteHeading, { title: "FAQs" }),
                                React.createElement(WhiteHeading, { title: "About" })
                            ),
                            React.createElement(
                                "form",
                                { "class": "col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" },
                                React.createElement("input", { type: "search", "class": "form-control form-control-dark", placeholder: "Search...", "aria-label": "Search" })
                            ),
                            React.createElement(
                                "div",
                                { "class": "text-end" },
                                React.createElement(
                                    "button",
                                    { type: "button", "class": "btn btn-outline-light me-2" },
                                    "Login"
                                ),
                                React.createElement(
                                    "button",
                                    { type: "button", "class": "btn btn-warning" },
                                    "Sign-up"
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Heading;
}(React.Component);

var Inicio = function (_React$Component16) {
    _inherits(Inicio, _React$Component16);

    function Inicio() {
        _classCallCheck(this, Inicio);

        return _possibleConstructorReturn(this, (Inicio.__proto__ || Object.getPrototypeOf(Inicio)).apply(this, arguments));
    }

    _createClass(Inicio, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(ConsoleChange, null),
                React.createElement(Heading, { name: "Curriculum Vitae" }),
                React.createElement(
                    "div",
                    { style: { Height: '100%' } },
                    React.createElement(
                        "div",
                        { style: { float: 'left' } },
                        React.createElement(Navbar, null)
                    ),
                    React.createElement(Aside, null)
                )
            );
        }
    }]);

    return Inicio;
}(React.Component);

var root = document.getElementById('root');

ReactDOM.render(React.createElement(Inicio, null), root);

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
