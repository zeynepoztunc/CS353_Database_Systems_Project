import {  useNavigate } from 'react-router-dom';

function PastTransactionsPage() {
    const navigate = useNavigate();

    const goBackToProfile = (event) => {
        event.preventDefault();
        navigate('/ProfilePage');
    };
  return (
    <container>
    <head>
    <title>Product - Brand</title>
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css"></link>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i,600,600i&amp;display=swap"></link>
    <link rel="stylesheet" href="assets/fonts/fontawesome-all.min.css"></link>
    <link rel="stylesheet" href="assets/css/baguetteBox.min.css"></link>
    <link rel="stylesheet" href="assets/css/Banner-Heading-Image-images.css"></link>
    <link rel="stylesheet" href="assets/css/vanilla-zoom.min.css"></link>
  </head>
  <body>
  <nav class="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
        <div class="container">
            <p class="fs-3">WeRent</p><a class="navbar-brand logo" href="#"></a><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-1"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navcol-1">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="index.html">Dashboard</a></li>
                    <li class="nav-item"><a class="nav-link" href="pricing.html">Map</a></li>
                    <li class="nav-item"><a class="nav-link" href="profile.html"><i class="fas fa-shopping-basket text-dark" style={{fontSize: "22px"}}></i></a></li>
                    <li class="nav-item"><a class="nav-link" href="contact-us.html"><i class="fas fa-user text-dark" style={{fontSize: "22px"}}></i></a></li>
                    <li class="nav-item"><a class="nav-link" href="#">LOG OUT</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <main class="page blog-post-list">
        <section class="clean-block clean-blog-list dark">
        <div class="container" style={{marginBottom: "-40px",paddingBottom: "0px"}}>
                <div class="block-heading" style= {{paddingBottom: "0px",marginTop: "23px",paddingTop:"22px"}}>
                    <h2 class="text-start text-danger bs-custom" style= {{marginBottom: "32px",paddingTop: "13px"}} >Past Transactions</h2>
                </div>
                <div class="block-content" style={{paddingRight:" 11px",paddingLeft: "1px",marginTop:" 3px",marginBottom: "-1px",paddingTop:" 0px",paddingBottom: "0px"}}>
                    <div class="clean-blog-post" style={{marginTop: "1px",marginBottom: "-10px",paddingBottom: "9px"}}>
                        <div></div>
                    </div>
                    <div class="clean-blog-post" style={{paddingLeft: "0px",paddingBottom: "68px",marginBottom: "-62px"}}>
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th class="text-danger">Date</th>
                                        <th class="text-danger">Rental Name</th>
                                        <th class="text-danger">Type</th>
                                        <th class="text-danger">Amount</th>
                                        <th class="text-danger">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>24.03.2023</td>
                                        <td>Kaş Luxury Villa</td>
                                        <td>Payment</td>
                                        <td>$420</td>
                                        <td>Successfull</td>
                                    </tr>
                                    <tr>
                                        <td>20.08.2022</td>
                                        <td>Bursa 3+1 Flat</td>
                                        <td>Refund</td>
                                        <td>$560</td>
                                        <td>Successfull</td>
                                    </tr>
                                    <tr>
                                        <td>27.04.2022</td>
                                        <td>İzmir Beach House</td>
                                        <td>Payment</td>
                                        <td>$270</td>
                                        <td>Successfull</td>
                                    </tr>
                                    <tr>
                                        <td>06.08.2020</td>
                                        <td>Ankara 1+1 Flat</td>
                                        <td>Payment</td>
                                        <td>$96</td>
                                        <td>Successfull</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div><button             
                    onClick={goBackToProfile} class="btn btn-primary btn btn-custom-class" type="button" style={{paddingLeft:" 25px",paddingRight: "32px",paddingTop:" 0px",marginRight: "-8px",marginBottom: "-7px", marginTop: "-25px"}}>Back</button>
                </div>
            </div>
        </section>
    </main>


    <footer class="page-footer dark">
        <div class="container">
            <div class="row">
                <div class="col-sm-3">
                    <h5>Get started</h5>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Sign up</a></li>
                        <li><a href="#">Downloads</a></li>
                    </ul>
                </div>
                <div class="col-sm-3">
                    <h5>About us</h5>
                    <ul>
                        <li><a href="#">Company Information</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Reviews</a></li>
                    </ul>
                </div>
                <div class="col-sm-3">
                    <h5>Support</h5>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Help desk</a></li>
                        <li><a href="#">Forums</a></li>
                    </ul>
                </div>
                <div class="col-sm-3">
                    <h5>Legal</h5>
                    <ul>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-copyright">
            <p>© 2023 Copyright Text</p>
        </div>
    </footer>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="assets/js/baguetteBox.min.js"></script>
    <script src="assets/js/vanilla-zoom.js"></script>
    <script src="assets/js/theme.js"></script>
  </body>

    </container> 


  );
}
export default PastTransactionsPage;
