import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  getDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "~/config/firestore";
import classNames from "classnames/bind";
import styles from "./ProductAdmin.module.scss";

const cx = classNames.bind(styles);

const header = [
  {
    name: "STT",
    value: "id",
    width: "100px",
  },
  {
    name: "Tên sản phẩm",
    value: "name",
    width: "100px",
  },
  {
    name: "Giá",
    value: "price",
    width: "100px",
  },
  {
    name: "Số lượng",
    value: "quantity",
    width: "100px",
  },
  {
    name: "Ảnh",
    value: "image",
    width: "100px",
  },
  {
    name: "Action",
    value: "action",
    width: "100px",
  },
];

function ProductsAdmin() {
  const [products, setProducts] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    quantity: "",
    image: "",
  });
  const [editingProduct, setEditingProduct] = useState(null); // State để lưu thông tin sản phẩm đang được sửa

  useEffect(() => {
    getDataBeauty();
  }, []);

  const getDataBeauty = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const productsData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setProducts(productsData);
  };

  const handleAddProduct = () => {
    setIsFormVisible(true);
  };

  const handleSubmit = async () => {
    try {
      if (editingProduct) {
        // Nếu đang sửa sản phẩm
        await updateDoc(doc(db, "products", editingProduct.id), newProduct);
        const updatedProducts = products.map((product) =>
          product.id === editingProduct.id ? newProduct : product
        );
        setProducts(updatedProducts);
        setEditingProduct(null);
      } else {
        // Nếu thêm sản phẩm mới
        const docRef = await addDoc(collection(db, "products"), newProduct);
        const docSnapshot = await getDoc(docRef);
        const addedProduct = { id: docSnapshot.id, ...docSnapshot.data() };
        setProducts((prevProducts) => [...prevProducts, addedProduct]);
      }
      setIsFormVisible(false);
      setNewProduct({
        name: "",
        price: "",
        quantity: "",
        image: "",
      });
    } catch (error) {
      console.error("Error adding/updating product: ", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await deleteDoc(doc(db, "products", productId));
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== productId)
      );
    } catch (error) {
      console.error("Error deleting product: ", error);
    }
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    const updatedProduct = { ...product };
    delete updatedProduct.image;
    setNewProduct(updatedProduct);
    setIsFormVisible(true);
  };

  return (
    <div className={cx("products")}>
      <div className={cx("title")}>
        <h3>Products</h3>
        {!isFormVisible && (
          <button
            type="button"
            className="btn btn-outline-dark"
            onClick={handleAddProduct}
          >
            Add Product
          </button>
        )}
      </div>
      {isFormVisible && (
        <div className={cx("form-overlay")}>
          <div className={cx("custom-form")}>
            <h4>{editingProduct ? "Edit Product" : "Add New Product"}</h4>
            <div className={cx("form-group")}>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={newProduct.name}
                onChange={handleInputChange}
              />
            </div>
            <div className={cx("form-group")}>
              <label>Price:</label>
              <input
                type="number"
                name="price"
                value={newProduct.price}
                onChange={handleInputChange}
              />
            </div>
            <div className={cx("form-group")}>
              <label>Quantity:</label>
              <input
                type="number"
                name="quantity"
                value={newProduct.quantity}
                onChange={handleInputChange}
              />
            </div>
            <div className={cx("form-group")}>
              <label>Image URL:</label>
              <input
                type="file"
                name="image"
                value={newProduct.image}
                onChange={handleInputChange}
              />
            </div>
            <div className={cx("form-actions")}>
              <button
                type="button"
                className="btn btn-outline-dark"
                onClick={() => {
                  setIsFormVisible(false);
                  setEditingProduct(null);
                }}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-outline-dark"
                onClick={handleSubmit}
              >
                {editingProduct ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}
      <div className={cx("manager")}>
        <table className="table table-hover">
          <thead>
            <tr>
              {header.map((item, index) => (
                <th key={index} scope="col">
                  {item.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>
                  <img
                    style={{ width: "50px", height: "50px" }}
                    src={item.image}
                    alt=""
                  />
                </td>
                <td className={cx("edit-btn")}>
                  <button
                    type="button"
                    className="btn btn-outline-warning"
                    onClick={() => handleEditProduct(item)}
                  >
                    Sửa
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() => handleDeleteProduct(item.id)}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductsAdmin;
