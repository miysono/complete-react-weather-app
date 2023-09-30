/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/AboutUs.jsx",
    "./src/pages/Application.jsx",
    "./src/pages/Forecasts.jsx",
    "./src/pages/Homepage.jsx",
    "./src/pages/Login.jsx",
    "./src/pages/PageNotFound.jsx",
    "./src/pages/Pricing.jsx",
    "./src/components/Button.jsx",
    "./src/components/Footer.jsx",
    "./src/components/Navbar.jsx",
    "./src/components/homepage/Clouds.jsx",
    "./src/components/homepage/HomepageBody.jsx",
    "./src/components/homepage/HomepageDescriptions.jsx",
    "./src/components/homepage/HomepageFeatures.jsx",
    "./src/components/homepage/HomepageIntro.jsx",
    "./src/components/homepage/Sun.jsx",
    "./src/components/pricing/CardsContainer.jsx",
    "./src/components/pricing/PricingBody.jsx",
    "./src/components/pricing/PricingCard.jsx",
    "./src/components/pricing/PricingFeature.jsx",
    "./src/components/pricing/PricingFeatureList.jsx",
    "./src/components/pricing/PricingTitle.jsx",
    "./src/components/aboutus/AboutUsBody.jsx",
    "./src/components/aboutus/AboutUsContainer.jsx",
    "./src/components/aboutus/AboutUsIntro.jsx",
    "./src/components/aboutus/AboutUsSectionContainer.jsx",
    "./src/components/aboutus/AboutUsSubtitle.jsx",
    "./src/components/aboutus/AboutUsTitle.jsx",
    "./src/components/application/ApplicationLayout.jsx",
    "./src/components/application/ApplicationMap.jsx",
    "./src/components/application/layout/FiveDayWeatherContainer.jsx",
    "./src/components/application/layout/LayoutBody.jsx",
    "./src/components/application/layout/LayoutForecastOption.jsx",
    "./src/components/application/layout/LayoutForecastOptions.jsx",
    "./src/components/application/layout/LayoutHeader.jsx",
    "./src/components/application/layout/LayoutIntro.jsx",
    "./src/components/application/layout/SavedWeatherContainer.jsx",
    "./src/components/application/layout/Spinner.jsx",
    "./src/components/application/layout/WeatherContainer.jsx",

    "./src/components/application/overlay/ApplicationOverlay.jsx",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "clouds-move": "move-clouds 20s linear infinite",
        "rain-move": "rain 5s linear infinite",
      },
      keyframes: {
        "move-clouds": {},
        rain: {
          "0%": { transform: "translateY(-5%)" },
          "100%": { transform: "translateY(20%) rotate(10deg)" },
        },
      },
    },
  },
  plugins: [],
};
