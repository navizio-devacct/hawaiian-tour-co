import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const BigIslandCulture = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cultural Heritage</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Historical Sites</h3>
            <p>Visit ancient temples and petroglyphs that tell the story of Hawaii's first inhabitants.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Traditional Practices</h3>
            <p>Learn about traditional farming, fishing, and crafting methods still practiced today.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Sacred Places</h3>
            <p>Discover the spiritual significance of the island's natural wonders.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};