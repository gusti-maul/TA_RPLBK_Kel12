import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const About = () => {
  return (
    <>
      <Navbar />

      <div className="header">
        <div className="row1">
        </div>
        <div className="row22">
          <h2>About Us</h2>
          <div className="Info">
            <p>
              Curabitur aliquet quam id dui posuere blandit. Donec
              sollicitudin molestie malesuada Pellentesque ipsum id orci
              porta dapibus. Vivamus suscipit tortor eget felis porttitor
              volutpat.
            </p>
            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor , sed
              quia non numquam eius modi tempora incidunt ut labore et
              dolore magnam aliquam quaerat voluptatem. Nisi ut aliquid ex
              ea commodi consequatur?
            </p>
            <p>
              Quis autem vel eum iure reprehenderit qui in ea voluptate
              velit esse quam nihil molestiae consequatur, vel illum qui
              dolorem eum fugiat quo voluptas nulla pariatur
            </p>
            <p>
              This Website made by Kelompok 12

            </p>
            <button className='btn btn-primary rounded-0'>Read More</button>
          </div>          
        </div>
      </div>
      <Footer />
    </>
  )
}
export default About;