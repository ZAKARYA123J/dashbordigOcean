import Link from "next/link";

import { CategoriesContent } from "@/components/content/categories-content";
import { ContentLayout } from "@/components/content-layout";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { PlusIcon } from "@radix-ui/react-icons"

export default function CategoriesPage() {
  return (
    <ContentLayout title="Categories">
      <Breadcrumb>
        <div className="flex items-center justify-between">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/dashboard">Dashboard</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Categories</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
          <Button className="rounded-lg hover:bg-background/60 space-x-3 text-base h-10 px-6" variant="outline">
            <PlusIcon className="w-4 h-4" />
            <span>Add</span>
          </Button>
        </div>
      </Breadcrumb>
      <CategoriesContent />
    </ContentLayout>
  );
}
