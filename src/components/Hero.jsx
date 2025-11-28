import siteData from "../data/siteData.json";

export default function Hero() {
  return (
    <div
      id="heroCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      style={{ maxHeight: "500px", overflow: "hidden" }}
    >
      <div className="carousel-inner">
        {siteData.hero.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              src={item.image}
              className="d-block w-100"
              style={{
                objectFit: "cover",
                height: "500px",
                filter: "brightness(82%)"
              }}
            />

            {/* Caption hai */}
            <div
              className="carousel-caption d-none d-md-block"
              style={{
                bottom: "18%",
                textShadow: "0 0 10px rgba(0,0,0,0.4)"
              }}
            >
              <h2
                style={{
                  fontWeight: 600,
                  letterSpacing: "0.3px"
                }}
              >
                {item.title}
              </h2>

              <p
                style={{
                  fontSize: "1.1rem",
                  marginBottom: "15px"
                }}
              >
                {item.subtitle}
              </p>

              <button
                className="btn btn-light px-4 py-2"
                style={{
                  borderRadius: "30px",
                  fontWeight: 500,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
                }}
              >
                {item.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
