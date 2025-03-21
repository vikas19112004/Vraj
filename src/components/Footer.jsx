import "./Footer.css"

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-div">
                <div className="footer-div-div-1">
                    <img src="/Logo.png" alt="" id="logo" className="w-[17rem] brightness-200 max-[450px]:w-[10rem]" />
                    <p>Enjoy the best rides at unbeatable prices, with safe, comfortable, and reliable travel across Braj—serving you with devotion and care!</p>
                    <div className="footer-div-div-1-div">
                        <img src="https://ucarecdn.com/6e781e5c-6202-4172-ad51-21f2a0a53819/-/preview/170x50/" alt="" />
                        <img src="https://ucarecdn.com/59ccfdaf-8ddd-4252-af9e-b36bee9ac923/-/preview/167x49/" alt="" />
                    </div>
                </div>
                <div className="footer-div-div-2">
                    <p>QUICK LINKS</p>
                    <a href="">How it works</a>
                    <a href="">Features</a>
                    <a href="">Download App</a>
                    <a href="">Contact</a>
                </div>
                <div className="footer-div-div-2">
                    <p>POPULAR DESTINATIONS</p>
                    <a href="">Mathura</a>
                    <a href="">Vrindavan</a>
                    <a href="">Govardhan</a>
                    <a href="">Barsana</a>
                    <a href="">Nandgaon</a>
                </div>
                <div className="footer-div-div-3">
                    <p>CONTACT US</p>
                    <a href="">+91 9462357245, <br /> +91 8741810656</a>
                    <a href="">Email: info@vrajseva.com </a>
                    <a href="">Address: Krishna Nagar, Mathura, Uttar Pradesh, INDIA</a>
                </div>
            </div>
            <hr />
            <p id="copyright">© Copyright 2025 Braj Rides. All Rights Reserved.</p>
        </div>
    );
}