import siteData from "../data/siteData.json";

export default function TrustStrip() {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #ffffff, #f7f7f7)",
        padding: "32px 0",
        borderTop: "1px solid #eee",
        borderBottom: "1px solid #eee",
      }}
    >
      <div
        className="container d-flex flex-wrap justify-content-between text-center"
        style={{ gap: 20 }}
      >
        {siteData.trust.map((t, i) => (
          <div
            key={i}
            style={{
              flex: "1 1 150px",
              minWidth: "140px",
              padding: "14px 0",
              borderRadius: 10,
              transition: "all 0.22s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#ececec";
              e.currentTarget.style.boxShadow =
                "0 3px 8px rgba(0,0,0,0.08)";
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "none";
            }}
          >
            <div style={{ fontSize: 28, marginBottom: 6 }}>{t.icon}</div>

            <p
              style={{
                margin: 0,
                fontSize: 15,
                color: "#222",
                fontWeight: 500,
                letterSpacing: ".2px",
              }}
            >
              {t.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
