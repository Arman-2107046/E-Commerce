"use client";

import Navbar from "@/components/Navbar";
import FooterComponent from "@/components/Footer";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ClothingBody from "@/components/ClothingBody";

const ClothingFashion = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Breadcrumb */}
      <div className="px-6 py-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Clothing & Fashion</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Banner */}
      <section className="flex justify-center mt-6 rounded-lg">
        <img
          src="/Banners/clothing.jpg"
          alt="Banner"
          className="w-11/12 max-w-7xl h-auto object-cover rounded-md shadow-sm"
        />
      </section>

      <section>
        <ClothingBody />
      </section>

      <FooterComponent />
    </div>
  );
};

export default ClothingFashion;
