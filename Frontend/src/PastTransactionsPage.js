import {  useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
function PastTransactionsPage() {
    const navigate = useNavigate();
    const transaction = [
        { id:1, date: "24/03/2023", name: 'Kaş Luxury Villa ', type: 'Payment', amount: "420₺",status:"Successful" },
        { id:2, date: "16/01/2022", name: 'Bursa 3+1 Flat', type: 'Refund', amount: "560₺",status:"Successful" },
        { id:3, date: "20/11/2022", name: 'İzmir Beach House ', type: 'Payment', amount: "270₺",status:"Successful" },
        { id:4, date: "2/02/2021", name: 'Ankara 1+1 Flat', type: 'Payment', amount: "96₺",status:"Successful" },
      ];
  
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
 
    <NavBar></NavBar>
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
                                {transaction.map((transaction) => (
                                <tbody>
                               
                                    <tr>
                                    <td>{transaction.date}</td>
                                    <td>{transaction.name}</td>
                                    <td>{transaction.type}</td>
                                    <td>{transaction.amount}</td>
                                    <td>{transaction.status}</td>
                                </tr>
 
                                </tbody>
                                    ))}

                            </table>
                        </div>
                    </div><button             
                    onClick={goBackToProfile} class="btn btn-primary btn btn-custom-class" type="button" style={{paddingLeft:" 25px",paddingRight: "32px",paddingTop:" 0px",marginRight: "-8px",marginBottom: "-7px", marginTop: "-25px"}}>Back</button>
                </div>
            </div>
        </section>
    </main>

    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="assets/js/baguetteBox.min.js"></script>
    <script src="assets/js/vanilla-zoom.js"></script>
    <script src="assets/js/theme.js"></script>
  </body>

    </container> 
  

  );
}
export default PastTransactionsPage;

