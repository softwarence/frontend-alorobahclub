"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { PlusIcon, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

import ImagePlusIcon from "@/public/assets/image-plus-icon.svg";

type Variant = {
  color: string;
  size: string;
  price: number;
  sku: string;
  stock: number;
};

type ImageType = {
  file: File;
  preview: string;
};

export default function ProductCreateThreeColumn() {
  /* ---------------- TAGS ---------------- */
  const [tags, setTags] = useState<string[]>(["Sports", "Accessories"]);
  const [tagInput, setTagInput] = useState("");

  /* ---------------- VARIANTS ---------------- */
  const [variants, setVariants] = useState<Variant[]>([
    { color: "Yellow", size: "XS", price: 55, sku: "SKU-XS", stock: 120 },
  ]);

  /* ---------------- IMAGES ---------------- */
  const [image, setImage] = useState<ImageType | null>(null);

  /* ---------------- CATEGORIES ---------------- */
  const [categories, setCategories] = useState<string[]>([
    "New arrival",
    "New year collections",
    "Sports",
    "Fashion & style",
    "Graphic collection",
    "Graphic collection 2",
  ]);

  const [categoryInput, setCategoryInput] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  /* ---------------- TAG HANDLERS ---------------- */
  const addTag = useCallback(() => {
    if (!tagInput.trim()) return;
    setTags((prev) => [...prev, tagInput.trim()]);
    setTagInput("");
  }, [tagInput]);

  const removeTag = useCallback((tag: string) => {
    setTags((prev) => prev.filter((t) => t !== tag));
  }, []);

  /* ---------------- VARIANT HANDLERS ---------------- */
  const addVariant = useCallback(() => {
    setVariants((prev) => [...prev, { color: "", size: "", price: 0, sku: "", stock: 0 }]);
  }, []);

  const updateVariant = useCallback(
    <K extends keyof Variant>(index: number, key: K, value: Variant[K]) => {
      setVariants((prev) => prev.map((v, i) => (i === index ? { ...v, [key]: value } : v)));
    },
    []
  );

  const removeVariant = useCallback((index: number) => {
    setVariants((prev) => prev.filter((_, i) => i !== index));
  }, []);

  /* ---------------- CATEGORY HANDLERS ---------------- */
  const toggleCategory = useCallback((category: string, checked: boolean) => {
    setSelectedCategories((prev) =>
      checked ? [...prev, category] : prev.filter((c) => c !== category)
    );
  }, []);

  const addCategory = useCallback(() => {
    const value = categoryInput.trim();
    if (!value) return;

    setCategories((prev) => (prev.includes(value) ? prev : [...prev, value]));
    setCategoryInput("");
  }, [categoryInput]);

  return (
    <div>
      <div className="grid grid-cols-1 xl:grid-cols-13 xl:gap-16 lg:gap-6">
        {/* LEFT */}
        <div className="xl:col-span-5 space-y-6">
          <h1 className="text-3xl">Posts title</h1>

          <Card className="p-0 bg-transparent border-0 shadow-none">
            <CardContent className="space-y-5 px-0">
              <div className="flex flex-col gap-2">
                <Label className="text-md text-gray-700 pb-1">English</Label>
                <Input
                  className="bg-white h-15 placeholder:text-lg px-6 placeholder:text-gray-400 md:text-lg"
                  placeholder="Enter post title or name in English"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label className="text-md text-gray-700">Arabic</Label>
                <Input
                  className="bg-white h-15 placeholder:text-lg px-6 placeholder:text-gray-400 md:text-lg"
                  placeholder="Enter post title or name in Arabic"
                />
              </div>
            </CardContent>
          </Card>

          <h2 className="text-3xl pt-5">Posts description</h2>

          <Card className="p-0 bg-transparent border-0 shadow-none">
            <CardContent className="space-y-5 px-0">
              <div className="flex flex-col gap-3">
                <Label className="text-md text-gray-700">English</Label>
                <Textarea
                  rows={20}
                  className="bg-white resize-y min-h-[10lh] md:text-lg px-5 py-3 placeholder:text-gray-400"
                  placeholder="Enter production description in English"
                />
              </div>

              <div className="flex flex-col gap-3 pt-5">
                <Label className="text-md text-gray-700">Arabic</Label>
                <Textarea
                  rows={20}
                  className="bg-white resize-y min-h-[10lh] md:text-lg px-5 py-3 placeholder:text-gray-400"
                  placeholder="Enter production description in Arabic"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* RIGHT */}
        <div className="xl:col-span-6 space-y-6">
          <h1 className="text-3xl">Posts meta</h1>

          <div className="w-1/2">
            <h3 className="text-lg">Categories</h3>

            <Card className="rounded-md mt-2">
              <CardContent className="space-y-3">
                {categories.map((cat) => {
                  const id = `category-${cat}`;

                  return (
                    <div key={cat} className="flex items-center space-x-2">
                      <Checkbox
                        id={id}
                        checked={selectedCategories.includes(cat)}
                        onCheckedChange={(v) => toggleCategory(cat, Boolean(v))}
                        className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                      />
                      <Label htmlFor={id} className="cursor-pointer">
                        {cat}
                      </Label>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            <div className="mt-4">
              <Input
                placeholder="Add categories"
                value={categoryInput}
                className="bg-white py-5 md:text-lg px-5 h-15"
                onChange={(e) => setCategoryInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addCategory();
                  }
                }}
              />

              <Button
                variant="dashboardOutline"
                size="dashboardDefault"
                className="mt-3 bg-white"
                onClick={addCategory}
              >
                <PlusIcon className="mr-2 h-4 w-4" />
                Add categories
              </Button>
            </div>
          </div>

          {/* IMAGES */}
          <div className="mt-10">
            <h3 className="text-3xl">Posts images</h3>

            <div className="pt-3 space-y-4">
              <Input
                id="posts-images"
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;

                  setImage({
                    file,
                    preview: URL.createObjectURL(file),
                  });

                  e.target.value = "";
                }}
              />
              <div className="pt-3 space-y-4">
                {!image ? (
                  /* UPLOAD BUTTON */
                  <Label
                    htmlFor="posts-images"
                    className="flex h-75 w-1/2 cursor-pointer items-center justify-center rounded-lg bg-white hover:bg-muted transition shadow-md"
                  >
                    <Image src={ImagePlusIcon} alt="Upload" />
                  </Label>
                ) : (
                  /* IMAGE PREVIEW */
                  <div className="relative h-75 w-1/2 rounded-lg overflow-hidden shadow-md">
                    <Image src={image.preview} alt="Selected image" fill className="object-cover" />

                    {/* REMOVE BUTTON */}
                    {/* Remove button */}
                    <div
                      onClick={(e) => {
                        e.preventDefault();
                        URL.revokeObjectURL(image.preview);

                        setImage(null);
                      }}
                      className="absolute right-2 top-2 z-10 rounded-full bg-white/80 p-1 text-black transition opacity-100 hover:bg-white"
                    >
                      <X size={18} className="" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ACTION */}
        <div className="xl:col-span-1">
          <Link href="#">
            <Button variant="dashboardPrimary" size="dashboardDefault">
              Publish
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
