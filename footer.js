function Footer() {
    return React.createElement(
        "div",
        { "class": "footer-wrapper" },
        React.createElement(
            "div",
            { "class": "row" },
            React.createElement(
                "div",
                { "class": "col-10 navbar" },
                React.createElement(
                    "ul",
                    { "class": "nav justify-content-center" },
                    React.createElement(
                        "li",
                        { "class": "nav-item" },
                        React.createElement(
                            "a",
                            { "class": "nav-link active", href: "#" },
                            "Sobre n\xF3s"
                        )
                    ),
                    React.createElement(
                        "li",
                        { "class": "nav-item" },
                        React.createElement(
                            "a",
                            { "class": "nav-link active", href: "#" },
                            "Fale conosco"
                        )
                    ),
                    React.createElement(
                        "li",
                        { "class": "nav-item" },
                        React.createElement(
                            "a",
                            { "class": "nav-link active", href: "#" },
                            "alguma coisa"
                        )
                    )
                )
            ),
            React.createElement(
                "div",
                { "class": "col-2 navbar" },
                React.createElement(
                    "a",
                    { "class": "nav-link active mx-auto", href: "#" },
                    React.createElement("ion-icon", { name: "logo-facebook", size: "large" })
                ),
                React.createElement(
                    "a",
                    { "class": "nav-link active mx-auto", href: "#" },
                    React.createElement("ion-icon", { name: "logo-instagram", size: "large" })
                ),
                React.createElement(
                    "a",
                    { "class": "nav-link active mx-auto", href: "#" },
                    React.createElement("ion-icon", { name: "logo-youtube", size: "large" })
                )
            )
        )
    );
}

ReactDOM.render(React.createElement(Footer, null), document.getElementById('footer'));