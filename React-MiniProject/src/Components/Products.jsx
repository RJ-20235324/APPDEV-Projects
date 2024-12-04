export default function Products() {
    return (
      <>
        <div className="body-container" style={{ marginTop: '74px', marginLeft: '100px', marginRight: '100px' }}>
          <h1
            style={{
              fontWeight: 'bold',
              fontSize: '50px',
              color: 'black',
            }}
          >
            Explore the lineup.
          </h1>
        
        <div className="card" style={{ width: '18rem' }}>
          <img
            src="src/assets/Gatreon-G.webp"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Learn More
            </a>
          </div>
          </div>
        </div>
      </>
    );
  }
  