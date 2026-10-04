import React from "react";

function Products() {
  return (
    <div
      style={{
        margin: 0,
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f8f6f3",
        color: "#333",
        minHeight: "100vh",
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
        </div>
      </nav>

      {/* Page Heading */}
      <section
        style={{
          textAlign: "center",
          padding: "60px 20px 40px",
        }}
      >
        <h1
          style={{
            fontSize: "40px",
            marginBottom: "10px",
          }}
        >
          Our Collection
        </h1>

        <p
          style={{
            color: "#777",
            fontSize: "17px",
          }}
        >
          Discover our latest fashion collection
        </p>
      </section>

      {/* Products */}
      <section
        style={{
          padding: "20px 60px 60px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >

          {/* Product 1 */}
          <div
            style={{
              width: "260px",
              backgroundColor: "white",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 3px 10px #ddd",
            }}
          >
            <div
              style={{
                height: "280px",
                backgroundColor: "#eadfd3",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "90px",
              }}
            >
              👗
            </div>

            <div style={{ padding: "20px" }}>
              <h3>Elegant Summer Dress</h3>

              <p style={{ color: "#777" }}>
                Women Collection
              </p>

              <h3 style={{ color: "#b47b4d" }}>
                $59.99
              </h3>

              <button
                style={{
                  width: "100%",
                  padding: "12px",
                  backgroundColor: "#1f1f1f",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>

          {/* Product 2 */}
          <div
            style={{
              width: "260px",
              backgroundColor: "white",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 3px 10px #ddd",
            }}
          >
            <div
              style={{
                height: "280px",
                backgroundColor: "#dfe5e8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "90px",
              }}
            >
              👔
            </div>

            <div style={{ padding: "20px" }}>
              <h3>Classic Casual Shirt</h3>

              <p style={{ color: "#777" }}>
                Men Collection
              </p>

              <h3 style={{ color: "#b47b4d" }}>
                $44.99
              </h3>

              <button
                style={{
                  width: "100%",
                  padding: "12px",
                  backgroundColor: "#1f1f1f",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>

          {/* Product 3 */}
          <div
            style={{
              width: "260px",
              backgroundColor: "white",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 3px 10px #ddd",
            }}
          >
            <div
              style={{
                height: "280px",
                backgroundColor: "#e8d8d8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "90px",
              }}
            >
              🧥
            </div>

            <div style={{ padding: "20px" }}>
              <h3>Premium Blazer</h3>

              <p style={{ color: "#777" }}>
                New Collection
              </p>

              <h3 style={{ color: "#b47b4d" }}>
                $89.99
              </h3>

              <button
                style={{
                  width: "100%",
                  padding: "12px",
                  backgroundColor: "#1f1f1f",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>

          {/* Product 4 */}
          <div
            style={{
              width: "260px",
              backgroundColor: "white",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 3px 10px #ddd",
            }}
          >
            <div
              style={{
                height: "280px",
                backgroundColor: "#e3ded5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "90px",
              }}
            >
              👚
            </div>

            <div style={{ padding: "20px" }}>
              <h3>Classic Linen Top</h3>

              <p style={{ color: "#777" }}>
                Women Collection
              </p>

              <h3 style={{ color: "#b47b4d" }}>
                $39.99
              </h3>

              <button
                style={{
                  width: "100%",
                  padding: "12px",
                  backgroundColor: "#1f1f1f",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#1f1f1f",
          color: "white",
          textAlign: "center",
          padding: "20px",
        }}
      >
        © 2026 LUMIÈRE. All Rights Reserved.
      </footer>
    </div>
  );
}

export default Products;