"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Upload } from "lucide-react";

export default function DashboardPostPage() {
  type ImageType = { file: File; preview: string };
  const [images, setImages] = useState<ImageType[]>([]);

  //   ==============================================

  const [categories, setCategories] = useState(["New post", "Old post", "Featured", "Popular"]);

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [newCategory, setNewCategory] = useState("");
  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const addCategory = () => {
    if (newCategory.trim() && !categories.includes(newCategory.trim())) {
      setCategories([...categories, newCategory.trim()]);
      setNewCategory("");
    }
  };
  // ==============================================================
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl "> Post title</h1>

        <h1 className="text-2xl pr-6"> Post meta</h1>

        <Link href="#" className="bg-black text-white px-5 py-2 rounded text-base">
          Publish
        </Link>
      </div>

      {/* 3 Column Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* SIDE 1: Title + Description */}
        <div className="xl:col-span-5 space-y-6">
          <Card title="">
            <Input label="English" placeholder="Enter product title or name in English" />
            <Input label="Arabic" placeholder="Enter product title or name in Arabic" />
          </Card>
          <div>
            <h1 className="text-2xl mb-7 "> Post description</h1>

            <Card title="">
              <Textarea
                label="English"
                placeholder="Enter product description in English  "
                rows={5}
              />
              <Textarea label="Arabic" placeholder="Enter product description in Arabic" rows={5} />
            </Card>
          </div>
        </div>

        {/* SIDE 2: Meta + Variant + Image */}

        <div className="xl:col-span-5 space-y-6">
          {/* Categories */}
          <Card title="" className="space-y-1">
            {categories.map((cat) => (
              <label key={cat} className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                />
                {cat}
              </label>
            ))}

            {/* Add Category */}

            <input
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder=" New category"
              className="border rounded  py-2 text-sm w-[75%] px-3 mt-1 mb-1.5"
            />
            <button onClick={addCategory} className="border rounded px-4 p-1   text-sm  ">
              Add category
            </button>
          </Card>

          <Card title="Post image">
            <input
              type="file"
              accept="image/*"
              multiple
              hidden
              id="product-images"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const files = Array.from(e.target.files || []);
                const urls = files.map((file: File) => ({
                  file,
                  preview: URL.createObjectURL(file),
                }));
                setImages((prev: ImageType[]) => [...prev, ...urls]);
              }}
            />

            <label
              htmlFor="product-images"
              className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center text-sm text-gray-500 cursor-pointer"
            >
              <Upload size={20} />
              <p className="mt-2">Click to upload product images</p>
              <p className="text-xs">PNG, JPG up to 5MB</p>
            </label>

            <div className="grid grid-cols-4 gap-2 mt-4">
              {images.map((img: { file: File; preview: string }, i: number) => (
                <div key={i} className="relative group">
                  <Image
                    src={img.preview}
                    alt="product"
                    className="aspect-square object-cover rounded"
                    width={200}
                    height={200}
                  />
                  <button
                    onClick={() => setImages(images.filter((_, idx: number) => idx !== i))}
                    className="absolute top-1 right-1 bg-black/70 text-white rounded-full p-1 opacity-0 group-hover:opacity-100"
                  >
                    <X size={12} />
                  </button>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

function Card({ title, children, className }: CardProps) {
  return (
    <div className={`bg-white rounded-xl p-4 shadow-sm${className ? ` ${className}` : ""}`}>
      <h2 className="text-sm font-medium mb-4">{title}</h2>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function Input({ label, ...props }: InputProps) {
  return (
    <div>
      <label className="text-xs text-gray-500">{label}</label>
      <input {...props} className="w-full border rounded px-3 py-2 text-sm mt-1" />
    </div>
  );
}

import React from "react";
import Link from "next/link";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

function Textarea({ label, ...props }: TextareaProps) {
  return (
    <div>
      <label className="text-xs text-gray-500">{label}</label>
      <textarea {...props} rows={4} className="w-full border rounded px-3 py-2 text-sm mt-1" />
    </div>
  );
}
