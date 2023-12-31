import LayoutHeader from "../components/LayoutHeader";
import LayoutBody from "../components/LayoutBody";
import LayoutForecastOptions from "../components/LayoutForecastOptions";
import LayoutForecastOption from "../components/LayoutForecastOption";

import { Outlet } from "react-router-dom";

export default function ApplicationLayout() {
  return (
    <LayoutBody>
      {/* Layout header */}
      <LayoutHeader />
      {/* Forecast options */}
      <LayoutForecastOptions>
        <LayoutForecastOption linkTo="realtime" optionName="Realtime" />
        <LayoutForecastOption linkTo="5day" optionName="5-Day" />
        <LayoutForecastOption linkTo="saved" optionName="Saved" />
      </LayoutForecastOptions>
      <Outlet />
    </LayoutBody>
  );
}
