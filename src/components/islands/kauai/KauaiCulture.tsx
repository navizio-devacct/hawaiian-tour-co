import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const KauaiCulture = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cultural Heritage</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Ancient Legends</h3>
            <p>Learn about the myths and legends that shaped Kauai's rich cultural landscape.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Traditional Arts</h3>
            <p>Experience traditional hula, music, and crafts passed down through generations.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Local Life</h3>
            <p>Immerse yourself in the laid-back lifestyle and warm hospitality of Kauai.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};