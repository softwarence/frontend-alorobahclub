"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";

import { Plus, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const DEFAULT_IMAGE = "/assets/football-field.jpg";

export default function SettingsPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [profileImg, setProfileImg] = useState<string>(DEFAULT_IMAGE);
  const [imageFile, setImageFile] = useState<File | null>(null);

  /** Cleanup object URL to avoid memory leak */
  useEffect(() => {
    return () => {
      if (profileImg.startsWith("blob:")) {
        URL.revokeObjectURL(profileImg);
      }
    };
  }, [profileImg]);

  const handleImageChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    setProfileImg(previewUrl);
    setImageFile(file);
  }, []);

  return (
    <div className="space-y-10">
      {/* HEADER */}
      <div className="flex flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
        <h1 className="md:text-4xl text-2xl font-normal text-[#1a2b3b]">Personal Info</h1>
        <div className="">
          <Button variant={"dashboardPrimary"} size={"dashboardDefault"} className="w-full">
            Save
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-16">
        <div className="lg:col-span-3 space-y-10">
          {/* PROFILE IMAGE */}
          <div className="flex flex-col items-center lg:items-start gap-4">
            <div className="flex flex-col items-center gap-4">
              <Avatar className="w-46 h-46 shadow-sm">
                <AvatarImage
                  src={profileImg !== DEFAULT_IMAGE ? profileImg : undefined}
                  alt="Profile"
                  className="object-cover"
                />
                <AvatarFallback className="bg-gray-100 text-gray-400">
                  <User className="w-14 h-14" />
                </AvatarFallback>
              </Avatar>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />

              <Button
                variant="outline"
                onClick={() => fileInputRef.current?.click()}
                className="bg-transparent border-gray-400 text-md font-light px-6 h-9 rounded-md hover:bg-white"
              >
                Change
              </Button>
            </div>
          </div>

          {/* FORM */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
            {/* Left column */}
            <div className="space-y-5">
              <div className="space-y-2">
                <Label className="text-gray-500 font-normal text-base">Name</Label>
                <Input
                  placeholder="Enter your full name"
                  className="bg-white border-none h-14 rounded-lg shadow-sm px-5 md:text-lg"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-gray-500 font-normal text-base">Email</Label>
                <Input
                  placeholder="Enter your email address"
                  className="bg-[#f8fafc] border-none h-14 rounded-lg shadow-sm text-base px-5 text-gray-500 md:text-lg"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-gray-500 font-normal text-base">Phone number</Label>
                <Input
                  placeholder="Enter your phone number"
                  className="bg-white border-none h-14 rounded-lg shadow-sm text-base px-5 md:text-lg"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-gray-500 font-normal text-base">Gender</Label>
                <Select>
                  <SelectTrigger className="w-full bg-white border-none h-14 py-4 rounded-lg shadow-sm text-base px-5">
                    <SelectValue placeholder="Select your gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-gray-500 font-normal text-base">Date of birth</Label>
                <Input
                  placeholder="DD - MM - YYYY"
                  className="bg-white border-none h-14 rounded-lg shadow-sm text-base px-5 md:text-lg"
                />
              </div>

              <div className="md:col-span-2 space-y-2 pt-2">
                <Label className="text-gray-500 font-normal text-base">Address</Label>
                <Input
                  placeholder="Enter your full address"
                  className="bg-white border-none h-14 rounded-lg shadow-sm text-base px-5 md:text-lg"
                />
              </div>
            </div>

            {/* Right column - Payment */}
            <div className="space-y-4 w-full md:w-auto">
              <Label className="text-gray-500 font-normal text-base">Payment method</Label>
              <div className="bg-white rounded-2xl p-8 md:p-12 flex flex-col items-center justify-center border-none shadow-sm min-h-[220px] w-full">
                <p className="text-gray-300 text-base mb-4 md:mb-6">No available cards</p>
                <Button
                  variant="outline"
                  className="border-gray-400 text-[#1a2b3b] h-12 px-6 md:px-8 rounded-lg gap-2 font-normal flex items-center justify-center"
                >
                  <Plus className="w-5 h-5" />
                  Add card
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
