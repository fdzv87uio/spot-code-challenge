import { useEffect, useState } from "react";

var products = [
  { id: "0001", name: "Apples", price: "USD 2" },
  { id: "0002", name: "Ananas", price: "USD 5" },
  { id: "0003", name: "Bananas", price: "USD 5" },
  { id: "0004", name: "Cocoa", price: "USD 7" },
  { id: "0005", name: "Cramberries", price: "USD 5" },
  { id: "0006", name: "Dafodils", price: "USD 8" },
  { id: "0007", name: "Dandelions", price: "USD 10" },
];

export default function ProductsView() {
  const [search, setSearch] = useState("");
  const [currentProducts, setCurrentProducts] = useState();
  const [fetchedProducts, setFetchedProducts] = useState();
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [editingOn, setEditingOn] = useState(false);
  const [isButtonDisabled, setIsButtonDisable] = useState(false);

  useEffect(() => {
    if (!currentProducts) {
      fetch("https://jsonplaceholder.typicode.com/albums")
        .then((response) => response.json())
        .then((json) => {
          let result = [];
          console.log(json);
          json.forEach((x, key) => {
            if (key < 10) {
              result.push(x);
            }
          });
          setCurrentProducts(result);
          setFetchedProducts(result);
        });
    }
  }, [currentProducts]);

  useEffect(() => {
    if (errorMessage.length > 0 || successMessage.length > 0) {
      setTimeout(() => {
        setErrorMessage("");
        setSuccessMessage("");
      }, 3000);
    }
  }, [errorMessage, successMessage]);

  // SEARCH FILTER
  function filterProducts(value) {
    const currentValue = value.toUpperCase();
    const currentValueLength = value.length;
    let results = [];
    fetchedProducts.forEach((item) => {
      const currentSlice = item.title
        .slice(0, currentValueLength)
        .toUpperCase();
      if (currentSlice === currentValue) {
        results.push(item);
      }
    });
    setCurrentProducts(results);
  }

  // ADD PRODUCT
  function addProduct() {
    setErrorMessage(false);
    const numberId = parseInt(id);
    const filter1 = fetchedProducts.filter((x) => x.id === numberId);
    const filter = fetchedProducts.filter((x) => x.title === title);
    if (filter1.length > 0) {
      setErrorMessage("Product ID Already Exists!");
    } else if (filter.length > 0) {
      setErrorMessage("Product Title Already Exists!");
    } else {
      const newObject = {
        userId: 99,
        id: id,
        title: title,
      };
      let prods = currentProducts;
      prods.push(newObject);
      setCurrentProducts(prods);
      setFetchedProducts(prods);
      console.log(prods);
      setTitle("");
      setId("");
      setSuccessMessage("Product Added Successfully!");
    }
  }

  // EDIT PRODUCT
  function enableProductEdit(item) {
    setEditingOn(true);
    setTitle(item.title);
    setId(item.id);
    setIsButtonDisable(true);
  }

  function editProduct() {
    fetchedProducts.forEach((x) => {
      if (x.id === id) {
        x.title = title;
      }
    });
    setTitle("");
    setId("");
    setEditingOn(false);
    setSuccessMessage("Product Update Successful");
    setIsButtonDisable(false);
  }
  // DELETE PRODUCT
  function deleteProduct(item) {
    const filtered = fetchedProducts.filter((x) => x.title !== item.title);
    setCurrentProducts(filtered);
    setFetchedProducts(filtered);
    filterProducts(search);
    setSuccessMessage("Product Erased");
  }
  return (
    <>
      {currentProducts && currentProducts.length > 0 && (
        <div style={styles.viewContainer}>
          <div style={styles.productGrid}>
            <div style={styles.sbWrapper}>
              <h1 style={styles.sbHeader}>Products</h1>
              <input
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  filterProducts(e.target.value);
                }}
                placeholder="Search For Keywords"
                style={styles.customInput}
              />
            </div>
            {currentProducts.length > 0 && (
              <table cellspacing="0" style={styles.tableBody}>
                <tbody>
                  <tr>
                    <th style={styles.tableHeader}>Item ID</th>
                    <th style={styles.tableHeader}>Title</th>
                    <th style={styles.tableHeader}>Actions</th>
                  </tr>
                  {currentProducts.map((item, key) => {
                    return (
                      <tr key={`product_${key}`}>
                        <td style={styles.tableData}>{item.id}</td>
                        <td style={styles.tableData}>{item.title}</td>
                        <td style={styles.productControlWrapper}>
                          <button
                            style={styles.editButton}
                            onClick={() => enableProductEdit(item)}
                          >
                            Edit
                          </button>
                          <button
                            style={styles.deleteButton}
                            onClick={() => deleteProduct(item)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
            {currentProducts.length === 0 && (
              <div style={styles.productFormTitle}>No Products Available!</div>
            )}
          </div>
          <div style={styles.productFormContainer}>
            <div style={styles.productFormWrapper}>
              <div style={styles.productFormTitle}>Header Text</div>
              <div style={styles.productFormCopy}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </div>
              <input
                disabled={isButtonDisabled}
                value={id}
                onChange={(e) => {
                  setId(e.target.value);
                }}
                style={styles.formInput}
                placeholder="Item ID"
              />
              <input
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                style={styles.formInput}
                placeholder="Title"
              />
              {!editingOn && (
                <button
                  disabled={!id && !title ? true : false}
                  onClick={() => addProduct()}
                  style={styles.formButton}
                >
                  Create
                </button>
              )}
              {editingOn && (
                <button
                  disabled={!id && !title ? true : false}
                  onClick={() => editProduct()}
                  style={styles.formButton}
                >
                  Save
                </button>
              )}
              {errorMessage.length > 0 && (
                <div style={styles.error}>{errorMessage}</div>
              )}
              {successMessage.length > 0 && (
                <div style={styles.success}>{successMessage}</div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const styles = {
  viewContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "auto",
    paddingRight: "30px",
    paddingLeft: "30px",
    minHeight: "100vh",
    marginBottom: "200px",
  },
  productGrid: {
    width: "50%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
  },
  sbWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "60px",
    height: "auto",
  },
  customInput: {
    border: "2px solid #000000",
    borderRadius: "5px",
    backgroundColor: "#ffffff",
    width: "250px",
    height: "40px",
    padding: "5px 10px",
    fontSize: "1rem",
  },
  sbHeader: {
    fontSize: "3rem",
    fontWeight: "bolder",
    fontFamily: "sans-serif",
    maxWidth: "500px",
  },
  error: {
    fontSize: "1rem",
    color: "red",
  },
  success: {
    fontSize: "1rem",
    color: "green",
  },
  editButton: {
    width: "auto",
    height: "30px",
    borderRadius: "8px",
    textAlign: "center",
    backgroundColor: "#000000",
    color: "#ffffff",
    border: "none",
    padding: "5px 20px",
    fontWeight: "bolder",
  },
  deleteButton: {
    width: "auto",
    height: "30px",
    borderRadius: "8px",
    textAlign: "center",
    backgroundColor: "#ffffff",
    border: "1px solid #000000",
    color: "#000000",
    padding: "5px 20px",
    fontWeight: "bolder",
  },
  tableHeader: {
    backgroundColor: "#ececec",
    color: "#000000",
    fontSize: "1rem",
    fontWeight: "bolder",
    textAlign: "center",
    fontFamily: "sans-serif",
    borderLeft: "1px solid #000000",
    borderRight: "1px solid #000000",
    height: "45px",
  },
  tableBody: {
    border: "2px solid #000000",
  },
  tableData: {
    backgroundColor: "#ffffff",
    color: "#777777",
    fontSize: "1rem",
    fontWeight: "normal",
    textAlign: "center",
    fontFamily: "sans-serif",
    borderLeft: "1px solid #000000",
    borderRight: "1px solid #000000",
    borderBottom: "1px solid #000000",
    height: "45px",
  },
  productControlWrapper: {
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    borderLeft: "1px solid #000000",
    borderRight: "1px solid #000000",
    borderBottom: "1px solid #000000",
    height: "45px",
  },
  productFormContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "right",
    marginTop: "100px",
    width: "50%",
  },
  productFormWrapper: {
    width: "450px",
    height: "auto",
    marginLeft: "60px",
    marginRight: "30px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    backgroundColor: "#ececec",
    alignItems: "center",
    padding: "30px 50px",
  },
  productFormTitle: {
    color: "#000000",
    fontSize: "2rem",
    fontWeight: "normal",
    fontFamily: "sans-serif",
    textAlign: "center",
  },
  productFormCopy: {
    color: "#999999",
    fontSize: "1rem",
    fontWeight: "normal",
    fontFamily: "sans-serif",
    textAlign: "center",
  },
  formInput: {
    width: "100%",
    border: "none",
    backgroundColor: "#ffffff",
    height: "35px",
    color: "#999999",
    fontSize: "1rem",
    fontWeight: "normal",
    borderRadius: "5px",
    padding: "5px 10px",
  },
  formButton: {
    width: "100%",
    height: "35px",
    borderRadius: "8px",
    textAlign: "center",
    backgroundColor: "#000000",
    color: "#ffffff",
    border: "none",
    padding: "5px 20px",
    fontWeight: "bolder",
  },
};
