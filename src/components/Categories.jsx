import siteData from "../data/siteData.json";

export default function Categories() {
  return (
    <div className="container my-5">
      <h3 className="mb-4 text-center fw-bold">Shop by Categories</h3>

      <style>
        {`
          .cat-card {
            border-radius: 14px;
            overflow: hidden;
            background: #fff;
            border: 1px solid #eee;
            transition: all 0.25s ease;
            cursor: pointer;
          }

          .cat-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 10px 26px rgba(0,0,0,0.12);
            border-color: #ddd;
          }

          .cat-img {
            width: 100%;
            height: 230px;
            object-fit: cover;
            transition: transform 0.35s ease;
            border-bottom: 1px solid #f1f1f1;
          }

          .cat-card:hover .cat-img {
            transform: scale(1.04);
          }

          .cat-title {
            font-size: 1.1rem;
            transition: color 0.25s ease;
          }

          .cat-card:hover .cat-title {
            color: #212529;
          }

          .cat-desc {
            font-size: 0.9rem;
            color: #6c757d;
          }
        `}
      </style>

      <div className="row g-4">
        {siteData.categories.map((cat, i) => (
          <div className="col-6 col-md-4" key={i}>
            <div className="card cat-card h-100">
              <img
                src={cat.image}
                className="cat-img"
                alt={cat.title}
              />

              <div className="card-body text-center">
                <h5 className="cat-title fw-semibold mb-1">{cat.title}</h5>
                <p className="cat-desc mb-0">{cat.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
