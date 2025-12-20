"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, X, Trash2, PlusIcon, Pencil } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

import ImagePlusIcon from "@/public/assets/image-plus-icon.svg";
import ImagePlusWhiteIcon from "@/public/assets/Icon-plus-fill.svg";

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
  const [tags, setTags] = useState<string[]>(["Sports", "Accessories"]);
  const [tagInput, setTagInput] = useState("");

  const [variants, setVariants] = useState<Variant[]>([
    { color: "Yellow", size: "XS", price: 55, sku: "SKU-XS", stock: 120 },
  ]);

  const [images, setImages] = useState<ImageType[]>([]);

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

  /* ---------------- TAGS ---------------- */
  const addTag = () => {
    if (!tagInput.trim()) return;
    setTags((prev) => [...prev, tagInput.trim()]);
    setTagInput("");
  };

  const removeTag = (tag: string) => setTags((prev) => prev.filter((t) => t !== tag));

  /* ---------------- VARIANTS ---------------- */
  const addVariant = () =>
    setVariants((prev) => [...prev, { color: "", size: "", price: 0, sku: "", stock: 0 }]);

  const updateVariant = <K extends keyof Variant>(index: number, key: K, value: Variant[K]) => {
    setVariants((prev) => prev.map((v, i) => (i === index ? { ...v, [key]: value } : v)));
  };

  const removeVariant = (index: number) =>
    setVariants((prev) => prev.filter((_, i) => i !== index));

  /* ---------------- CATEGORIES ---------------- */
  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const addCategory = () => {
    const value = categoryInput.trim();

    if (!value) return;

    setCategories((prev) => (prev.includes(value) ? prev : [...prev, value]));

    setCategoryInput("");
  };

  return (
    <div className="">
      {/* Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-13 xl:gap-16 lg:gap-6">
        {/* LEFT */}
        <div className="xl:col-span-5 space-y-6">
          <h1 className="text-3xl">Product title</h1>
          <Card className="p-0 bg-transparent border-0 shadow-none">
            <CardContent className="space-y-5 px-0">
              <div className="flex flex-col gap-2">
                <Label className="text-md text-gray-700 pb-1">English</Label>
                <Input
                  className="bg-white h-15 placeholder:text-lg px-6 placeholder:text-gray-400 md:text-lg"
                  placeholder="Enter product title or name in English"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label className="text-md text-gray-700">Arabic</Label>
                <Input
                  className="bg-white h-15 placeholder:text-lg px-6 placeholder:text-gray-400 md:text-lg"
                  placeholder="Enter product title or name in Arabic"
                />
              </div>
            </CardContent>
          </Card>

          <div>
            <h2 className="text-3xl pt-5">Product description</h2>
          </div>
          <Card className="p-0 bg-transparent border-0 shadow-none">
            <CardContent className="space-y-5 px-0">
              <div className="flex flex-col gap-3">
                <Label className="text-md text-gray-700">English</Label>
                <Textarea
                  rows={20}
                  className="bg-white resize-y min-h-[10lh] md:text-lg px-5 py-3"
                  placeholder="Arabic description"
                />
              </div>
              <div className="flex flex-col gap-3 pt-5">
                <Label className="text-md text-gray-700 ">Arabic</Label>
                <Textarea
                  rows={20}
                  className="bg-white resize-y min-h-[10lh] md:text-lg px-5 py-3"
                  placeholder="Arabic description"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* RIGHT */}
        <div className="xl:col-span-6 space-y-6">
          <h1 className="text-3xl">Product meta</h1>

          {/* Categories + Tags */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
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
                          onCheckedChange={() => toggleCategory(cat)}
                          className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600 "
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
                  size={"dashboardDefault"}
                  className="mt-3 bg-white"
                  onClick={addCategory}
                >
                  <PlusIcon className="mr-2 h-4 w-4" />
                  Add categories
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg">Tags</h3>
              <div className="rounded-md mt-4">
                <div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center gap-2 rounded-full bg-white px-3 py-1 font-semibold border-2 border-blue-400"
                      >
                        <X size={18} className="cursor-pointer" onClick={() => removeTag(tag)} />
                        <span className="text-gray-700">{tag}</span>
                      </span>
                    ))}
                  </div>

                  <Input
                    placeholder="Add tag"
                    value={tagInput}
                    className="bg-white md:text-lg px-5 h-15"
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addTag()}
                  />

                  <Button
                    variant="dashboardOutline"
                    size={"dashboardDefault"}
                    className="mt-2 bg-white"
                    onClick={addTag}
                  >
                    <span>
                      <PlusIcon></PlusIcon>
                    </span>
                    <span>Add tag</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Variants */}
          <div className="grid md:grid-cols-2">
            <div className="mt-3">
              <h3 className="text-3xl">Product variants</h3>
              <div className="space-y-4 pt-3">
                {variants.map((v, i) => (
                  <div key={i} className="space-y-2 mb-10">
                    <div className="flex justify-between items-center border-b pb-2 border-black">
                      <span className="">Variant {i + 1}</span>
                      <div className="flex gap-3">
                        <Pencil size={18} className="cursor-pointer text-gray-500" />
                        <Trash2
                          size={18}
                          className="cursor-pointer text-red-500"
                          onClick={() => removeVariant(i)}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-5">
                      <div className="flex justify-between">
                        <div className="flex flex-col justify-center gap-3">
                          <h3 className="text-md text-gray-500">Color</h3>
                          <div className="bg-yellow-300 w-8 h-8 rounded-full "></div>
                        </div>
                        <div className="flex flex-col justify-center gap-3">
                          <h3 className="text-md text-gray-500">Size</h3>
                          <div className="">XS</div>
                        </div>
                        <div className="flex flex-col justify-center gap-3">
                          <h3 className="text-md text-gray-500">Price</h3>
                          <div>
                            55 <span>SAR</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between">
                        <div className="flex flex-col gap-2">
                          <h3 className="text-md text-gray-500">SKU</h3>
                          <div>S2526APPHFZ008-XS</div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <h3 className="text-md text-gray-500">Stock</h3>
                          <div>120</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <Button
                  className="-mt-10 bg-white"
                  size={"dashboardDefault"}
                  variant="dashboardOutline"
                  onClick={addVariant}
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Add variant
                </Button>
              </div>
            </div>
          </div>
          {/* Images */}
          <div className="mt-10">
            <h3 className="text-3xl">Product images</h3>

            <div className="pt-3 space-y-4">
              {/* File Input */}
              <Input
                id="product-images"
                type="file"
                accept="image/*"
                multiple
                hidden
                onChange={(e) => {
                  const files = Array.from(e.target.files ?? []);

                  setImages((prev) => {
                    const existing = new Set(
                      prev.map((img) => `${img.file.name}-${img.file.size}`)
                    );

                    const next = files
                      .filter((file) => !existing.has(`${file.name}-${file.size}`))
                      .map((file) => ({
                        file,
                        preview: URL.createObjectURL(file),
                      }));

                    return [...prev, ...next];
                  });

                  e.target.value = "";
                }}
              />

              {/* Upload Button */}
              <Label
                htmlFor="product-images"
                className="flex h-25 w-25 cursor-pointer items-center justify-center rounded-lg bg-white hover:bg-muted transition shadow-md"
              >
                <Image src={ImagePlusIcon} alt=""></Image>
              </Label>

              {/* Preview Grid */}
              <div className="">
                <h3 className="">Product gallery (JPG, JPEG or PNG format is recommended)</h3>
                {/* Grid */}
                <Card className="mt-2 rounded-md p-5">
                  <div className="grid md:grid-cols-4 grid-cols-2 gap-3">
                    {Array.from({ length: 8 }).map((_, index) => {
                      const img = images[index];

                      return (
                        <CardContent key={index} className="p-0">
                          <Label
                            htmlFor="product-images"
                            className="relative flex h-[140px] w-full cursor-pointer items-center justify-center rounded-lg bg-[#e6e7eb] overflow-hidden group"
                          >
                            {/* Image */}
                            {img ? (
                              <>
                                <Image
                                  src={img.preview}
                                  alt="product"
                                  fill
                                  className="object-cover z-10"
                                />

                                {/* Remove button */}
                                <div
                                  onClick={(e) => {
                                    e.preventDefault();
                                    URL.revokeObjectURL(img.preview);
                                    setImages((prev) => prev.filter((_, i) => i !== index));
                                  }}
                                  className="absolute right-1 top-1 z-10 rounded-full bg-black/70 p-1 text-white opacity-0 transition group-hover:opacity-100"
                                >
                                  <X size={15} className="" />
                                </div>
                              </>
                            ) : (
                              /* Placeholder */
                              <Image
                                src={ImagePlusWhiteIcon}
                                alt="add"
                                className="h-6 w-6 opacity-80"
                              />
                            )}
                          </Label>
                        </CardContent>
                      );
                    })}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* END */}
        <div className="xl:col-span-1">
          <Link href="#">
            <Button variant={"dashboardPrimary"} size={"dashboardDefault"}>
              Publish
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
