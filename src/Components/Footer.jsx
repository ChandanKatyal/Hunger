import React from 'react';
import './footer.css';
import logoimg from '../images/logo3.png';

function Footer() {
    return (
        <div>
		<footer class="footer-distributed">
 
			<div class="footer-left">
 
				<span>      <img src={logoimg} alt=''/></span>
 
				<p class="footer-links">
					<a href="main">Home</a>
					·
					<a href="products">Product</a>
					·
					<a href="about">About</a>
					·
					<a href="contact">Contact</a>
					·
					<a href="#">Cart</a>
					·
					
				</p>
 
				<p class="footer-company-name">Hunger &copy; 2022</p>
			</div>
 
			<div class="footer-center">
 
				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>India </span></p>
				</div>
 
				<div>
					<i class="fa fa-phone"></i>
					<p>+91 8877665544</p>
				</div>
 
				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:hunger@gmail.com">hunger@gmail.com
</a></p>
				</div>
 
			</div>
 
			<div class="footer-right">
 
				<p class="footer-company-about">
					<span>About the company</span>
					About the hunger............
				</p>
 
				<div class="footer-icons">
 
					<a href="#"><i class="fa fa-facebook"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-github"></i></a>
 
				</div>
 
			</div>
 
		</footer>
            

        </div>
        
    )
}

export default Footer;