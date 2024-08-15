"use client";
import Image from "next/image";
import Hero from "./ui/components/hero";
import Images from "./ui/components/Images";
import { useEffect, useState } from "react";
import { getItems } from "./service/poster";
import SectionTwo from "./ui/components/sectionTwo";

export default function Home() {
  const [query, setQuery] = useState(" ");
  const [images, setImages] = useState([]);
 
  
 

  useEffect(() => {
    if (query) {
      
      const fetchData = async () => {
        const data = await getItems("", {
          params: {
            q: query,
            image_type: "image",
            pretty: true,
          },
        });
        setImages(data.data.hits);
      };

      let timeout = setTimeout(fetchData, 1000);
      return () => clearTimeout(timeout);
    } else {
      // If query is empty, clear images
     getItems("", {
      params: {
        q: "",
        image_type: "image",
        pretty: true,
      },
    }).then((data) => {
      setImages(data.data.hits);
    });
    }
  }, [query]);

  return (
    <>
      <Hero setQuery={setQuery} />
      <SectionTwo setQuery={setQuery}/>
      <Images images={images} />
    </>
  );
}
