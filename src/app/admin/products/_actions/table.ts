"use server";

import db from "@/db/db";

interface Product {
  id: string;
  name: string;
  priceInCents: number;
  isAvailableForPurchase: boolean;
  _count: {
    orders: number;
  };
}

export default async function getProductData(): Promise<Product[]> {
  const products = await db.product.findMany({
    select: {
      id: true,
      name: true,
      priceInCents: true,
      isAvailableForPurchase: true,
      _count: { select: { orders: true } },
    },
    orderBy: { name: "asc" },
  });

  return products;
}
