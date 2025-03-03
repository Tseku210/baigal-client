import Image from "next/image";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";

export const ProductCard = () => {
  return (
    <Card className="max-w-60 overflow-hidden hover:shadow-lg">
      <CardHeader className="relative aspect-square">
        <Image
          src="https://picsum.photos/id/63/200/300"
          alt="img"
          className="object-cover"
          fill
        />
      </CardHeader>
      <CardContent className="p-2 space-y-2">
        <div className="flex flex-nowrap no-scrollbar overflow-x-auto gap-1">
          <Badge variant="default">Үрэл</Badge>
          <Badge variant="default">Үрэл</Badge>
          <Badge variant="outline">Үрэл</Badge>
          <Badge variant="outline">Үрэл</Badge>
          <Badge variant="outline">Үрэл</Badge>
        </div>
        <p className="text-xl font-medium">Тунгалаг-5</p>
      </CardContent>
    </Card>
  );
};
