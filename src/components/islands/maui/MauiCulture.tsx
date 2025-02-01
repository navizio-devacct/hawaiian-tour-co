import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const MauiCulture = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cultural Heritage</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Ancient Traditions</h3>
            <p>Discover the rich history of Maui's indigenous culture through traditional practices and sacred sites.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Local Customs</h3>
            <p>Experience the warmth of Hawaiian hospitality and learn about important cultural protocols.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Festivals</h3>
            <p>Join in celebrations of music, dance, and traditional ceremonies throughout the year.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};