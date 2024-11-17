
function HeroSection() {
  return (

    <main className="main" id="Home">
      <section className="section banner banner_section">
        <div className="container banner_column">
          <img className ="banner_image" src="https://i.ibb.co/sVqYmS2/Illustration.png" />
            <div className="banner_inner">
              <h1 className="heading_xl">All Your Files in One Secure Location.</h1>
              <p className="paragraph">
                We stores all your most important files in one secure location.
                Access them whenever needed, share and collaborate with
                your connections.
              </p>
              <button className="btn btn_darken btn_inline">
                Get Started<i className="bx bx_ right_arrow_alt"></i>
              </button>
            </div>
        </div>
      </section>
    </main>
  )
}

export default HeroSection