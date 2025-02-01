import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun, Cloud, Droplets } from "lucide-react";

export const BigIslandWeather = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Big Island Weather</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Sun className="w-8 h-8 text-yellow-500" />
            <div>
              <p className="font-semibold">Average Temperature</p>
              <p>70-85°F (21-29°C)</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Cloud className="w-8 h-8 text-gray-500" />
            <div>
              <p className="font-semibold">Best Time to Visit</p>
              <p>September to November</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Droplets className="w-8 h-8 text-blue-500" />
            <div>
              <p className="font-semibold">Climate Zones</p>
              <p>11 of world's 13 climate zones</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};