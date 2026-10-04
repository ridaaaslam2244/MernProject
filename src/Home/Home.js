import React from "react";

function Home() {
  return (
    <div
      style={{
        margin: 0,
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f8f6f3",
        color: "#333",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          backgroundColor: "#1f1f1f",
          color: "white",
          padding: "20px 60px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            margin: 0,
            color: "#d4a373",
            letterSpacing: "2px",
          }}
        >
          LUMIÈRE
        </h2>

        <div
          style={{
            display: "flex",
            gap: "30px",
          }}
        >
          <span>Home</span>
          <span>Products</span>
          <span>Collections</span>
          <span>Cart 🛍️</span>
          <span>Login</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          minHeight: "500px",
          backgroundColor: "#e8ddd2",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          padding: "40px 70px",
        }}
      >
        <div style={{ maxWidth: "500px" }}>
          <p
            style={{
              color: "#a16d45",
              fontSize: "16px",
              letterSpacing: "3px",
            }}
          >
            NEW COLLECTION
          </p>

          <h1
            style={{
              fontSize: "55px",
              margin: "15px 0",
              color: "#292929",
            }}
          >
            Style That Speaks For You
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.7",
              color: "#666",
            }}
          >
            Discover timeless fashion pieces designed
            for your everyday style and elegance.
          </p>

          <button
            style={{
              marginTop: "20px",
              padding: "14px 35px",
              backgroundColor: "#1f1f1f",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "15px",
            }}
          >
            Shop Collection
          </button>
        </div>

        <div
          style={{
            width: "350px",
            height: "400px",
            backgroundColor: "#d4c2b2",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "150px",
            borderRadius: "5px",
          }}
        >
          👗
        </div>
      </section>

      {/* Categories */}
      <section
        style={{
          padding: "60px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "32px" }}>
          Shop By Category
        </h2>

        <p style={{ color: "#777" }}>
          Explore our latest fashion collections
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "25px",
            marginTop: "35px",
          }}
        >
          <div style={categoryStyle}>
            <div style={{ fontSize: "60px" }}>👗</div>
            <h3>Women</h3>
            <p>Elegant women's fashion</p>
          </div>

          <div style={categoryStyle}>
            <div style={{ fontSize: "60px" }}>👔</div>
            <h3>Men</h3>
            <p>Classic men's collection</p>
          </div>

          <div style={categoryStyle}>
            <div style={{ fontSize: "60px" }}>🧥</div>
            <h3>New Arrivals</h3>
            <p>Latest fashion trends</p>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section
        style={{
          backgroundColor: "#eee5dc",
          padding: "60px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "32px" }}>
          Featured Collection
        </h2>

        <p style={{ color: "#777", marginBottom: "35px" }}>
          Our most loved fashion pieces
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "25px",
          }}
        >
          <div style={productStyle}>
            <div style={productImageStyle}>👗</div>
            <h3>Summer Dress</h3>
            <p style={{ color: "#a16d45", fontWeight: "bold" }}>
              $59.99
            </p>
          </div>

          <div style={productStyle}>
            <div style={productImageStyle}>👔</div>
            <h3>Classic Shirt</h3>
            <p style={{ color: "#a16d45", fontWeight: "bold" }}>
              $44.99
            </p>
          </div>

          <div style={productStyle}>
            <div style={productImageStyle}>🧥</div>
            <h3>Premium Blazer</h3>
            <p style={{ color: "#a16d45", fontWeight: "bold" }}>
              $89.99
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#1f1f1f",
          color: "white",
          textAlign: "center",
          padding: "25px",
        }}
      >
        <h3 style={{ color: "#d4a373" }}>LUMIÈRE</h3>
        <p>Fashion made for every moment.</p>
        <p>© 2026 LUMIÈRE. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

const categoryStyle = {
  width: "220px",
  padding: "30px 20px",
  backgroundColor: "white",
  borderRadius: "5px",
  boxShadow: "0 3px 10px #ddd",
};

const productStyle = {
  width: "230px",
  padding: "15px",
  backgroundColor: "white",
  borderRadius: "5px",
  boxShadow: "0 3px 10px #ddd",
};

const productImageStyle = {
  height: "200px",
  backgroundColor: "#e8ddd2",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "80px",
  borderRadius: "4px",
};

export default Home;