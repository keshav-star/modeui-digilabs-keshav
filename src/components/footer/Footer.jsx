import './Footer.scss'
const Footer = () => {
  return (
    <div className="footer border-t-2">
      <div className="intro w-[90%] md:w-[80%] lg:w-[40%] m-auto my-12">
        <h2 className="font-bold md:text-center text-2xl">Mode UI</h2>
        <p className="text-[#5A6475] md:text-center md:text-lg my-2">
          Mode UI is a comprehensive design system that empowers designers and
          developers to create cohesive and visually stunning user interfaces
          across various platforms and devices
        </p>
      </div>

      <div className="links md:py-12 px-[5vw] md:px-[10vw] md:flex justify-between flex-wrap">
        <div className="mb-5">
            <h2 className="font-bold md:mb-3">Company</h2>
            <p>About us</p>
            <p>Pricing</p>
            <p>Contact us</p>
            <p>Features</p>
        </div>
        <div className="mb-5">
            <h2 className="font-bold md:mb-3">Product</h2>
            <p>About us</p>
            <p>Pricing</p>
            <p>Contact us</p>
            <p>Features</p>
        </div>
        <div className="mb-5">
            <h2 className="font-bold md:mb-3">Resourses</h2>
            <p>Templates</p>
            <p>Landing pages</p>
            <p>Documentation</p>
            <p>Comp library</p>
        </div>
        <div className="mb-5">
            <h2 className="font-bold md:mb-3">Legal</h2>
            <p>Privacy policy</p>
            <p>Terms & Conditions</p>
            <p>Disclaimer</p>
            <p>Affliate programme</p>
        </div>
        <div className="mb-5">
            <h2 className="font-bold md:mb-3">Support</h2>
            <p>Help centre</p>
            <p>Raise ticket</p>
            <p>Report</p>
            <p>Refund</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
