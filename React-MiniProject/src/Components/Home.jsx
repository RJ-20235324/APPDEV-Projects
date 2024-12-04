export default function Home() {
    return (
      <>
      {/*Featured */}
        <div class="card text-center" style={{marginTop: "44px"}}>
            <div class="card-header" style={{fontWeight: "bold"}}>
                Featured
            </div>
            <div class="card-body-local">
            <h1 class="card-title" style={{ fontWeight: "bold", marginTop: "30px", color: "red", fontSize: "100px"}}>Keystaxx Q5</h1>
            <p class="card-text" style={{ fontWeight: "400", color: "white", fontSize: "40px",  marginTop: "-10px"}}>Hello Minimalism.</p>
            <a href="#" class="btn btn-primary" style={{ fontWeight: "500", color: "white", borderRadius: "20px" }}>Learn more</a>
            </div>         
        </div>

        
        {/*Carousel */}
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          style={{ marginTop: "5px" }}
          data-bs-ride="carousel" // Autoplay enabled
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/src/assets/Keystaxx-Horizon-Preview.webp"
                className="d-block w-100"
                alt="..."
                style={{ height: "800px", width: "auto" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/src/assets/Keystaxx-Mirage-Preview.webp"
                className="d-block w-100"
                alt="..."
                style={{ height: "800px", width: "auto" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/src/assets/KeyStaxx Q4.webp"
                className="d-block w-100"
                alt="..."
                style={{ height: "px", width: "auto" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>


        </>
    )
};
