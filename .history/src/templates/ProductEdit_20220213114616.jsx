import React, { useState } from "react";
import { TextInput } from "../components/UIkit";

const ProductEdit = () => {
  const [name, setName] = useState(""),
    [description, setDescription] = useState(""),
    [category, setCategory] = useState(""),
    [gender, setGender] = useState(""),
    [price, setPrice] = useState("");

  return (
    <section>
      <h2 className="u-text_headline u-text-center">商品の登録と編集</h2>
      <div className="c-section-container">
        <TextInput />
      </div>
    </section>
  );
};

export default ProductEdit;
