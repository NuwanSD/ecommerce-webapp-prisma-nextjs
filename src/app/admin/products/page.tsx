"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHeader } from "../_components/page";
import { ProductsTable } from "./_components/ProductsTable";

export default function AdminProductsPage() {
  return (
    <>
      <div className="flex justify-between items-center gap-4">
        <PageHeader>Products</PageHeader>
        <Button asChild>
          <Link href="/admin/products/new">Add Products</Link>
        </Button>
      </div>
      <ProductsTable />
    </>
  );
}
