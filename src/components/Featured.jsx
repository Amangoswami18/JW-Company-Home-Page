import siteData from "../data/siteData.json";

export default function Featured() {
  const f = siteData.featured;

  const goToNewArrivals = () => {
    const section = document.getElementById("new-arrivals");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container my-5">
      <h3 className="mb-4 text-center fw-bold">Featured</h3>

      <style>
        {`
          .featured-box {
            border: 1px solid #e5e5e5;
            padding: 20px;
            border-radius: 12px;
            background: #fff;
            transition: 0.25s ease;
          }

          .featured-box:hover {
            transform: translateY(-4px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          }

          .featured-img {
            width: 100%;
            height: 330px;
            object-fit: cover;
            border-radius: 10px;
          }

          .featured-title {
            font-size: 20px;
            font-weight: 600;
          }

          .featured-desc {
            color: #666;
            margin: 8px 0;
            font-size: 15px;
          }

          .featured-price {
            font-size: 18px;
            font-weight: 600;
          }
        `}
      </style>

      <div className="featured-box">
        <div className="row g-4">
          <div className="col-md-6">
            <img src={f.image} alt={f.title} className="featured-img" />
          </div>

          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h4 className="featured-title">{f.title}</h4>

            <p className="featured-desc">{f.description}</p>

            <div className="featured-price">₹{f.price}</div>

            <button className="btn btn-dark mt-3" onClick={goToNewArrivals}>
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
