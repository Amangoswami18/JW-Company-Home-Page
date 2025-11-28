import siteData from "../data/siteData.json";

export default function SearchResults({ searchText }) {
  const products = siteData.newArrivals;

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(searchText.toLowerCase())
  );

  if (!searchText.trim()) return null; // when search empty ,hide box

  return (
    <div className="container my-4">
      <h5>Search Results</h5>

      <div className="row g-3">
        {filtered.length === 0 ? (
          <p>No item found</p>
        ) : (
          filtered.map((item) => (
            <div className="col-6 col-md-3" key={item.id}>
              <div className="card p-2 shadow-sm">
                <img
                  src={item.image}
                  alt={item.title}
                  className="img-fluid"
                  style={{ height: 200, objectFit: "cover" }}
                />
                <div className="mt-2">
                  <h6>{item.title}</h6>
                  <p className="text-muted">₹{item.price}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
