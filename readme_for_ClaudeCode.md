# 🌐 GreenStem Website – Improvements & Dynamic Mock Features

**Date:** 2025-07-04

---

## ✅ UI/UX Improvements (Implemented & Planned)

### 🖼️ Hero Banner
- Full-screen hero image (`farm-plants.jpg`)
- Overlay text:
  > "From Kenya’s Soil to Europe’s Shelves  
  > Fresh. Carbon-Neutral. Traceable."
- CTA: “Explore Our Produce” button → `products.html`

### 🧭 Navigation & Layout
- Sticky nav bar + scroll-to-top
- Add navigation for:
  - **Our Farms**
  - **Impact Tracker**
  - **Investor Corner**
- Improved ARIA tags for accessibility

### 📝 Content Upgrades
- **About Page**: Add founder story (French beans on grandmother's plot)
- **Our Farms Section**: Cards for each farm project: location, team, status
- **Impact Tracker**: Animated metrics (plots sponsored, CO₂ offset, harvests)
- **Investor Corner**: ROI forecasts, downloadable pitch materials

---

## 📡 Dynamic Buyer Dashboard (Mock-Up)

> 🔐 Password-Protected Access (Username + Password required)

### Overview
An interactive data layer for B2B buyers to track product and logistics flow in real time.

**Mock Data Insights:**

| Section | Metric/Display |
|--------|----------------|
| **Farm Status** | Crop variety, plot coordinates, farm name |
| **Processing Queue** | What is being washed, sorted, graded |
| **Cold Storage** | Current temp (°C), humidity, quantity stored |
| **Harvest Tracker** | Batch #, harvest date, quality metrics (firmness, color, size) |
| **Logistics Chain** | Transit status: On road / Airport / In flight / Landed |
| **Delivery Destination** | ETA to Frankfurt / Amsterdam |
| **Real-time Temperature Logs** | From harvest to destination (Cold chain audit trail) |
| **Action Buttons** | Request Sample • Place Order • Chat with QA team |

---

## 💰 Investor Portal (Mock-Up)

> 🔐 Secure login per investor

### Modules
- **Investment Summary Dashboard**
  - Capital invested, returns to date, farm assigned
- **Adopted Farm Viewer**
  - Map, drone shots, live temperature and NDVI feed
  - Video updates by week
- **Harvest Reports**
  - Batch #, quality analysis, export logs
- **Impact Metrics**
  - CO₂ offset per unit
  - Jobs created
  - Women/youth participation
- **Financial Breakdown**
  - Cost vs revenue per phase
- **Downloadable Reports**
  - Tax letters, certifications, performance logs

---

## 🔍 Transparency & Traceability: UX Goals

- Each product batch has a **traceable digital twin** with:
  - Harvest timestamp
  - GPS coordinates
  - Cold chain monitoring
  - Farmer ID
- Buyers and investors see the **same transparent journey**

---

## 📊 Future Data Dashboard Extensions

- Climate trend overlays on map
- Sensor-triggered alerts (rain, pest, irrigation)
- Predictive analytics for harvest volume
- CO₂ offset real-time counters
- AI-generated insight summaries

---

## 🔧 Dev Recommendations

- Use static mock-ups first (HTML/JS animations)
- Local dev via Live Server
- Phase 2: Add backend (Node/Flask + SQLite or Supabase) for login & DB
- Future hosting: Netlify + Cloudinary (for video/image serving)

---

## ✅ File Prepared By Assistant
For local use in `/docs` or root project folder. Update alongside other development docs.

