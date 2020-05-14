function Footer () {
    return (
        <div class="footer-wrapper">
            <div class="row">
                <div class="col-10 navbar">
                    <ul class="nav justify-content-center">
                        <li class="nav-item">
                        <a class="nav-link active" href="#">Sobre nós</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" href="#">Fale conosco</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" href="#">alguma coisa</a>
                        </li>
                    </ul>
                </div>
                <div class="col-2 navbar">
                    <a class="nav-link active mx-auto" href="#"><ion-icon name="logo-facebook" size="large"></ion-icon></a>
                    <a class="nav-link active mx-auto" href="#"><ion-icon name="logo-instagram" size="large"></ion-icon></a>
                    <a class="nav-link active mx-auto" href="#"><ion-icon name="logo-youtube" size="large"></ion-icon></a>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<Footer />, document.getElementById('footer'));