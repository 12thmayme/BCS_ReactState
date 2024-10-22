import React, { useState } from 'react';
import glassesData from '../../dataGlasses.json'; // Đảm bảo đường dẫn đúng

const ChangeSunglasses = () => {
  const [selectedGlasses, setSelectedGlasses] = useState(null);

  const handleSelectGlasses = (glasses) => {
    setSelectedGlasses(glasses);
  };

  return (
    <div className="glasses-app" style={{ textAlign: "center" }}>
      <h1>TRY GLASSES APP ONLINE</h1>

      {/* Khu vực hiển thị người mẫu */}
      <div
        className="model-container"
        style={{ position: "relative", display: "inline-block" }}
      >
        <img
          src="/glassesImage/model.jpg"
          alt="Model"
          className="model"
          style={{ width: "300px" }}
        />

        {/* Hiển thị kính đã chọn lên người mẫu */}
        {selectedGlasses && (
          <img
            src={selectedGlasses.url}
            alt={selectedGlasses.name}
            className="glasses-on-model"
            style={{
              position: "absolute",
              top: "85px", // Điều chỉnh theo vị trí khuôn mặt
              left: "265px", // Điều chỉnh theo vị trí mắt
              width: "150px", // Điều chỉnh kích thước kính
            }}
          />
        )}

        {/* Hiển thị thông tin về kính được chọn */}
        {selectedGlasses && (
          <div className="glasses-info">
            <h2>{selectedGlasses.name}</h2>
            <p>{selectedGlasses.desc}</p>
          </div>
        )}
      </div>

      {/* Danh sách kính phía dưới */}
      <div className="glasses-list">
        {glassesData.map((glasses) => (
          <button key={glasses.id} onClick={() => handleSelectGlasses(glasses)}>
            <img src={glasses.url} alt={glasses.name} style={{ width: "60px" }} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChangeSunglasses;
