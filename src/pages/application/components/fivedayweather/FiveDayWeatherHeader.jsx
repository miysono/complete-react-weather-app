import { useWeatherContext } from "../../../../hooks/useWeatherContext";

export default function FiveDayWeatherHeader() {
  const { regionData } = useWeatherContext();
  return (
    <div className="text-center mt-2.5">
      <h1 className="text-xl">{regionData.principalSubdivision}</h1>
      <h3 className="text-2xl">{regionData.locality}</h3>
    </div>
  );
}
