import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export const OahuCulture = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cultural Guide to Oahu</CardTitle>
        <CardDescription>
          Essential cultural information for visitors
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Local Customs</h3>
              <p className="text-gray-600">
                Remove shoes before entering homes, respect sacred sites, and
                embrace the "Aloha Spirit" - treating others with love and respect.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Common Phrases</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <span className="font-medium">Aloha</span> - Hello, goodbye,
                  love
                </li>
                <li>
                  <span className="font-medium">Mahalo</span> - Thank you
                </li>
                <li>
                  <span className="font-medium">Pono</span> - Righteousness,
                  balance
                </li>
                <li>
                  <span className="font-medium">Ohana</span> - Family
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Cultural Sites</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Iolani Palace - Only royal palace in the United States</li>
                <li>
                  Bishop Museum - Largest collection of Polynesian artifacts
                </li>
                <li>
                  Valley of the Temples - Home to the Byodo-In Temple
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Local Etiquette</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Always ask permission before taking photos of people</li>
                <li>
                  Don't remove rocks or sand from beaches (it's considered bad
                  luck)
                </li>
                <li>
                  Respect wildlife and maintain distance from sea turtles and
                  monk seals
                </li>
              </ul>
            </div>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};