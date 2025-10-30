// === Soil pH + Crop Advisory ===
document.getElementById("getAdvice").addEventListener("click", () => {
  const crop = document.getElementById("crop").value;
  const ph = parseFloat(document.getElementById("ph").value);
  const adviceText = document.getElementById("adviceText");

  if (!crop || isNaN(ph)) {
    adviceText.textContent = "⚠️ Please select a crop and enter soil pH.";
    return;
  }

  let advice = "";

  // Soil pH logic
  if (ph < 6) {
    advice += "Soil is acidic. Add lime to raise pH. ";
  } else if (ph > 7.5) {
    advice += "Soil is alkaline. Add sulfur or organic compost to lower pH. ";
  } else {
    advice += "Soil pH is ideal for most crops. ";
  }

  // Crop-specific tips
  switch (crop) {
    case "rice":
      advice += "Rice prefers slightly acidic soil (pH 5.5–6.5) and needs good water supply.";
      break;
    case "wheat":
      advice += "Wheat grows best in neutral to slightly alkaline soil (pH 6–7.5).";
      break;
    case "maize":
      advice += "Ensure good drainage and adequate nitrogen for maize growth.";
      break;
    case "cotton":
      advice += "Cotton thrives in slightly alkaline soils and warm conditions.";
      break;
    default:
      advice += "Choose the best crop based on your region and climate.";
  }

  adviceText.textContent = advice;
});

// === Soil Type + Fertilizer + Region Crop Recommender ===
document.getElementById("getCrops").addEventListener("click", () => {
  const soil = document.getElementById("soilType").value;
  const region = document.getElementById("region").value;
  const fertilizer = document.getElementById("fertilizer").value;
  const cropResult = document.getElementById("cropResult");

  if (!soil || !region || !fertilizer) {
    cropResult.textContent = "⚠️ Please fill in all fields.";
    return;
  }

  let crops = [];

  // --- SOIL TYPE LOGIC ---
  if (soil === "clay") {
    crops.push("Rice", "Wheat", "Soybean");
  } else if (soil === "sandy") {
    crops.push("Groundnut", "Maize", "Millet");
  } else if (soil === "loam") {
    crops.push("Tomato", "Potato", "Sugarcane", "Cotton");
  } else if (soil === "black") {
    crops.push("Cotton", "Sunflower", "Sorghum");
  } else if (soil === "red") {
    crops.push("Maize", "Peanuts", "Millet");
  }

  // --- REGION / CLIMATE ADJUSTMENT ---
  if (region === "tropical") {
    crops.push("Banana", "Paddy", "Sugarcane");
  } else if (region === "temperate") {
    crops.push("Wheat", "Barley", "Apple");
  } else if (region === "dry") {
    crops.push("Millet", "Cactus Pear", "Sorghum");
  } else if (region === "humid") {
    crops.push("Rice", "Jute", "Tea");
  }

  // --- FERTILIZER EFFECT ---
  if (fertilizer === "nitrogen") {
    crops.push("Maize", "Rice", "Leafy Vegetables");
  } else if (fertilizer === "phosphorus") {
    crops.push("Root Vegetables", "Peas", "Soybean");
  } else if (fertilizer === "potassium") {
    crops.push("Banana", "Potato", "Tomato");
  } else if (fertilizer === "organic") {
    crops.push("Vegetables", "Fruits", "Cereals");
  }

  // Remove duplicates and display
  const uniqueCrops = [...new Set(crops)];
  cropResult.innerHTML = `<b>Best Suitable Crops:</b><br>${uniqueCrops.join(", ")}`;
});
