import { Card, CardContent } from "@/components/ui/card";
import { promises as fs } from "fs";
import path from "path";
import { Metadata } from "next";
import { z } from "zod";

import { columns } from "@/components/categories/columns";
import { DataTable } from "@/components/categories/data-table";
import { taskSchema } from "@/data/schema";

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
};

async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "data/tasks.json")
  );
  const tasks = JSON.parse(data.toString());
  return z.array(taskSchema).parse(tasks);
}

export async function CategoriesContent() {
  const tasks = await getTasks();
  return (
    <Card className="rounded-lg border-none mt-6">
      <CardContent className="p-6">
        <div className="flex justify-center items-start min-h-[calc(100vh-56px-56px-20px-24px-48px)]">
          <div className="overflow-auto w-full flex items-start relative">
            <div className="h-full flex-1 flex-col space-y-8 flex">
              <DataTable data={tasks} columns={columns} />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
