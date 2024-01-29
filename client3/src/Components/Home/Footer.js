import React from 'react'
import '../CSS/Footer.css'

export default function Footer() {
    return (
        <div>
            <footer class="footer">
                <div class="containernew">
                    <div class="row">
                        <div class="footer-col">
                            <h4>company</h4>
                            <ul>
                                <li><a href="#">about us</a></li>
                                <li><a href="#">our services</a></li>
                                <li><a href="#">privacy policy</a></li>
                                <li><a href="#">affiliate program</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>get help</h4>
                            <ul>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">shipping</a></li>
                                <li><a href="#">returns</a></li>
                                <li><a href="#">Customer Refund</a></li>
                               
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>Site Resources</h4>
                            <ul>
                                <li><a href="#">Buyers</a></li>
                                <li><a href="#">Sellers</a></li>
                                <li><a href="#">Renters</a></li>
                                <li><a href="#">Credit Repair</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>follow us</h4>
                            <div class="social-links">
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
